const mongoose = require('mongoose');
const bcyrpt = require('bcrypt');

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

userSchema.pre('save', async function (next ) {
    const user = this;

    // Check if the password is being modified. Hash the password only if the password has been modified
    if (!(user.isModified('password'))) {
        return next();
    }

    try {
        // Generate Salt
        const salt = await bcyrpt.genSalt(12);

        // Hash the password
        const hashedPassword = await bcyrpt.hash(user.password, salt);

        // Override the plaintext passwrod with the hash password
        user.password = String(hashedPassword);
        next();
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        const isMatch = await bcyrpt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;