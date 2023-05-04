const router = require('express').Router();
const { NOT_FOUND_404 } = require('../utils/constants');
const {
  createUsers, login,
} = require('../controllers/users');
const { auth } = require('../middlewares/auth');

const routerUsers = require('./users');
const routerCards = require('./cards');

console.log(auth);
router.post('/signin', login);
router.post('/signup', createUsers);
router.use('/users', auth, routerUsers);
router.use('/cards', auth, routerCards);
router.use('*', auth, (req, res) => {
  res.status(NOT_FOUND_404).send({ message: 'Страница не найдена' });
});

module.exports = router;
