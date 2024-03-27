// Routers
const { pingRouter, authRouter } = require("./routes");
const {
  getUserData,
  getFeaturedCarsRouter,
  getUserBookings,
  generateReceiptRouter,
  createBookingsRouter,
  paymentRouter
} = require("./features");
const {
  pingEndPoint,
  signUpEndPoint,
  loginEndPoint,
  logOutEndPoint,
  userEndPoint,
  carsEP,
  userBookingsEndPoint,
  userReceiptsEndPoint,
  createBookingEndPoint,
  paymentsEndPoint,
} = require("./config/endpoints.js");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const dbConn = require("./database/dbConnection.js");

dbConn();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Middleware
app.use((req, res, next) => {
  console.log(`Request received for endpoint: ${req.originalUrl}`);
  next();
});
app.use(pingEndPoint, pingRouter);
app.use(signUpEndPoint, authRouter.signupRouter);
app.use(loginEndPoint, authRouter.loginRouter);
app.use(logOutEndPoint, authRouter.logOutRouter);
app.use(userEndPoint, getUserData);
app.use(carsEP, getFeaturedCarsRouter);
app.use(userBookingsEndPoint, getUserBookings);
app.use(createBookingEndPoint, createBookingsRouter);
app.use(userReceiptsEndPoint, generateReceiptRouter);
app.use(paymentsEndPoint, paymentRouter);

module.exports = { app };
