const Session = require("./models/Session");



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

const createSession = async (uid, expiration) => {
  try {
    const newSession = await Session.create({ uid: uid, expiration: expiration });
    return newSession ? newSession : false;
  }
  catch (err) {
    return false;
  }
};

const updateSession = async (uid, expiration) => {
  try {
    const session = await Session.updateOne({ uid: uid }, { expiration: expiration });
    return session ? session : false;
  }
  catch (err) {
    return false;
  }
};

const readSession = async (sessionToken) => {
  // read session based on the session token
}

const deleteSession = async (sessionToken) => {
  // delete session based on the session token
}


const verifySession = async (uid) => {
  const session = await Session.findOne({ uid: uid }).exec();
  return session ? session : false;
};

const removeSession = async (uid) => {
  const session = await Session.deleteOne({ uid: uid }).exec();
  return session.deletedCount == 1 ? true : false;
};