const express = require('express');
const router = express.Router();
const {ping} = require('../controllers/pingController.js');

router.get('/',(req, res) => {
    // redirect auth.js to authController.js
    ping(req, res);
   });

   module.exports = router;