const User = require('./models/User');


const isUserEmailPresent = async (email) => {
  // get user from email
  const duplicate = await User.findOne({ email: email }).exec();
  if (!duplicate) return false //Conflict 

  // if user is present return true
  // else return false
  return true;
};

const registerUser = async (user) => {
  // insert user into database

  const newUser = await User.create(user);
  if (!newUser) return false; //Bad Request
  // return true if user is inserted
  // else return false
  return true;
}

const signInUser = (user) => {
  // get user from email

  // if user is present
  // check if password matches

  // if password matches, 
  // create a session for the user
  
  //return true
  // else return false
  return false;
}


module.exports = {
  isUserEmailPresent,
  registerUser,
  signInUser
}
