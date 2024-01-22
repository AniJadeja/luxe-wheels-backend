const express = require('express');
const router = express.Router();


const loginRouter = router.post('/' , (req, res) => {

   
  res.status(200).json({ message: 'login endpoint reached.' , errors : {}});
 });

module.exports = loginRouter;
