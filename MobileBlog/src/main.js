// Libary
require('dotenv').config();
const express = require('express');

// Database Connection
const db = require('./config/db');

// Initialize Express App
const app = express();

// Connect to Database
db.connect();

// Middleware Configuration
require('./config/middleware')(app);

// Template Engine Configuration
require('./config/handlebars')(app);

// Routes initialization
require('./routes')(app);

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
