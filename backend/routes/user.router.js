const express = require('express');

const {
    addUser,
    loginUser,
    updateUserDetails,
    addAddress,
    makeUserASeller
} = require('../controllers/user.controller');

const { jwtMiddleware } = require('../middleware/jwt-auth');

const UserRouter = express.Router();

UserRouter.get('/signin', loginUser);
UserRouter.post('/signup', addUser);
UserRouter.put('/updateDetails/:id', jwtMiddleware, updateUserDetails);
UserRouter.put('/newAddress/:id', jwtMiddleware, addAddress);
UserRouter.put('/registerAsSeller/:id', jwtMiddleware, makeUserASeller);

module.exports = UserRouter;