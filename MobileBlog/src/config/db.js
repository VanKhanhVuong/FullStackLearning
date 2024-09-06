const mongoose = require('mongoose');
const path = require('path');
const config = require("../config/config");
require('dotenv').config({ path: getEnvPath() });

// Get environment
function getEnvPath() {
    return path.resolve(__dirname, `../.env.${config.env}`);
}

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('MONGODB_URI is not defined in .env');
}

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Database connected successfully!");
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        throw err; 
    }
}

module.exports = { connect };
