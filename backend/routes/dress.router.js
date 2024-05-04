const express = require('express');

const {
    getDresses
} = require('../controllers/dress.controller');

const DressRouter = express.Router();

DressRouter.get('/', getDresses);

module.exports = DressRouter;