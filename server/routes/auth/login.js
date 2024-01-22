const express = require('express');
const router = express.Router();
const { verifyAuthCreds } = require('../../middlewares/index.js');


const loginRouter = router.post('/' , verifyAuthCreds.verifyLoginCreds, (req, res) => { 
  res.status(200).json({ message: 'login endpoint reached.' , errors : {}});
 });

module.exports = loginRouter;
