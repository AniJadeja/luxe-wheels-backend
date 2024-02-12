const { getUserFromEmail, createUser } = require("../../database");
const bcrypt = require("bcrypt");

const signUpUser = async (user, res) => {
  // check if isUserEmailPresent(email)

  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  
  await getUserFromEmail(user.email)
    ? // if true, return { error: 'Email already exists' }
      res.status(401).send({ error: "Email already exists" })
    : // else, if registerUser(user)
    await createUser(user)
    ? // returns true, return { success: 'User created' }
      res.status(200).send({ success: "User created" })
    : // if createUser(user) returns false, return { error: 'User not created' }
      res.status(401).send({ error: "User not created" });
};

module.exports = {
  signUpUser,
};
