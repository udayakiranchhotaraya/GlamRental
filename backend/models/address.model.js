const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    addressLine1 : {
        type: String,
        required: true
    },
    addressLine2 : {
        type: String
    },
    addressLine3 : {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    pin : {
        type: String,
        required: true
    },
    state : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    mobile : {
        type: String,
        required: true
    },
    addressType : {
        type: String,
        enum: ['billing', 'home', 'office']
    }
});

const AddressModel = mongoose.model('Address', addressSchema);
module.exports = { addressSchema, AddressModel};