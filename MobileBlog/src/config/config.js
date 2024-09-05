const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) });

const config = {
    env: process.env.NODE_ENV || 'development',
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
    },
    port: process.env.PORT || 3000,
};

module.exports = config;