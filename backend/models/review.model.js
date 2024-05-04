const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    dress_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dress', 
        required: true
    },
    rating : {
        type: Number
    },
    review : {
        type: String,
        required: true
    },
    attachmentUrls : [{
        type: String
    }],
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const ReviewModel = mongoose.model('Review', reviewSchema);
module.exports = ReviewModel