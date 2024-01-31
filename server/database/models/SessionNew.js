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
      sessionToken: {
        type: String,
        required: true,
        trim: true,
      },
      expiration: {
        type: Date,
        required: true,
        trim: true,
      },
    },
  ],
  expiration: {
    type: Date,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Session", sessionSchema);
