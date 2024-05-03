const Admin = require('./admin.model');
const User = require('./users.model');
const Dress = require('./dress.model');
const { AddressModel } = require('./address.model');
const { ShoppingCartModel } = require('./shoppingCart.model');
const Order = require('./orders.model');

module.exports = {
    Admin,
    User,
    Dress,
    AddressModel,
    ShoppingCartModel,
    Order
}