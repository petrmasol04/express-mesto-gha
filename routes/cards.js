const routerCard = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const { validateCardData, validateIdCardData } = require('../middlewares/validation/cardcelebrate');

routerCard.get('/', getCards);
routerCard.post('/', validateCardData, createCard);
routerCard.put('/:id/likes', validateIdCardData, likeCard);
routerCard.delete('/:id', deleteCard);
routerCard.delete('/:id/likes', dislikeCard);

module.exports = routerCard;
