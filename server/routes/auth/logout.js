const router = require("express").Router();
const { verifyAuthCreds } = require("../../middlewares");
const { logOutUser } = require("../../controllers");

const logoutRouter = router.post(
  "/",
  verifyAuthCreds.verifyLogoutCreds,
  (req, res) => logOutUser(req.body, res)
);

module.exports = logoutRouter;
