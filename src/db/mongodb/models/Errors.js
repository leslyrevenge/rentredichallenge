const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TheSchema = new Schema({
  error_type: {
    type: String,
    default: "server",
  },
  message: String,
  status: String,
  priority: {
    type: String,
  },
  raw: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Error", TheSchema);
