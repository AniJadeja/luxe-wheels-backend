const NewSession = require("../models/SessionNew");

const initiateSession = async (userData, sessionData, expiration) => {
  let newSession;
  try {
    newSession = await NewSession.create({
      uid: userData.uid,
      email: userData.email,
      sessions: [
        {
          expiration: expiration,
          browserName: sessionData.browserName,
          browserVersion: sessionData.browserVersion,
          osName: sessionData.osName,
          screenRes: sessionData.screenRes,
        },
      ],
    });
  } catch (error) {
    console.log("initiateSession => error creating new session : ", error);
    return null;
  }
  return newSession.sessions[0]._id;
};

const addNewSession = async (userEmail, sessionData, expiration) => {
  try {
    const session = await NewSession.findOne({
      email: userEmail,
    });
    if (!session) {
      return null;
    }
    let sessions = session.sessions;
    sessions.push({
      expiration: expiration,
      browserName: sessionData.browserName,
      browserVersion: sessionData.browserVersion,
      osName: sessionData.osName,
      screenRes: sessionData.screenRes,
    });
    const updatedSession = await NewSession.updateOne(
      { email: userEmail },
      { $set: { sessions } }
    );
    if (updatedSession.modifiedCount > 0) {
      const sessions = await retrieveAllSessions(userEmail);

      let currentSession = null;

      sessions.forEach((session) => {
        if (
          session.browserName === sessionData.browserName &&
          session.browserVersion === sessionData.browserVersion &&
          session.osName === sessionData.osName &&
          session.screenRes === sessionData.screenRes
        )
          currentSession = session._id;
      });
      const updatedSessionId = currentSession;
      console.log(
        "Session.js => addNewSession => updatedSessionId : " + updatedSessionId
      );
      return updatedSessionId;
    } else {
      return null;
    }
  } catch (error) {
    console.log("addNewSession => error adding new session : ", error);
    return null;
  }
};

const updateSession = async (userSessionToken) => {
  try {
    const session = await NewSession.findOne({
      "sessions._id": userSessionToken,
    });
    console.log("Session.js => updateSession => session : " + session);
    if (!session) {
      return null;
    }
    let sessionIndex = -1;
    for (let i = 0; i < session.sessions.length; i++) {
      if (session.sessions[i]._id.toString() == userSessionToken.toString()) {
        sessionIndex = i;
        break;
      }
    }
    if (sessionIndex == -1) {
      console.log(
        "Session.js => updateSession => No session found for token : ",
        userSessionToken
      );
      return null;
    }
    const newExpiration = new Date(
      new Date().getTime() + 259200000
    ).toUTCString();
    session.sessions[sessionIndex].expiration = newExpiration;
    const updatedSession = await NewSession.updateOne(
      { "sessions._id": userSessionToken },
      { $set: { "sessions.$": session.sessions } }
    );
    return updatedSession ? newExpiration : false;
  } catch (err) {
    console.log("updateSession => error updating session : ", err);
    return null;
  }
};

const retrieveSession = async (sessionToken) => {
  try {
    if (!sessionToken) {
      return null;
    }
    const session = await NewSession.findOne({ "sessions._id": sessionToken });
    return session;
  } catch (error) {
    console.log("retrieveSession => error retrieving session : ", error);
    return null;
  }
};

const retrieveAllSessions = async (email) => {
  // retrieve all sessions from database 
  try {
    const session = await NewSession.find({ email: email });
    let userSessions = [];
    const activeSessions = session[0].sessions
    activeSessions.forEach((element) => {
      userSessions.push(element);
    });
    return userSessions;
  } catch (error) {
    console.log("retrieveAllSessions => error retrieving sessions : ", error);
    return null;
  }
};

const deleteSession = async (sessionToken) => {
  try {
    const session = await NewSession.findOne({ "sessions._id": sessionToken });
    if (!session) {
      return null;
    }

    const deletedSession = await NewSession.deleteOne({
      "sessions._id": sessionToken,
    }); 
    return deletedSession.deletedCount > 0 ? true : false;
  } catch (error) {
    console.log("deleteSession => error deleting session : ", error);
    return null;
  }
};

const expiration2 = new Date(new Date().getTime() + 259200000).toUTCString();
const sessionDataToPass = {
  browserName: "edge",
  browserVersion: "10.0.0",
  osName: "win 11",
  screenRes: "360*480",
};
const userSessionTokenToPass = "RajK123@ixios.com";

//retrieveAllSessions("RajK123@ixios.com");

//console.log(addNewSession(userSessionTokenToPass, sessionDataToPass, expiration2));

//deleteSession();

module.exports = {
  initiateSession,
  retrieveSession,
  retrieveAllSessions,
  deleteSession,
  updateSession,
  addNewSession,
};
