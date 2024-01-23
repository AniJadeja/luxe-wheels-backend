require("dotenv").config();
// Routers
const { pingRouter, signupRouter } = require('./server/routes/index.js');
const {pingEndPoint, signUpEndPoint} = require('./server/config/endpoints.js');

const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");
const dbConn = require("./server/database/dbConnection.js");

dbConn();
const app = express();
const PORT = process.env.PORT; 

app.use(express.json());

app.use(cors());

app.use(pingEndPoint, pingRouter);
app.use(signUpEndPoint, signupRouter);
app.use((req, res, next) => {
  console.log(`Request received for endpoint: ${req.originalUrl}`);
  next();
});



mongoose.connection.once('connected', () => {
  console.log('MongoDB connection ready!');
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  });
  
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });