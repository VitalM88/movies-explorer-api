const router = require('express').Router();
const { createMovieValidation } = require('../middlewares/reqValidation');
const { deleteMovieValidation } = require('../middlewares/reqValidation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', createMovieValidation, createMovie);
router.delete('/:movieId', deleteMovieValidation, deleteMovie);

module.exports = router;
