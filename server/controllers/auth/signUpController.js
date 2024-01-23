const { isUserEmailPresent, registerUser } = require("../../database/database");


const signUpUser = async (user, res) => {
  // check if isUserEmailPresent(email)

  const isDuplicate = await isUserEmailPresent(user.email)
  const isUserCreated = await registerUser(user)

  isDuplicate
    ? // if true, return { error: 'Email already exists' }
      res.status(401).send({ error: "Email already exists" })
    : // else, if registerUser(user)
    isUserCreated
    ? // returns true, return { success: 'User created' }
      res.status(200).send({ success: "User created" })
    : // if registerUser(user) returns false, return { error: 'User not created' }
      res.status(401).send({ error: "User not created" });
};

module.exports = {
  signUpUser,
};
