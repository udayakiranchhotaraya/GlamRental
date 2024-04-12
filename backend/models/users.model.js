const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    mobile : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    name : {
        firstName: {
            type: String,
            required: true
        },
        lastName : {
            type: String,
        }
    },
    address : [{
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
    }],
    roles : [{
        type: String,
        enum: ['user', 'owner'],
        required: true
    }]
}, {
    timestamps: true
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;