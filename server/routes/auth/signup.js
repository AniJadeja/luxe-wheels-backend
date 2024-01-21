const express = require('express');
const router = express.Router();


const {verifySignUpCreds} = require('../../middlewares/index.js');

const signupRouter = router.post('/',verifySignUpCreds , (req, res) => {

  res.status(200).json({ message: 'signup endpoint reached.' , errors : {}});
 });

module.exports = signupRouter;

