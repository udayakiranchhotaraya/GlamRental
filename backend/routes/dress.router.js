const express = require("express");

const { getDresses, searchDress } = require("../controllers/dress.controller");

const DressRouter = express.Router();

DressRouter.get("/", getDresses);
DressRouter.post("/search", searchDress);

module.exports = DressRouter;
