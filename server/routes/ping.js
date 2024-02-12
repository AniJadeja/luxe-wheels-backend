const express = require("express");
const router = express.Router();
const { ping } = require("../controllers");

const pingRouter = router.get("/", (req, res) => {
  console.log("ping.js => pingRouter => pinging...");
  ping(req, res);
});

module.exports = pingRouter;
