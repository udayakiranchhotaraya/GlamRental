const mongoose = require('mongoose');

const Dress = require('../models/dress.model');

async function getDresses(req, res) {
    try {
        const dresses = await Dress.find(req.query);
        if (dresses.length > 0) {
            res.status(200).json(dresses);
        } else {
            res.status(404).json({"message" : "No record(s) found"});
        }
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

module.exports = {
    getDresses,
}