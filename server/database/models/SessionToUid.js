const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionToUidSchema = new Schema({
    sessionToken: {
        type: String,
        required: true,
        trim: true,
      },
      uid: {
        type: String,
        required: true,
        trim: true,
      },
});

module.exports = mongoose.model("SessionToUid", sessionToUidSchema);
