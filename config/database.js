const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  const MONGODB_URL = process.env.MONGO_URI;
  const ATLAS_URL = process.env.ATLAS_URL;
  try {
    // console.log("Mongo URI:", ATLAS_URL);
    await mongoose.connect(ATLAS_URL);
    console.log("MongoDB connected successfully ");
  } catch (error) {
    console.error("connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

