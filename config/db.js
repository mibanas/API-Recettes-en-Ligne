const mongoose = require('mongoose');
require('dotenv').config();

const connectDataBase = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            dbName: process.env.DB_NAME
        });
        console.log('Server is connected to the database with MongoDB.');
    } catch (err) {
        console.error(`Server can't connect to the database: ${err}`);
    }
};

connectDataBase();

// module.exports = connectDataBase