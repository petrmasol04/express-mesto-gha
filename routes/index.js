const router = require('express').Router();
const {
  createUsers, login,
} = require('../controllers/users');
const { auth } = require('../middlewares/auth');
const NotFoundError = require('../utils/error/not-found');

const routerUsers = require('./users');
const routerCards = require('./cards');

router.post('/signin', login);
router.post('/signup', createUsers);
router.use('/users', auth, routerUsers);
router.use('/cards', auth, routerCards);
router.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
