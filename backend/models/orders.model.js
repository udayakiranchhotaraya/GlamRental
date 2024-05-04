const mongoose = require('mongoose');

// const { shoppingCartSchema } = require('./shoppingCart.model');
const { addressSchema } = require('./address.model');

const orderSchema = new mongoose.Schema({
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
            }
        }
    }],
    total_price : {
        type: Number,
        default: 0
    },
    address : {
        type: addressSchema
    },
    status : {
        type: String,
        enum: ['pending', 'confirmed', 'paid', 'cancelled'],
        default: 'pending'
    }
}, {
    timestamps: true
});

const OrdersModel = mongoose.model('Order', orderSchema);
module.exports = OrdersModel;