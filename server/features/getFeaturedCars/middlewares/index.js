const { cars } = require("../../../config/cars");

const verifyCarsInput = (req, res, next) => {
  const carCategory = req.query.q;
  carCategory
    ? cars.includes(carCategory)
      ? next()
      : res.status(400).send("Invalid car category")
    : next();
};

module.exports = {
  verifyCarsInput,
};
