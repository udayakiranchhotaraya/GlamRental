const express = require('express');

const {
    addToCart,
    updateCartItems
} = require('../controllers/shoppingCart.controller');

const { jwtMiddleware } = require('../middleware/jwt-auth.middleware');

const CartRouter = express.Router();

CartRouter.post('/addToCart/:dressId', jwtMiddleware, addToCart);
CartRouter.put('/updateCartItems/:cartId', jwtMiddleware, updateCartItems);

module.exports = CartRouter;