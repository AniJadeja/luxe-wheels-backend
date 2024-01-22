const express = require('express');
const router = express.Router();
const { verifyAuthCreds } = require('../../middlewares/index.js');
const { loginuser } = require('../../controllers/auth/loginController.js');

const loginRouter = router.post('/' , verifyAuthCreds.verifyLoginCreds, (req, res) => {

    loginuser(req.body, res);
   
  //res.status(200).json({ message: 'login endpoint reached.' , errors : {}});
 });

module.exports = loginRouter;
