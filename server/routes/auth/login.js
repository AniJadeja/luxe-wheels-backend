const express = require('express');
const router = express.Router();
const { verifyAuthCreds } = require('../../middlewares/index.js');
const { loginUser } = require('../../controllers/index.js');

const loginRouter = router.post('/' , verifyAuthCreds.verifyLoginCreds, (req, res) => {
    loginUser(req.body, res);
 });

module.exports = loginRouter;
