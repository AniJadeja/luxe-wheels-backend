const router = require("express").Router();


const createBookingsRouter = router.post("/", // call the function that will create the user bookings
(_,res) => {
    res.status(200).send("User bookings created successfully");
}
);

module.exports = { createBookingsRouter };
