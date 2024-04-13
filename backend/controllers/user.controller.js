const mongoose = require('mongoose');

const User = require('../models/users.model');

async function addUser (req, res) {
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
        if (user) {
            res.status(201).json(user);
        } else {
            res.status(400).json({"message" : "Some error occurred!"});
        }
    } catch (error) {
        res.status(400).json({"message" : error.message});
    }
}

async function getUsers (req, res) {
    try {
        const users = await User.find();
        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({"message" : "No record(s) found"});
        }
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

async function loginUser (req, res) {
    try {
        const { email, mobile, password } = req.body;
        const user = await User.findOne({ $or: [ { email: { $eq: email } }, { mobile: { $eq: mobile } } ] });
        if (!(user) || !(await user.comparePassword(password))) {
            res.status(401).json({"message" : "Invalid username or password"});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

async function updateUserDetails (req, res) {
    try {
        const { id } = req.params;
        const { email, mobile, name } = req.body;
        const user = await User.findOneAndUpdate({_id : id}, {
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
        const { id } = req.params;
        const user = await User.findOneAndUpdate({_id : id}, {
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

module.exports = {
    addUser,
    getUsers,
    loginUser,
    updateUserDetails,
    makeUserASeller
};