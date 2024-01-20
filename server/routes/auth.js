const express = require('express');
const router = express.Router();

const signupRouter = router.post('/signup', (req, res) => {
  console.log("auth.js => redirecting to authController.js");
   res.status(200).json({ message: 'signup endpoint reached.' });
 });

  module.exports = signupRouter;