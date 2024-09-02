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
app.use(express.json());

//post
app.post("/", async (req, res) => {
  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });
  await film.save();
  return res.send("successfully created");
});
//get
app.get("/", async (req, res) => {
  const films = await Film.find();
  return res.send(films);
});
//put
app.put("/:id", async (req, res) => {
  const film = await Film.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url,
    },
    {
      new: true,
    }
  );
  return res.send("successfully updated");
});
//delete
app.delete("/:id", async (req, res) => {
  const film = await Film.findByIdAndDelete(req.params.id);
  return res.send("successfully deleted");
});

//Create endpoint getById
app.get("/:id", async (req, res) => {
  const film = await Film.findById(req.params.id);
  return res.send(film);

});

//Create endpoint getByName
app.get("/:title", async (req, res) => {
  const film = await Film.findById(req.params.id);
  return res.send(film);
});

//app

app.listen(port, async () => {
  await mongoose
    .connect("mongodb://localhost:27017")
    .then(() => console.log("connected"))
    .catch(() => console.error("failed"));
  console.log(`Listening to port ${port}`);
});
