const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_URL);
  console.log(`mongo connected: To foodie DB`);
};

module.exports = connectDB;
