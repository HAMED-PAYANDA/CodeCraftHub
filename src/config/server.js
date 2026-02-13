/**
 * Server Configuration Module
 * ----------------------------
 * This module initializes and configures the Express application.
 * It applies global middleware such as CORS and JSON body parsing
 * before the application routes are registered.
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/**
 * initServer
 * ----------
 * Creates and configures an Express server instance.
 *
 * Responsibilities:
 * - Initializes an Express application
 * - Enables Cross-Origin Resource Sharing (CORS)
 * - Parses incoming JSON request bodies
 *
 * @returns {Express.Application} Configured Express application instance
 */
const initServer = () => {
    // Create a new Express application instance
    const app = express();

    // Enable CORS to allow requests from different origins
    app.use(cors());

    // Parse incoming JSON request bodies
    app.use(bodyParser.json());

    // Return the configured Express application
    return app;
};

// Export the server initialization function
module.exports = initServer;


