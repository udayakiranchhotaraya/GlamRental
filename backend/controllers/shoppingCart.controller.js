const mongoose = require('mongoose');

const { ShoppingCartModel, Dress } = require('../models');

async function addToCart (req, res) {
    try {
        const { userId } = req.user;

        let cart = await ShoppingCartModel.findOne({user_id: userId, status: 'active'});
        if (!(cart)) {
            cart = new ShoppingCartModel({ user_id: userId, items: [] });
        }

        const { dressId } = req.params;
        // const { start_date, end_date } 
        const dress = await Dress.findOne({_id : dressId});
        if (!dress) {
            return res.status(404).json({ "message" : 'Dress not found' });
        }
        if (dress.available_quantity < 1) {
            return res.status(404).json({ "message" : 'Dress currently unavailable' });
        }

        const existingItem = cart.items.find((item) => item.dress_id.toString() === dressId);

        if (existingItem) {
            existingItem.quantity++;
            // existingItem.price += parseFloat(dress.price);
        } else {
            cart.items.push({dress_id : dressId, dress_title:dress.title, thumbnail: dress.imageUrls[0], price: dress.price});
        }

        const totalPrice = cart.items.reduce((total, item) => total + (item.quantity * item.price), 0);
        cart.total_price = totalPrice;
        await cart.save();

        dress.available_quantity--;
        if (dress.available_quantity === 0) {
            dress.availability = false;
        }
        await dress.save();

        return res.status(200).json({ "message": 'Item added to cart successfully', cart });
    } catch (error) {
        console.error('Error adding item to cart:', error);
        return res.status(500).json({ "message": 'Failed to add item to cart' });
    }
}

async function updateCartItems (req, res) {
    try {
        const { userId } = req.user;
        const { cartId } = req.params; 
        const { dressId, quantity } = req.body;

        let cart = await ShoppingCartModel.findOne({_id: cartId});
        if (!(cart)) {
            return res.status(404).json({"message" : "Cart not found"});
        }

        const itemIndex = cart.items.findIndex((item) => item.dress_id.toString() === dressId);
        if (itemIndex === -1) {
            return res.status(404).json({"message" : "Item not found in the cart"});
        }
        
        const dress = await Dress.findOne({_id: dressId});
        if (quantity > dress.available_quantity) {
            return res.status(404).json({"message" : "Quantity exceeds availability"});
        }

        const priorItemQuantity = cart.items[itemIndex].quantity;

        dress.available_quantity += priorItemQuantity - quantity;
        if (dress.available_quantity > 1) {
            dress.availability = true;
        }

        cart.items[itemIndex].quantity = quantity;

        if (cart.items[itemIndex].quantity === 0) {
            cart.items.splice(itemIndex, 1);
        }

        const totalPrice = cart.items.reduce((total, item) => total + (item.quantity * item.price), 0);
        cart.total_price = totalPrice;


        await cart.save();
        await dress.save();

        return res.status(200).json({"message" : "Cart item quantity updated successfully", cart});
    } catch (error) {
        console.error('Error updating cart item quantity:', error);
        return res.status(500).json({ "message": 'Failed to update cart item quantity' });
    }
}

async function viewCart (req, res) {
    try {
        const { userId } = req.user;

        const cart = await ShoppingCartModel.findOne({user_id: userId, status: 'active'});
        if (!cart) {
            return res.status(404).json({"message" : "Cart not found"});
        } else {
            return res.status(200).json({ cart });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message" : "Some error occurred" });
    }
}

module.exports = {
    addToCart,
    updateCartItems,
    viewCart
}