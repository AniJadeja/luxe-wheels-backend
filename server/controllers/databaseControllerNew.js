const { getUserEmail, initiateSession } = require('../database');
const { generateToken } = require('../utils/Token');


const verifySession = async (uid) => {
  // verifies if session exists
}

const verifyUserEmail = async (email) => {
  // get user from email

  const user = await getUserEmail(email);
  return user ? user : false;
}


const signInUser = async (user, systemData) => {
  // get user from email
  const dbUser = await verifyUserEmail(user.email);
  // if user is present
  // check if password matches
  if (!dbUser) return false;

  if (dbUser.password === user.password) {
    
    const userData = {
      uid: dbUser._id,
      email: dbUser.email,
    };
    // Convert the timestamp to a Date object
    const expirationDate = new Date(
      new Date().getTime() 
      + 259200000)
      .toUTCString();
    const sessionToken = await initiateSession(userData, systemData, expirationDate);
    console.log("signInUser => session created : ", sessionToken);
    if (!sessionToken) return false;
    
    // Now expirationDate is a Date object representing the expiration time
    return {
      cookie: {
        uid: dbUser._id,
        expiration: expirationDate,
      },
      sessionToken: sessionToken,
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