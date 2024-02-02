const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  uid: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  sessions: [
    {
      expiration: {
        type: Date,
        required: true,
        trim: true,
      },
      browserName: {
        type: String,
        required: true,
        trim: true,
      },
      browserVersion: {
        type: String,
        required: true,
        trim: true,
      },
      osName: {
        type: String,
        required: true,
        trim: true,
      },
      screenRes: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
});

module.exports = mongoose.model("NewSession", sessionSchema);
