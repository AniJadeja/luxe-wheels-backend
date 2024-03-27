const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const paymentModel = new Schema({
    carPrice: String,
    carId: String,
    userId: String,
    paymentId: String,
    paymentDate: String,
    startDate: String,
    endDate: String,
    timePeriod: String,
    status: String,
    
});

module.exports = mongoose.model('Payment', paymentModel);