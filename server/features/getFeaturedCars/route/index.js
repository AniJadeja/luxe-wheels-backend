const router = require("express").Router();
const { upload, getAllCars } = require("../controllers");
const { verifyCarsInput } = require("../middlewares");

const featuredCarsRouter = router.get('/', verifyCarsInput ,(req, res) => {
  const queryParam = req.query.q;
  if (!queryParam) {
   upload(req, res);
  // getAllCars(req, res);
  }
  else {
    //getQueriedCars(queryParam, res);
    }
});

module.exports = router;


module.exports = { featuredCarsRouter };
  