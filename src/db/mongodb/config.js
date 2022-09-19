const mongoose = require("mongoose");
require("dotenv").config();
let MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (err) {
    console.log(err);
    // exit process with failure
    process.exit(1);
  }
};
module.exports = { connectDB };
