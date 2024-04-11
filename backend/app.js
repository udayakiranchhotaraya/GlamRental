const express = require('express');
require('dotenv').config();

const dbConnect = require('./db/db.config');

const PORT = process.env.PORT || 5000;
const app = express();

dbConnect()

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
