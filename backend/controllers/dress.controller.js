const mongoose = require("mongoose");

const Dress = require("../models/dress.model");

async function getDresses(req, res) {
  try {
    const dresses = await Dress.find(req.query);
    if (dresses.length > 0) {
      res.status(200).json(dresses);
    } else {
      res.status(404).json({ message: "No record(s) found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function searchDress(req, res) {
  try {
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChars = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const searchResults = await Dress.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChars, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChars, "i") } },
      ],
    });
    return res.json(searchResults);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getDresses,
  searchDress,
};