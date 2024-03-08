const router = require("express").Router();
const { getUserData } = require("../controllers");
const { verifyCarsInput } = require("../middlewares");

const featuredCarsRouter = router.get('/', verifyCarsInput ,(req, res) => {
  const queryParam = req.query.q;
  res.send(`Received query parameter: ${queryParam}`);  
});

module.exports = router;


module.exports = { featuredCarsRouter };
