const express = require('express');

const {
    placeOrder,
    confirmOrder,
    viewOrders,
    cancelOrder
} = require('../controllers/order.controller');
const { jwtMiddleware } = require('../middleware/jwt-auth.middleware');

const OrderRouter = express.Router();

OrderRouter.get('/', jwtMiddleware, viewOrders);
OrderRouter.post('/', jwtMiddleware, placeOrder);
OrderRouter.put('/confirmOrder/:orderId', jwtMiddleware, confirmOrder);
OrderRouter.put('/cancelOrder/:orderId', jwtMiddleware, cancelOrder);

module.exports = OrderRouter;