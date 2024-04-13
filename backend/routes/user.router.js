const express = require('express');

const {
    addUser,
    getUsers,
    loginUser,
    updateUserDetails,
    makeUserASeller
} = require('../controllers/user.controller');

const UserRouter = express.Router();

UserRouter.get('/', getUsers);
UserRouter.get('/signin', loginUser);
UserRouter.post('/signup', addUser);
UserRouter.put('/updateDetails/:id', updateUserDetails);
UserRouter.put('/registerAsSeller/:id', makeUserASeller);

module.exports = UserRouter;