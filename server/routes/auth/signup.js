const router = require("express").Router();
const { signUpUser } = require("../../controllers");
const { verifyAuthCreds } = require("../../middlewares");

const signupRouter = router.post(
  "/",
  verifyAuthCreds.verifySignUpCreds,
  (req, res) => signUpUser(req.body, res)
);

module.exports = signupRouter;
