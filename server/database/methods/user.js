const User = require("../models/User");
const getUserFromEmail = async (email) => {
  email = email.toLowerCase();
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

const getUserFromId = async (id) => {
  try {
    const user = await User.findById({ _id: id }).exec();
    if (!user) return false;
    return user;
  }
  catch (err) {
    console.log(err);
    return false;
  }
}

const createUser = async (user) => {
  user.email = user.email.toLowerCase();
  console.log("user.js => createUser => user.password: ", user.password);
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
  getUserFromId
};
