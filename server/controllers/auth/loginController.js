const { isUserEmailPresent, signInUser } = require("../../database/database");

const loginuser = async (user, res) => {
  // check if isUserEmailPresent(email)
 
  await isUserEmailPresent(user.email)
    ? // if true, return { error: 'Email already exists' }
    await signInUser(user)
      ? // returns true, return cookie
        res.status(200).send({ success: "User Logged In" })
      : res.status(403).send({ error: "Could not be logged in" })
    : res.status(401).send({ error: "User does not exist" });
};

module.exports = {
  loginuser,
};
