require("dotenv").config();

const PORT = process.env.PORT;
const { serverApp } = require("./server/index");


const mongoose = require("mongoose");


mongoose.connection.once("connected", () => {

  const req = {
    get: function(headerName) {
      // return the value of the specified header
      console.log("headerName :",headerName)
      return `local${headerName}:${PORT}`;
    },
    protocol: "http"
  };

  serverApp.listen(PORT, () => {

    // print the server url
    const hostname = req.get("host");
    const protocol = req.protocol;
    console.clear();
    console.log(`Server is running on ${protocol}://${hostname}`);
  });
});


