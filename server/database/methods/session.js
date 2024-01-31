const NewSession = require("../models/SessionNew");

const initiateSession = async (userData, sessionData, expiration) => {
  // insert session into database
  // let session = await verifySession(uid);
  // if (session)
  // {
  //   session = await Session.updateOne({ uid: uid }, { expiration: expiration });
  //   if (!session) return false;
  //   return true;}
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
  }
  
  if (!newSession) return false; //Bad Request
  // return true if session is inserted
  // else return false
  console.log("initiateSession => new session created");
  return true;
};

const retrieveSession = async (uid) => {
  // retrieve session from database
};

module.exports = {
  initiateSession,
  retrieveSession,
};
