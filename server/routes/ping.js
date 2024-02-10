const express = require("express");
const router = express.Router();
const { ping } = require("../controllers/pingController.js");

const pingRouter = router.get("/", (req, res) => ping(req, res));

module.exports = pingRouter;
