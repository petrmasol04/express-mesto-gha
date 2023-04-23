const routerCard = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

routerCard.get('/', getCards);
routerCard.post('/', createCard);
routerCard.put('/:id/likes', likeCard);
routerCard.delete('/:id', deleteCard);
routerCard.delete('/:id/likes', dislikeCard);

module.exports = routerCard;
