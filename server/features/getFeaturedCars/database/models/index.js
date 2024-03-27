const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const carSchema = new Schema({
    name: String,
    photo : String,
    price: String,
    ownerName : String,
    milage: String,
    carCondition: String,
    carType: String,
    isAvailable: Boolean
});

module.exports = mongoose.model('AllCars', carSchema);