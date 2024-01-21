const { UserModel } = require("../models/UserModel");

const verifySignUpCreds = (req, res, next) => {
  const errors = UserModel.validate(req.body);
  errors 
  ?
  res.status(400).json({ message: "Signup Error", errors : errors })
  :
  next(); 
};

module.exports =  verifySignUpCreds ;