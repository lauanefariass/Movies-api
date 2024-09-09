const Film = require("../models/film.model.js");

const createFilm = async (req, res) => {
  try {
    const film = new Film({
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url,
    });
    await film.save();
    return res.send("successfully created");
  } catch (error) {
    return res.status(400).send("Creation failed");
  }
};

const getFilms = async (req, res) => {
  const films = await Film.find();
  return res.send(films);
};

const getFilmById = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    return res.send(film);
  } catch (erro) {
    return res.status(404).send("id not found");
  }
};

const getFilmByTitle = async (req, res) => {
  try {
    const film = await Film.find({ title: req.params.title });
    if (film.length !== 0) {
      return res.status(200).send(film);
    } else {
      return res.status(404).send("title not found");
    }
  } catch (error) {
    return res.status(500).send("internal server error");
  }
};

const getFilmByFilters = async (req, res) => {
  try {
    const { id, title, description, image_url, trailer_url } = req.query;
    const conditions = [];
    if (id) conditions.push({ _id: id });
    if (title) conditions.push({ title: { $regex: new RegExp(title, "i") } });
    if (description)
      conditions.push({
        description: { $regex: new RegExp(description, "i") },
      });
    if (image_url)
      conditions.push({ image_url: { $regex: new RegExp(image_url, "i") } });
    if (trailer_url)
      conditions.push({
        trailer_url: { $regex: new RegExp(trailer_url, "i") },
      });
    const query = conditions.length > 0 ? { $or: conditions } : {};
    const film = await Film.find(query);

    if (film.length == 0) {
      return res.status(404).send("Movie not found. Try another filter");
    }

    return res.status(200).send(film);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

const updateFilm = async (req, res) => {
  try {
    const film = await Film.findByIdAndUpdate(
      req.params.id,
      {
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
      },
      {
        new: true,
      }
    );
    return res.send("successfully updated");
  } catch (error) {
    return res.status(404).send("id not found");
  }
};

const deleteFilm = async (req, res) => {
  try {
    const film = await Film.findByIdAndDelete(req.params.id);
    return res.send("successfully deleted");
  } catch (erro) {
    return res.status(404).send("id not found");
  }
};
module.exports = {
  createFilm,
  getFilms,
  getFilmById,
  getFilmByTitle,
  getFilmByFilters,
  updateFilm,
  deleteFilm,
};
