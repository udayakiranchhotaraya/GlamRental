const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items : [{
        dress_id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dress',
            required: true
        },
        quantity : {
            type: Number,
            default: 1,
            required: true
        },
        price : {
            type: Number,
            required: true
        },
        rental_period : {
            start_date : {
                type: Date,
                // required: true
            },
            end_date : {
                type: Date,
                // required: true
            },
        }
    }],
    total_price : {
        type: Number,
        default: 0
    },
    status : {
        type: String,
        enum: ['active', 'checkout'],
        default: 'active',
        required: true
    }
}, {
    timestamps: true
});

const ShoppingCartModel = mongoose.model('ShoppingCart', shoppingCartSchema);
module.exports = { ShoppingCartModel, shoppingCartSchema };