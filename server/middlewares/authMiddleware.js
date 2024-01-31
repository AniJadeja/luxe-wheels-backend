const { UserModel } = require("../models/userModel");
const  LoginUserModel  = require("../models/loginUserModel");

const verifySignUpCreds = (req, res, next) => {
  const errors = UserModel.validate(req.body);
  errors 
  ?
  res.status(400).json({ message: "Signup Error", errors : errors })
  :
  next(); 
};

const verifyLoginCreds = (req, res, next) => {
  const errors = LoginUserModel.validate(req.body);
  errors 
  ?
  res.status(400).json({ message: "Login Error", errors : errors })
  :
  next(); 
}

module.exports = { verifySignUpCreds, verifyLoginCreds} ;
