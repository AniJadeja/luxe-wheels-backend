const router = require("express").Router();
const { upload, getAllCars, getQueriedCars, getCarById } = require("../controllers");
const { verifyCarsInput } = require("../middlewares");

// Route for '/cars?q={query}'
const featuredCarsRouter = router.get('/', verifyCarsInput ,(req, res) => {
  const queryParam = req.query.q;
  if (!queryParam) {
   //upload(req, res);
  getAllCars(req, res);
  }
  else {
    getQueriedCars(queryParam, res); 
    }
});



// Route for '/cars/:id'
featuredCarsRouter.get('/:id',  (req, res) => {
  console.log("req.params.id", req.params.id);
  const carId = req.params.id;
  getCarById(carId, res);
});


module.exports = { featuredCarsRouter };
  