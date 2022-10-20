const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getMe,
  updateUserInfo,
} = require('../controllers/users');

router.get('/me', getMe);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email({ tlds: { allow: false } }),
  }),
}), updateUserInfo);

module.exports = router;
