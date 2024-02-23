const { getUserFromId } = require("../../../../database");
const { UserDataModel } = require("../../models")

const getUserProfile = async (req, res) => {
  const { userId } = req.body;
  const user = await getUserFromId(userId);
  return user ? new UserDataModel(user) : 404;
};

module.exports = {
  getUserProfile,
};
