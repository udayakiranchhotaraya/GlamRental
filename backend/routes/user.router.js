const express = require('express');

const {
    addUser,
    getUsers
} = require('../controllers/user.controller');

const UserRouter = express.Router();

UserRouter.get('/', getUsers);
UserRouter.post('/', addUser);

module.exports = UserRouter;