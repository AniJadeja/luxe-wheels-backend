const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const receiptModel = new Schema({
    carPrice: String,
    carId: String,
    userId: String,
    paymentId: String,
    paymentDate: String,
    startDate: String,
    endDate: String,
    timePeriod: String,
    status: String,
    tax: String,
    toatlAmount: String,
});

module.exports = mongoose.model('Receipt', receiptModel);