const express = require('express');

const {
    getUsers,
    addDress,
    updateDressDetails,
    // admins,
    registerNewAdmin,
    loginAdmin,
    getOrders
} = require('../controllers/admin.controller');

const { jwtMiddleware } = require('../middleware/jwt-auth.middleware');

const AdminRouter = express.Router();

// AdminRouter.get('/', admins);
AdminRouter.get('/endUsers', jwtMiddleware, getUsers);
AdminRouter.get('/orders', jwtMiddleware, getOrders);
AdminRouter.post('/signin', loginAdmin);
AdminRouter.post('/newAdmin', registerNewAdmin);
AdminRouter.post('/addDress', jwtMiddleware, addDress);
AdminRouter.put('/updateDressDetails/:id', jwtMiddleware, updateDressDetails);

module.exports = AdminRouter;