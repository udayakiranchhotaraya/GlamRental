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
            return res.status(201).json({"token" : token, "user" : user});
        } else {
            return res.status(400).json({"message" : "Some error occurred!"});
        }
    } catch (error) {
        return res.status(400).json({"message" : error.message});
    }
}

async function loginUser (req, res) {
    try {
        const { identification, password } = req.body;
        const user = await User.findOne({ $or: [ { email: { $eq: identification } }, { mobile: { $eq: identification } } ] });
        if (!(user) || !(await user.comparePassword(password))) {
            return res.status(401).json({"message" : "Invalid credientials"});
        }

        const payload = {
            userId: user.id,
            name: user.name,
            isAdmin: false
        };
        const token = generateToken(payload);

        return res.status(200).json({"token" : token, "user" : user});
    } catch (error) {
        return res.status(500).json({"message" : error.message});
    }
}

async function getUserDetails (req, res) {
    try {
        const { userId } = req.user;
        const user = await User.findOne({_id: userId});
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({"message" : "User not found!"});
        }
    } catch (error) {
        return res.status(500).json({ "message" : "Some error occurred!" });
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
            return res.status(200).json(user);
        } else {
            return res.status(400).json({"message" : "Some error occurred!"});
        }
    } catch (error) {
        return res.status(400).json({"message" : error.message});
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
        return res.status(200).json({"message": "User registered as Seller successfully", user});
    } catch (error) {
        return res.status(500).json({"message" : error.message});
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
        return res.status(200).json({user});
    } catch (error) {
        return res.status(500).json({"message" : error.message});
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

        return res.status(200).json({"message" : "Address updated successfully", user});
    } catch (error) {
        return res.status(500).json({"message" : error.message});
    }
}

async function deleteUser (req, res) {
    try {
        const { userId } = req.user;
        const user = await User.findOneAndDelete({_id: userId});
        return res.status(200).json({user});
    } catch (error) {
        return res.status(500).json({"message" : error.message});
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUserDetails,
    updateUserDetails,
    addAddress,
    updateAddress,
    makeUserASeller,
    deleteUser
};