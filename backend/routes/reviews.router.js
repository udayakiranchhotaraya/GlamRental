const express = require('express');

const {
    addReview,
    dressReviews
} = require('../controllers/review.controller');
const { jwtMiddleware } = require('../middleware/jwt-auth.middleware');

const ReviewRouter = express.Router();

ReviewRouter.post('/addReview/:dressId', jwtMiddleware, addReview);
ReviewRouter.get('/:dressId', dressReviews);

module.exports = ReviewRouter;