const { getUserFromId } = require("../../../../database");
const { UserDataModel } = require("../../models")
const { findSessionId } = require("../../../../database/methods/sessionToUid");

const getUserProfile = async (req, res) => {
  const { sessionToken } = req.body;
  const session = await findSessionId(sessionToken);
  if (session.length == 0 ) return 404;
  const userId = session ? session[0].uid : null;
  const user = await getUserFromId(userId);
  return user ? new UserDataModel(user) : 404;
};

module.exports = {
  getUserProfile,
};
