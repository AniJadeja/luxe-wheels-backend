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

const updateSession = async (sessionToken) => {
  try {
    const session = await NewSession.findOne({ "sessions._id": sessionToken });
    if (!session) {
      return null;
    }
    let sessionIndex = -1;
    for (let i = 0; i < session.sessions.length; i++) {
      if (session.sessions[i]._id.toString() == sessionToken.toString()) {
        sessionIndex = i;
        break;
      }
    }
    if (sessionIndex == -1) {
      console.log(
        "Session.js => updateSession => No session found for token : ",
        sessionToken
      );
      return null;
    }
    const newExpiration = new Date(
      new Date().getTime() + 259200000
    ).toUTCString();
    session.sessions[sessionIndex].expiration = newExpiration;
    const updatedSession = await NewSession.updateOne(
      { "sessions._id": sessionToken },
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
    const sessions = await NewSession.find({ email: email });
    let userSessions = [];
    sessions.forEach((element) => {
      userSessions.push(element.sessions[0]);
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
module.exports = {
  initiateSession,
  retrieveSession,
  retrieveAllSessions,
  deleteSession,
  updateSession,
};
