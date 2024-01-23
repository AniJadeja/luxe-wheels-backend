require("dotenv").config();
// Routers
const { pingRouter, authRouter } = require('./server/routes/index.js');
const {pingEndPoint, signUpEndPoint, loginEndPoint} = require('./server/config/endpoints.js');


const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");
const dbConn = require("./server/database/dbConnection.js");
const cookieParser = require('cookie-parser');

dbConn();

const app = express();
const PORT = process.env.PORT; 

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(pingEndPoint, pingRouter);
app.use(signUpEndPoint, authRouter.signupRouter);
app.use(loginEndPoint, authRouter.loginRouter);
app.use((req, res, next) => {
  console.log(`Request received for endpoint: ${req.originalUrl}`);
  next();
});



mongoose.connection.once('connected', () => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  });
  