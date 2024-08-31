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
  trailer_url: String,
});

//app
app.use(express.json());
app.listen(port, () => {
  mongoose.connect("mongodb://localhost:27017/test");
  console.log(`Listening to port ${port}`);
});
