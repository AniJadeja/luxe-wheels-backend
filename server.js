require("dotenv").config();
// Routers
const { pingRouter, signupRouter } = require('./server/routes/index.js');
const {pingEndPoint, signUpEndPoint} = require('./server/config/endpoints.js');

const express = require("express");
const cors = require("cors"); 

const app = express();
const port = process.env.PORT; 

app.use(express.json());

app.use(cors());

app.use(pingEndPoint, pingRouter);
app.use(signUpEndPoint, signupRouter);
app.use((req, res, next) => {
  console.log(`Request received for endpoint: ${req.originalUrl}`);
  next();
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});