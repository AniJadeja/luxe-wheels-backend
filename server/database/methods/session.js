const sessionModel = require("../models/Session");
const  SessionToUid  = require("../models/SessionToUid");
const { getAllSessionIds } = require("./sessionToUid");

const initiateSession = async (userData, sessionData, expiration) => {
  let newSession;
  try {
    newSession = await sessionModel.create({
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

    try {
        const newSessionUid = await SessionToUid.create({
          uid: userData.uid,
          sessionToken: newSession.sessions[0]._id,
        });
      if (!newSessionUid)
        console.log(
          "initiateSession => error creating new sessionToUid : ",
          error
        );
      else
        console.log(
          "initiateSession => new sessionToUid created : ",
          newSessionUid
        );
    } catch (error) {
      console.log("initiateSession => error creating new sessionToUid : ", error);
    }
  } catch (error) {
    console.log("initiateSession => error creating new session : ", error);
    return null;
  }

  return newSession.sessions[0]._id;
};

const addNewSession = async (userEmail, sessionData, expiration) => {
  try {
    console.log("addNewSession => userEmail : ", userEmail);
    const session = await sessionModel.findOne({
      email: userEmail,
    });
    if (!session) {
      console.log("addNewSession => session not found for user : ", userEmail);
      return null;
    }
    console.log("addNewSession => session found : ", session);
    let sessions = session.sessions;
    sessions.push({
      expiration: expiration,
      browserName: sessionData.browserName,
      browserVersion: sessionData.browserVersion,
      osName: sessionData.osName,
      screenRes: sessionData.screenRes,
    });
    const updatedSession = await sessionModel.updateOne(
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
      try {
        const newSessionUid = await SessionToUid.create({
          uid: session.uid,
          sessionToken: updatedSessionId,
        });
        if (!newSessionUid)
          console.log(
            "addNewSession => error creating new sessionToUid : ",
            error
          );
        else
          console.log(
            "addNewSession => new sessionToUid created : ",
            newSessionUid
          );
      } catch (error) {
        console.log(
          "addNewSession => error creating new sessionToUid : ",
          error
        );
      }
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
    const session = await sessionModel.findOne({
      "sessions._id": userSessionToken,
    });
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
      return null;
    }
    const newExpiration = new Date(
      new Date().getTime() + 259200000
    ).toUTCString();
    session.sessions[sessionIndex].expiration = newExpiration;
    console.log(
      "Session.js => updateSession => newExpirationDate : ",
      newExpiration
    );
    const updatedSession = await sessionModel.updateOne(
      { "sessions._id": userSessionToken },
      { $set: { ...session } }
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
    const session = await sessionModel.findOne({
      "sessions._id": sessionToken,
    });
    return session;
  } catch (error) {
    console.log("retrieveSession => error retrieving session : ", error);
    return null;
  }
};

const retrieveAllSessions = async (email) => {
  // retrieve all sessions from database
  try {
    // console.log("retrieveAllSessions => email : ", email);
    const session = await sessionModel.findOne({ email });
    let userSessions = [];
    const activeSessions = session.sessions;
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
    const session = await sessionModel.findOne({
      "sessions._id": sessionToken,
    });
    if (!session) return 404;
    if (session.sessions.length == 1) {
      const deletedSession = await sessionModel.deleteOne({
        "sessions._id": sessionToken,
      });
      return deletedSession.deletedCount > 0 ? true : false;
    }

    const updatedSession = await sessionModel.updateOne(
      { "sessions._id": sessionToken },
      { $pull: { sessions: { _id: sessionToken } } }
    );
    return updatedSession.modifiedCount > 0 ? true : false;
  } catch (error) {
    console.log("deleteSession => error deleting session : ", error);
    return 500;
  }
};

module.exports = {
  initiateSession,
  retrieveSession,
  retrieveAllSessions,
  deleteSession,
  updateSession,
  addNewSession,
};
