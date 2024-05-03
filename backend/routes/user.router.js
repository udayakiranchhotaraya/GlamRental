const express = require('express');

const {
    registerUser,
    loginUser,
    updateUserDetails,
    addAddress,
    updateAddress,
    makeUserASeller,
    deleteUser,
} = require('../controllers/user.controller');

const { jwtMiddleware } = require('../middleware/jwt-auth');

const UserRouter = express.Router();

UserRouter.get('/signin', loginUser);
UserRouter.post('/signup', registerUser);
UserRouter.put('/updateDetails/', jwtMiddleware, updateUserDetails);
UserRouter.put('/newAddress/', jwtMiddleware, addAddress);
UserRouter.put('/updateAddress/:addressId', jwtMiddleware, updateAddress);
UserRouter.put('/registerAsSeller/:id', jwtMiddleware, makeUserASeller);
UserRouter.delete('/', jwtMiddleware, deleteUser);

module.exports = UserRouter;