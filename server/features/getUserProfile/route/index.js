const router = require("express").Router();
const { getUserData } = require("../controllers");
const { verifyUserInput } = require("../middlewares");

const userRouter = router.post("/user", verifyUserInput , (req, res) => {
    console.log("Reached /user endpoint");
    getUserData(req, res);
});

module.exports = { userRouter };