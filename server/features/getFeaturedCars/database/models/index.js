const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const imageSchema = new Schema({
    name: String,
    data : Buffer,
    contentType: String
});

module.exports = mongoose.model('FeaturedCarsImages', imageSchema);