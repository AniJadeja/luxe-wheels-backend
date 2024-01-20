require("dotenv").config();

const express = require("express");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = process.env.PORT; // Use the specified port or default to 3000

app.use(express.json());

// Use cors middleware to enable CORS for all routes
app.use(cors());


const pingRoute = require("./server/routes/ping.js");
app.use("/ping", pingRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});