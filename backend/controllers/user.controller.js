const mongoose = require('mongoose');

const User = require('../models/users.model');
const { generateToken } = require('../middleware/jwt-auth.middleware');

async function registerUser (req, res) {
    try {
        const { email, mobile, password, name, address } = req.body;
        const user = await User.create({
            email: email,
            mobile: mobile,
            password: password,
            name: name,
            address: address,
            roles: ['user']
        });

        const payload = {
            userId: user.id,
            name: user.name,
            isAdmin: false
        };
        const token = generateToken(payload);

        if (user && token) {
            res.status(201).json({"token" : token, "user" : user});
        } else {
            res.status(400).json({"message" : "Some error occurred!"});
        }
    } catch (error) {
        res.status(400).json({"message" : error.message});
    }
}

async function loginUser (req, res) {
    try {
        const { email, mobile, password } = req.body;
        const user = await User.findOne({ $or: [ { email: { $eq: email } }, { mobile: { $eq: mobile } } ] });
        if (!(user) || !(await user.comparePassword(password))) {
            res.status(401).json({"message" : "Invalid credientials"});
        }

        const payload = {
            userId: user.id,
            name: user.name,
            isAdmin: false
        };
        const token = generateToken(payload);

        res.status(200).json({"token" : token, "user" : user});
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

async function updateUserDetails (req, res) {
    try {
        const { userId } = req.user;
        const { email, mobile, name } = req.body;
        const user = await User.findOneAndUpdate({_id : userId}, {
            email: email,
            mobile: mobile,
            name: name,
        }, {
            new: true
        });
        user.save();
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(400).json({"message" : "Some error occurred!"});
        }
    } catch (error) {
        res.status(400).json({"message" : error.message});
    }
}

async function makeUserASeller (req, res) {
    try {
        const { userId } = req.user;
        const user = await User.findOneAndUpdate({_id : userId}, {
            $push : {
                roles: 'owner'
            }
        }, {
            new: true
        });
        res.status(200).json({"message": "User registered as Seller successfully", user});
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

async function addAddress (req, res) {
    try {
        const { userId } = req.user;
        const { address } = req.body;
        const user = await User.findOneAndUpdate({_id: userId}, {
            $push : {
                address: address
            }
        }, {
            new: true
        });
        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

async function updateAddress (req, res) {
    try {
        const { userId } = req.user;
        const { addressId } = req.params;
        const { updatedAddress } = req.body;

        const user = await User.findOne({_id: userId});
        if (!user) {
            return res.status(404).json({"message" : "User not found"});
        }

        const addressIndex = user.address.findIndex((address) => address._id.toString() === addressId);
        if (addressIndex === -1) {
            return res.status(404).json({"message" : "Address not found"});
        }

        user.address[addressIndex] = updatedAddress;

        await user.save();

        res.status(200).json({"message" : "Address updated successfully", user});
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

async function deleteUser (req, res) {
    try {
        const { userId } = req.user;
        const user = await User.findOneAndDelete({_id: userId});
        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

module.exports = {
    registerUser,
    loginUser,
    updateUserDetails,
    addAddress,
    updateAddress,
    makeUserASeller,
    deleteUser
};