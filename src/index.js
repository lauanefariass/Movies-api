const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const filmRoute = require("./routes/film.route.js");

app.use(express.json());
app.use("/api/films/", filmRoute);

app.listen(port, async () => {
  console.log(`Listening to port ${port}`);
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("db connected");
  } catch (error) {
    console.error("db connection failed");
  }
});
