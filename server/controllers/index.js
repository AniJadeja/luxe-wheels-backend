const { 
  loginUser,
  signUpUser,
  logOutUser
} = require('./auth');


const {
  verifySession,
  verifyUserEmail,
  signInUser,
  getSessionOfCurrentBrowser,
  getUserUid,
} = require('./databaseController');

const { ping } = require('./pingController');

module.exports = {
  signUpUser,
  loginUser,
  logOutUser,
  verifySession,
  verifyUserEmail,
  signInUser,
  getSessionOfCurrentBrowser,
  getUserUid,
  ping
}