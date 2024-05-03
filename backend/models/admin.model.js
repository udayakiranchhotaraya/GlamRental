const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    name : {
        firstName : {
            type: String,
            required : true
        },
        lastName : {
            type: String
        }
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin'],
        required: true,
        default: 'admin'
    }
});

adminSchema.pre('save', async function (next) {
    const admin = this;

    if (!(admin.isModified('password'))) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(12);

        const hashedPassword = await bcrypt.hash(admin.password, salt);

        admin.password = String(hashedPassword);
        next();
    } catch (error) {
        return next(error);
    }
});

adminSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const AdminModel = mongoose.model('Admin', adminSchema);
module.exports = AdminModel