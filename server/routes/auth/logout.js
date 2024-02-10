const express = require("express");
const router = express.Router();
const { verifyAuthCreds } = require("../../middlewares/index.js");
const { logOutUser } = require("../../controllers");

const logoutRouter = router.post(
  "/",
  verifyAuthCreds.verifyLogoutCreds,
  (req, res) => logOutUser(req.body, res)
);

module.exports = logoutRouter;
