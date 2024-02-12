const { getUserFromId } = require("../../../../database");

const getUserProfile = async (req, res) => {
  const { userId } = req.body;
  const user = await getUserFromId(userId);
  return user ? user : 404;
};

module.exports = {
  getUserProfile,
};
