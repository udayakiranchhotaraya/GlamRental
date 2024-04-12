const express = require('express');

const {
    getDresses,
    addDress
} = require('../controllers/dress.controller');

const DressRouter = express.Router();

DressRouter.get('/', getDresses);
DressRouter.post('/', addDress);

module.exports = DressRouter;