const express = require('express');
const cors = require('cors');
require('dotenv').config();

const dbConnect = require('./db/db.config');

const UserRouter = require('./routes/user.router');
const DressRouter = require('./routes/dress.router');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', UserRouter);
app.use('/dress', DressRouter);

dbConnect()

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
