const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
    DBURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/`;
    DBNAME = `${process.env.MONGO_DATABASE}`;

    try {
        await mongoose.connect(`${DBURL}${DBNAME}`);
        console.log(`Database \`${DBNAME}\` connected`);
    } catch (error) {
        console.error(`Connection error : ${error}`);
    }
}

module.exports = dbConnect;