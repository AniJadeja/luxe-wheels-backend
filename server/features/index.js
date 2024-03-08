const { userRouter:getUserData  } = require("./getUserProfile");
const { featuredCarsRouter:getFeaturedCarsRouter } = require("./getFeaturedCars");

module.exports = {
  getUserData,
  getFeaturedCarsRouter
};