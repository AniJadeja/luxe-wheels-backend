const router = require("express").Router();


const receiptRouter = router.post("/", // call the function that will generate the receipt
(_,res) => {
    res.status(200).send("Receipt generated successfully");
}
);

module.exports = { receiptRouter };
