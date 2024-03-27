const { getUserFromId } = require("../../../../database");
const Payment = require("../models");
const { findSessionId } = require("../../../../database/methods/sessionToUid");


const processPayment = async (data) => {
  try {
    const payment = await Payment.create(data);
    if (!payment) throw new Error("Error processing payment");
    return payment;
  } catch (error) {
    console.error("Error processing payment:", error);
    return 500;
  }
};

module.exports = {
  processPayment,
};
