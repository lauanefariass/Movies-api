const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  trailer_url: {
    type: String,
    required: true,
  },
});
const Film = mongoose.model("Film", filmSchema);
module.exports = Film;
