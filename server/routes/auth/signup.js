const express = require('express');
const router = express.Router();

const signupRouter = router.post('/', (req, res) => {
   res.status(200).json({ message: 'signup endpoint reached.' });
 });

module.exports = signupRouter;