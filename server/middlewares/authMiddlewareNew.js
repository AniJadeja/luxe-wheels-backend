const { UserModel } = require("../models/userModel");
const  LoginUserModel  = require("../models/loginUserModel");
const { LoginDataModel } = require("../models/loginData");
const { LogOutUserModel } = require("../models/logOutUserModel")

const verifySignUpCreds = (req, res, next) => {
  const errors = UserModel.validate(req.body);
  errors 
  ?
  res.status(400).json({ message: "Signup Error", errors : errors })
  :
  next(); 
};

const verifyLoginCreds = (req, res, next) => {
  const errors = LoginUserModel.validate(req.body.user);
  const loginDataErrors = LoginDataModel.validate(req.body.data);
  errors || loginDataErrors
  ?
  res.status(400).json({ message: "Login Error", errors : errors, loginDataErrors : loginDataErrors})
  :
  next(); 
}

const verifyLogoutCreds = (req, res, next) =>
{

  const errors = LogOutUserModel.validate(req.body.sessionToken);
  console.log("authMiddlewareNew => verifyLogoutCreds => errors : ",errors)
  errors
  ?
  res.status(400).json({ message: "Logout Error", errors : "Session Token Invalid"})
  :
  next()

}

module.exports = { verifySignUpCreds, verifyLoginCreds, verifyLogoutCreds } ;
