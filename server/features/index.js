const { userRouter:getUserData  } = require("./getUserProfile");
const { featuredCarsRouter:getFeaturedCarsRouter } = require("./getFeaturedCars");
const { bookingsRouter:getUserBookings } = require("./getUserBookings");
const { receiptRouter:generateReceiptRouter } = require("./generateReceipt");
const { createBookingsRouter } = require("./createUserBookings");
const { paymentRouter } = require("./processPayment");

module.exports = {
  getUserData,
  getFeaturedCarsRouter,
  getUserBookings,
  generateReceiptRouter,
  createBookingsRouter,
  paymentRouter,
};