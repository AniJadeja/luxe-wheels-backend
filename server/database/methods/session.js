const Session = require("../models/Session");

const initiateSession = async (uid, expiration) => {
  // insert session into database
  let session = await verifySession(uid);
  if (session)
  {
    session = await Session.updateOne({ uid: uid }, { expiration: expiration });
    if (!session) return false;
    return true;} 
  const newSession = await Session.create({ uid: uid, expiration: expiration });
  if (!newSession) return false; //Bad Request
  // return true if session is inserted
  // else return false
  return true;
};


const retrieveSession = async (uid) => {
  // retrieve session from database
}

module.exports = {
  initiateSession,
  retrieveSession,
};