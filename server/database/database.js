const User = require("./models/User");
const Session = require("./models/Session");

const isUserEmailPresent = async (email) => {
  // get user from email
  const duplicate = await User.findOne({ email: email }).exec();
  if (!duplicate) return false; //Conflict

  // if user is present return true
  // else return false

  return true;
};

const registerUser = async (user) => {
  // insert user into database

  const newUser = await User.create(user);
  if (!newUser) return false; //Bad Request
  // return true if user is inserted
  // else return false
  return true;
};

const signInUser = async (user) => {
  // get user from email

  const dbUser = await User.findOne({ email: user.email }).exec();
  // if user is present
  // check if password matches
  if (!dbUser) return false;
  if (dbUser.password === user.password) {
    
    // Convert the timestamp to a Date object
    const expirationDate = new Date(
      new Date().getTime() 
      + 259200000)
      .toUTCString();
    const isSessionCreated = await initiateSession(dbUser._id, expirationDate);
    if (!isSessionCreated) return false;
    // Now expirationDate is a Date object representing the expiration time

    return {
      cookie: {
        uid: dbUser._id,
        expiration: expirationDate,
      },
    };
  }
  // if password matches,
  // create a session for the user
  //return true
  // else return false
  return false;
};

const initiateSession = async (uid, expiration) => {
  // insert session into database
  console.log("expiration", expiration);
  let session = await Session.findOne({ uid: uid }).exec();
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

const verifySession = (uid) => {
  // check if session is present in database
};

const removeSession = (uid) => {
  // delete session from database
};

module.exports = {
  isUserEmailPresent,
  registerUser,
  signInUser,
};
