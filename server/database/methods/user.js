const User = require("../models/User");

const getUserFromEmail = async (email) => {
  // get user from email
  const user = await User.findOne({ email: email }).exec();
  if (!user) return false;
  return user;
};

const createUser = async (user) => {
  // insert user into database

  const newUser = await User.create(user);
  if (!newUser) return false; //Bad Request
  // return true if user is inserted
  // else return false
  return true;
};


module.exports = {
  getUserFromEmail,
  createUser,
};