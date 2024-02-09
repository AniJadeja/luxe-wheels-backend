const { UserModel } = require("../models/userModel");
const  LoginUserModel  = require("../models/loginUserModel");
const { LoginDataModel } = require("../models/loginData");

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
  next();
}

module.exports = { verifySignUpCreds, verifyLoginCreds, verifyLogoutCreds } ;
