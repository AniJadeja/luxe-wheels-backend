const { getUserEmail, initiateSession } = require('../database');
const { generateToken } = require('../utils/Token');


const verifySession = async (uid) => {
  // verifies if session exists
}

const verifyUserEmail = async (email) => {
  // get user from email

  const user = await getUserEmail(email);
  console.log("verifyUserEmail => user : ", user);
  return user ? user : false;
}


const signInUser = async (user, systemData) => {
  // get user from email
  console.log("signInUser => user : ", user);
  const dbUser = await verifyUserEmail(user.email);
  // if user is present
  // check if password matches
  if (!dbUser) return false;

  if (dbUser.password === user.password) {
    
    const sessionData = {
      sessionToken: generateToken(),
      ...systemData
    };
    const userData = {
      uid: dbUser._id,
      email: dbUser.email,
    };
    // Convert the timestamp to a Date object
    const expirationDate = new Date(
      new Date().getTime() 
      + 259200000)
      .toUTCString();
    const isSessionCreated = await initiateSession(userData, sessionData, expirationDate);
    if (!isSessionCreated) return false;
    // Now expirationDate is a Date object representing the expiration time
    return true;
    return {
      cookie: {
        uid: dbUser._id,
        expiration: expirationDate,
      },
    };
  }
  else
  {
    console.log("signInUser => password does not match");
    console.log("signInUser => user.password : ", user.password + "\ndbUser.password : ", dbUser.password);
    return false;
  }
}

module.exports = {
  verifySession,
  verifyUserEmail,
  signInUser,
};