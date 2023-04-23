const router = require('express').Router();
const { getUsers, createUsers, getUserById } = require('../controllers/users');

router.get('/', getUsers);
router.post('/', createUsers);
router.get('/:id', getUserById);

module.exports = router;
