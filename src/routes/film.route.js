const express = require("express");
const router = express.Router();
const {
  createFilm,
  getFilms,
  getFilmById,
  getFilmByTitle,
  getFilmByFilters,
  updateFilm,
  deleteFilm,
} = require("../controllers/film.controller.js");

router.post("/create", createFilm);
router.get("/", getFilms);
router.get("/id/:id", getFilmById);
router.get("/title/:title", getFilmByTitle);
router.get("/filter", getFilmByFilters);
router.put("/update/:id", updateFilm);
router.delete("/delete/:id", deleteFilm);

module.exports = router;
