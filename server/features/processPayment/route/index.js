const router = require("express").Router();
const { confirmPaymentAndGenerateReceipt } = require("../controllers");
//const { verifyUserInput } = require("../middlewares");

const paymentRouter = router.post("/", (req, res) =>
  confirmPaymentAndGenerateReceipt(req, res)
);

module.exports = { paymentRouter };
