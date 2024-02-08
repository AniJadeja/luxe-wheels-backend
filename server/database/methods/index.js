const { getUserFromEmail, createUser } = require("./user");
const { initiateSession, retrieveSession, retrieveAllSessions, updateSession, addNewSession} = require("./session");

module.exports = {
  getUserFromEmail,
  createUser,
  initiateSession,
  retrieveSession,
  retrieveAllSessions,
  updateSession,
  addNewSession
};
