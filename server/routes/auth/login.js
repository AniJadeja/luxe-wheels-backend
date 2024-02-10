const router = require("express").Router();
const { verifyAuthCreds } = require("../../middlewares");
const { loginUser } = require("../../controllers");

const loginRouter = router.post(
  "/",
  verifyAuthCreds.verifyLoginCreds,
  (req, res) => loginUser(req.body, res)
);

module.exports = loginRouter;
