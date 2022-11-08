const Movie = require('../models/movie');
const BadRequest = require('../errors/BadRequest');
const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');

const {
  BAD_REQUEST_ID_MESSAGE,
  BAD_REQUEST_FILM_VALIDATION_MESSAGE,
  FORBIDDEN_FILM_MESSAGE,
  NOT_FOUND_FILM_MESSAGE,
} = require('../utils/errors');

module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country, director, duration, year,
    description, image, trailerLink,
    thumbnail, movieId, nameRU, nameEN,
  } = req.body;
  const owner = req.user._id;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest(BAD_REQUEST_FILM_VALIDATION_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie
    .findById(req.params.movieId)
    .orFail(new NotFound(NOT_FOUND_FILM_MESSAGE))
    .then((movie) => {
      if (movie.owner._id.toString() !== req.user._id.toString()) {
        return next(new Forbidden(FORBIDDEN_FILM_MESSAGE));
      }
      return movie.remove()
        .then(() => res.send(movie))
        .catch((err) => next(err));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest(BAD_REQUEST_ID_MESSAGE));
      } else {
        next(err);
      }
    });
};
