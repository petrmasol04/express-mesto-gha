const router = require('express').Router();
const { NOT_FOUND_404 } = require('../utils/constants');

const routerUsers = require('./users');
const routerCards = require('./cards');

router.use('/users', routerUsers);
router.use('/cards', routerCards);
router.use('*', (req, res) => {
  res.status(NOT_FOUND_404).send({ message: 'Страница не найдена' });
});

module.exports = router;
