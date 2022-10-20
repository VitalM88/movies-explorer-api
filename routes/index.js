const router = require('express').Router();
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const NotFound = require('../errors/NotFound');
const { signinValidation, signupValidation } = require('../middlewares/reqValidation');

router.post('/signin', signinValidation, login);

router.post('/signup', signupValidation, createUser);

router.use('/users', auth, require('./users'));
router.use('/movies', auth, require('./movies'));

router.use('*', (req, res, next) => {
  next(new NotFound('Страница не найдена'));
});

module.exports = router;
