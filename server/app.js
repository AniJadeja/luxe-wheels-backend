
// Routers
const { pingRouter, authRouter } = require("./routes");
const { getUserData  } = require("./features")
const {
  pingEndPoint,
  signUpEndPoint,
  loginEndPoint,
  logOutEndPoint,
  userEndPoint
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

module.exports = { app };

