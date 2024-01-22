const express = require('express');
const router = express.Router();
const {signUpUser} = require('../../controllers/index.js');
const {verifyAuthCreds} = require('../../middlewares/index.js');

const signupRouter = router.post('/',verifyAuthCreds.verifySignUpCreds , (req, res) => {

    signUpUser(req.body, res);
  //res.status(200).json({ message: 'signup endpoint reached.' , errors : {}});
 });

module.exports = signupRouter;
