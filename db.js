const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

async function connect() {
  //connection to the database
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error Occured", error);
  }
}

module.exports = connect;
