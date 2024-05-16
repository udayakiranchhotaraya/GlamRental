const express = require('express');

const {
    registerUser,
    loginUser,
    updateUserDetails,
    addAddress,
    updateAddress,
    makeUserASeller,
    deleteUser,
    getUserDetails,
} = require('../controllers/user.controller');

const { jwtMiddleware } = require('../middleware/jwt-auth.middleware');

const UserRouter = express.Router();

UserRouter.post('/signin', loginUser);
UserRouter.post('/signup', registerUser);
UserRouter.get('/', jwtMiddleware, getUserDetails);
UserRouter.put('/updateDetails/', jwtMiddleware, updateUserDetails);
UserRouter.put('/newAddress/', jwtMiddleware, addAddress);
UserRouter.put('/updateAddress/:addressId', jwtMiddleware, updateAddress);
UserRouter.put('/registerAsSeller/:id', jwtMiddleware, makeUserASeller);
UserRouter.delete('/', jwtMiddleware, deleteUser);

module.exports = UserRouter;