const router = require("express").Router();


const bookingsRouter = router.get("/", // call the function that will get the user bookings
(_,res) => {
    res.status(200).send("User bookings retrieved successfully");
}
);

module.exports = { bookingsRouter };
