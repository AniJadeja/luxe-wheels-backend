const { getUserEmail, initiateSession } = require('../database');



const verifySession = async (uid) => {
  // verifies if session exists
}

const verifyUserEmail = async (email) => {
  // get user from email

  const user = await getUserEmail(email);

  return user ? true : false;
}


const signInUser = async (user) => {
  // get user from email
  const dbUser = await verifyUserEmail(user.email);
  // if user is present
  // check if password matches
  if (!dbUser) return false;
  return true;
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
}

module.exports = {
  verifySession,
  verifyUserEmail,
  signInUser,
};