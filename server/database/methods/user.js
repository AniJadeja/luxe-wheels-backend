const User = require("../models/User");
const getUserFromEmail = async (email) => {
  // get user from email
  try {
    const user = await User.findOne({ email: email }).exec();
    if (!user) return false;
    return user;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const createUser = async (user) => {
  const errors = {}
  try {
    const newUser = await User.create(user);
    if (!newUser) return false; //Bad Request
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  getUserFromEmail,
  createUser,
};
