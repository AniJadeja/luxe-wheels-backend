const { signUpUser } = require('./signUpController.js');
const { loginUser } = require('./loginController.js');
const { logOutUser } = require('./logoutController.js')

module.exports = {
  signUpUser,
  loginUser,
  logOutUser
}