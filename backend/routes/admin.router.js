const express = require('express');

const {
    getAllUsers,
    addDress,
    updateDressDetails,
    // admins,
    registerNewAdmin,
    loginAdmin
} = require('../controllers/admin.controller');

const { jwtMiddleware } = require('../middleware/jwt-auth.middleware');

const AdminRouter = express.Router();

// AdminRouter.get('/', admins);
AdminRouter.get('/signin', loginAdmin)
AdminRouter.get('/allUsers', jwtMiddleware, getAllUsers);
AdminRouter.post('/newAdmin', registerNewAdmin);
AdminRouter.post('/addDress', jwtMiddleware, addDress);
AdminRouter.put('/updateDressDetails/:id', jwtMiddleware, updateDressDetails);

module.exports = AdminRouter;