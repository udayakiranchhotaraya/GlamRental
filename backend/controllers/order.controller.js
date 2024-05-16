const mongoose = require('mongoose');
const axios = require('axios');

const { Order, ShoppingCartModel, User, Dress } = require('../models');

async function placeOrder (req, res) {
    try {
        const { userId } = req.user;
        const { cartId, addressId } = req.body;

        let cart = await ShoppingCartModel.findOne({_id  : cartId});
        if (!(cart)) {
            res.status(404).json({"message" : "Cart not found. Failed to place order."});
            return;
        }

        const address = await User.find({_id: userId, "address._id" : addressId}, {"address.$" : 1});
        // res.status(200).json({"address" : address[0].address[0]});

        const order = await Order.create({
            user_id: cart.user_id,
            items: cart.items,
            total_price: cart.total_price,
            status: 'confirmed',
            address: address[0].address[0]
        });

        if (!(order)) {
            return res.status(500).json({"message" : "Failed to place order.", "error" : error.message});
        }
        
        cart = await ShoppingCartModel.findOneAndDelete({_id: cartId});
        return res.status(201).json({"message": "Order placed successfully", order});
    } catch (error) {
        return res.status(500).json({"message" : "Failed to place order.", "error" : error.message});
    }
}

async function confirmOrder(req, res) {
    try {
        const { userId } = req.user;
        const { orderId } = req.params;

        const order = await Order.findOneAndUpdate({_id: orderId}, {
            status: 'confirmed'
        }, {
            new: true
        });
        return res.status(200).json({"message" : "Order confirmed", order});
    } catch (error) {
        return res.status(500).json({"message" : "Failed to confirm order", "error" : error.message});
    }
}

async function viewOrders(req, res) {
    try {
        const { userId } = req.user;

        const orders = await Order.find({user_id: userId});

        return res.status(200).json({orders});
    } catch (error) {
        return res.status(500).json({"message" : error.message});
    }
}

async function cancelOrder(req, res) {
    try {
        const { userId } = req.user;
        const { orderId } = req.params;

        const order = await Order.findOne({_id: orderId});
        
        for (let item of order.items) {
            console.log(item.dress_id);
            let dress = await Dress.findOneAndUpdate({_id: item.dress_id}, {
                $inc : {available_quantity: item.quantity},
                availability : {
                    $cond : [ { $gt: ["$available_quantity", 0] }, true ]
                }
            }, {
                new: true
            });
            // console.log(dress.available_quantity, item.quantity);
            // if (dress) {
            //     dress.available_quantity += item.quantity;

            //     if (dress.available_quantity > 0) {
            //         dress.availability = true;
            //     }
            // }
            // await dress.save();
        }

        order.status = 'cancelled';
        await order.save();
        return res.status(200).json({"message" : "Order cancelled successfully", order});
    } catch (error) {
        return res.status(500).json({"message" : error.message});
    }
}

module.exports = {
    placeOrder,
    confirmOrder,
    viewOrders,
    cancelOrder
}