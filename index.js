/* variables
    express
    app
    port
    mongoose
    film model
*/
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Film = mongoose.model("Film", {
  title: String,
  description: String,
  image_url: String,
  traile_url: String,
});

//app
app.use(express.json());
