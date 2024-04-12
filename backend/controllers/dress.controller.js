const mongoose = require('mongoose');

const Dress = require('../models/dress.model');

async function getDresses(req, res) {
    try {
        const dresses = await Dress.find();
        if (dresses.length > 0) {
            res.status(200).json(dresses);
        } else {
            res.status(404).json({"message" : "No record(s) found"});
        }
    } catch (error) {
        res.status(500).json({"message" : error.message});
    }
}

async function addDress(req, res) {
    try {
        const { title, category, sizes, colors, material, price, imageUrls, description, quantity, owner_id } = req.body;
        const dress = await Dress.create({
            title: title,
            category: category,
            sizes: sizes,
            colors: colors,
            material: material,
            price: price,
            imageUrl: imageUrls,
            description: description,
            quantity: quantity,
            owner_id: owner_id
        });
        if (dress) {
            res.status(201).json(dress);
        } else {
            res.status(400).json({"message" : "Some error occurred!"})
        }
    } catch (error) {
        res.status(400).json({"message" : error.message});
    }
}

module.exports = {
    getDresses,
    addDress
}