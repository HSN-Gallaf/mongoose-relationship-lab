// imports
const express = require("express"); //importing express package
const app = express(); // creates a express application
const dotenv = require("dotenv").config(); //this allows me to use my .env values in this file
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const connect = require("./db.js");
const User = require("./models/User.js");
const Category = require("./models/Category.js");
const Listing = require("./models/Listing.js");
// Middleware
app.use(express.static("public")); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride("_method"));
app.use(morgan("dev"));

connect();

const testRelationships = async () => {
  // await User.create({
  //   username: "hasan",
  //   password: 123456,
  // });
  // await Category.create({
  //   categoryName: "First Category",
  // });
  // await Listing.create({
  //   streetAddress: "first",
  //   city: "manama",
  //   price: 100,
  //   size: 200,
  //   owner: "6ae73dfea7811e37c131cd05",
  //   category: "6ae73e0c56c5be2d0d810ab3",
  // });

  const allListing = await Listing.find().populate("owner");

  console.log(allListing);
};

testRelationships();

app.listen(3001, () => {
  console.log("Listening on port " + 3000);
});
