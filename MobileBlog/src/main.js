// Imports Library
require("dotenv").config({ path: "./src/.env" });
const express = require("express");
const config = require("./config/config");

// Database Connection
const db = require("./config/db");

// Initialize Express App
const app = express();

// Connect to Database
db.connect();

// Middleware Configuration
require("./config/middleware")(app);

// Template Engine Configuration
require("./config/handlebars")(app);

// Routes initialization
require("./routes")(app);

// Define a function to start the server after DB connection
async function startServer() {
  try {
    await db.connect();

    const port = config.port || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`Environment: ${config.env}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1); // Exit the process if DB connection fails
  }
}

// Start the server
startServer();
