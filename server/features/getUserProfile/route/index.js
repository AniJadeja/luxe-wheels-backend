const router = require("express").Router();
const { getUserData } = require("../controllers");
const { verifyUserInput } = require("../middlewares");

const userRouter = router.get("/", verifyUserInput, (req, res) =>
  getUserData(req, res)
);

module.exports = { userRouter };
