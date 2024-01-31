const { readUser } = require('../database/methods/user');

const verifyUser = async (email) => {
  const user = await readUser(email);
  return user ? true : false;
}

module.exports = {
  verifyUser,
};