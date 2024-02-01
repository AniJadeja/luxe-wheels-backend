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
  console.log(
    "initiateSession => new session created : ",
    newSession.sessions[0]._id
  );
  return newSession.sessions[0]._id;
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





module.exports = {
  initiateSession,
  retrieveSession
};
