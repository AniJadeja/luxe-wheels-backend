const { isUserEmailPresent, registerUser } = require("../../database/database");


const signUpUser = async (user, res) => {
  // check if isUserEmailPresent(email)
  await isUserEmailPresent(user.email)
    ? // if true, return { error: 'Email already exists' }
      res.status(401).send({ error: "Email already exists" })
    : // else, if registerUser(user)
    await registerUser(user)
    ? // returns true, return { success: 'User created' }
      res.status(200).send({ success: "User created" })
    : // if registerUser(user) returns false, return { error: 'User not created' }
      res.status(401).send({ error: "User not created" });
};

module.exports = {
  signUpUser,
};
