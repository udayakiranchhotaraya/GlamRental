const express = require('express');
const cors = require('cors');
require('dotenv').config();

const dbConnect = require('./db/db.config');

const { jwtMiddleware } = require('./middleware/jwt-auth');

const AdminRouter = require('./routes/admin.router');
const UserRouter = require('./routes/user.router');
const DressRouter = require('./routes/dress.router');
const CartRouter = require('./routes/cart.router');
const OrderRouter = require('./routes/order.router');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/admin', AdminRouter);
app.use('/api/users', UserRouter);
app.use('/api/dress', DressRouter);
app.use('/api/cart', CartRouter);
app.use('/api/order', OrderRouter)

dbConnect()

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
