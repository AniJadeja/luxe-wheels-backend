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

module.exports = {
  signUpUser,
  loginUser,
  logOutUser,
  verifySession,
  verifyUserEmail,
  signInUser,
  getSessionOfCurrentBrowser,
  getUserUid,
}