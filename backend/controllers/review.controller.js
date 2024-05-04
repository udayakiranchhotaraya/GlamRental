const mongoose = require('mongoose');

const ReviewModel = require('../models/review.model');

async function addReview(req, res) {
    try {
        const { userId } = req.user;
        const { dressId } = req.params;
        const { rating, reviewText, mediaUrls } = req.body;

        const review = await ReviewModel.create({
            dress_id: dressId,
            rating: rating,
            review: reviewText,
            attachmentUrls: mediaUrls,
            user_id: userId
        });
        res.status(201).json({review});
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

async function dressReviews(req, res) {
    try {
        const { dressId } = req.params;
        const reviews = await ReviewModel.find({dress_id: dressId});
        if (reviews.length > 0) {
            res.status(200).json(reviews);
        } else {
            res.status(404).json({"message" : "No reviews found."});;
        }
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

module.exports = {
    addReview,
    dressReviews
}