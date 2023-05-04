const router = require('express').Router();
const {
  getUsers, createUsers, getUserById, updateUser, updateAvatar, login,
} = require('../controllers/users');

router.post('/signin', login);
router.get('/', getUsers);
router.post('/signup', createUsers);
router.get('/:id', getUserById);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
