// imports
const express = require("express"); //importing express package
const app = express(); // creates a express application
const dotenv = require("dotenv").config(); //this allows me to use my .env values in this file
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const connect = require("./db.js");

// Middleware
app.use(express.static("public")); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride("_method"));
app.use(morgan("dev"));

connect();

app.listen(3001, () => {
  console.log("Listening on port " + 3000);
});
