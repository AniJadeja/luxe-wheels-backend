const { getUserProfile } = require("../database");

const getUserData = async (req, res) => {
  console.log("getUserProfileController => getting user data for sessionToken: ", req.body.sessionToken);
  const user = await getUserProfile(req, res);
  user
    ? console.log("getUserProfileController => userData returned")
    : console.log("getUserProfileController => userData not returned");
  return user == 404 ? res.status(404).send({ message: "user not found" }) :
  res.status(200).send({ message: "user fetched successfully", user: user});
};

module.exports = {
  getUserData,
};
