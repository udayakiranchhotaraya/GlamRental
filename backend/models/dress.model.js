const mongoose = require('mongoose');

const dressSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        enum: ['male', 'female']
    },
    sizes : [{
        type: String,
        required: true
    }],
    colors : [{
        type: String,
        required: true
    }],
    material : {
        type: String
    },
    price : {
        type: Number,
        required: true
    },
    imageUrls : [{
        type: String,
        required: true
    }],
    description : {
        type: String,
        required: true
    },
    quantity : {
        type: Number,
        default: 0
    },
    availability : {
        type: Boolean,
        default: true
    },
    owner_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
}, {
    timestamps: true
});

const DressModel = mongoose.model('Dress', dressSchema);
module.exports = DressModel;