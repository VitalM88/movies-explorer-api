const router = require('express').Router();
const { updateUserValidation } = require('../middlewares/reqValidation');

const {
  getMe,
  updateUserInfo,
} = require('../controllers/users');

router.get('/me', getMe);
router.patch('/me', updateUserValidation, updateUserInfo);

module.exports = router;
