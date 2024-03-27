const { processPayment } = require("../database/methods");
const { getCarById } = require("../../getFeaturedCars");
const { findSessionId } = require("../../../database");
const { generateToken } = require("../../../utils/Token");
const { calculateDateDifference } = require("../../../utils/caculateDiff");
const { getUserProfile } = require("../../getUserProfile");
const { generateReceipt } = require("../../generateReceipt");

const confirmPaymentAndGenerateReceipt = async (req, res) => {
  try {
    console.log(
      "confirmPaymentAndGenerateReceiptController => confirmPaymentAndGenerateReceipt"
    );
    const { startDate, endDate, sessionToken, carId } = req.body;

    const session = await findSessionId(sessionToken);
    const user = await getUserProfile(req, res);
    if (user == 404) {
      res.status(401).send({ message: "Unauthorized" });
      return;
    }
    // session.length == 0 ? res.status(401).send({ message: "Unauthorized" }) : null;
    // const name = session[0].firstName + session[0].lastName
    const car = await getCarById(carId);
    const carPrice = Number(car.price.split("$")[1]);
    const timePeriod = calculateDateDifference(startDate, endDate);
    const toatlAmount = timePeriod * carPrice;

    const paymentObj = {
      startDate: startDate,
      endDate: endDate,
      price: car.price,
      carName: car.name,
      userName: user.fname + " "+ user.lname,
      paymentId: generateToken(),
      paymentDate: new Date().toISOString(),
      timePeriod: `${timePeriod} days`,
      toatlAmount: `$${(toatlAmount * 1.13).toFixed(2)}`,
    };
    console.log(paymentObj);


    const receiptObj = {
      paymentId: paymentObj.paymentId,
      carName: paymentObj.carName,
      carPrice: paymentObj.price,
      userName: paymentObj.userName,
      userEmail: user.email,
      startDate: paymentObj.startDate,
      endDate: paymentObj.endDate,
      totalAmount: toatlAmount,
    }

    const receipt = generateReceipt(receiptObj);



    //  const payment = await processPayment(paymentObj);
    res
      .status(200)
      .send({
        message: "payment processed successfully",
        paymentReceipt: paymentObj,
        receipt: receipt,
      });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).send({ message: "Error processing payment" });
  }

  // price: String,
  // carId: String,
  // userId: String,
  // paymentId: String,
  // paymentDate: String
};

module.exports = {
  confirmPaymentAndGenerateReceipt,
};
