const pingRouter = require('./ping.js');
const signupRouter = require('./auth/index.js');
require('./auth/index.js');

module.exports = {
    pingRouter,
    signupRouter
};
