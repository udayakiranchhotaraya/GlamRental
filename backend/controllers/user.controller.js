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
            res.status(404).json({"message" : "No records found"});
        }
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

module.exports = {
    addUser,
    getUsers
};