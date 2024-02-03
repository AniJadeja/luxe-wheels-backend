const { 
  loginUser,
  signUpUser 
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
  verifySession,
  verifyUserEmail,
  signInUser,
  getSessionOfCurrentBrowser,
  getUserUid,
}