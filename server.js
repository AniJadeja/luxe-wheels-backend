require("dotenv").config();
// Routers
const { pingRouter } = require('./server/routes/index.js');
const express = require("express");
const cors = require("cors"); 

const app = express();
const port = process.env.PORT; 

const pingEndPoint = process.env.PING_END_POINT;

app.use(express.json());

app.use(cors());

app.use(pingEndPoint, pingRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});