const User = require("./models/User");
const Session = require("./models/Session");
const { get } = require("http");

const getUserEmail = async (email) => {
  // get user from email
  const duplicate = await User.findOne({ email: email }).exec();
  if (!duplicate) return false; //Conflict

  // if user is present return true
  // else return false

  return true;
};

const createUser = async (user) => {
  // insert user into database

  const newUser = await User.create(user);
  if (!newUser) return false; //Bad Request
  // return true if user is inserted
  // else return false
  return true;
};

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

const verifySession = async (uid) => {
  const session = await Session.findOne({ uid: uid }).exec();
  return session ? session : false;
};

const removeSession = async (uid) => {
  const session = await Session.deleteOne({ uid: uid }).exec();
  return session.deletedCount == 1 ? true : false;
};

module.exports = {
  isUserEmailPresent,
  registerUser,
  signInUser,
};
