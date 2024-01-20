const express = require('express');
const router = express.Router();
const {UserModel} = require('../../models/UserModel.js');

const signupRouter = router.post('/', (req, res) => {
  const user = new UserModel(req.body);
  console.log("signup.js => user: ", user);
  res.status(200).json({ message: 'signup endpoint reached.' });
 });

module.exports = signupRouter;
