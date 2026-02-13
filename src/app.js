/**
 * Application Entry Point
 * -----------------------
 * This file serves as the main entry point for the User Management Service.
 *
 * Responsibilities:
 * - Load environment variables
 * - Initialize the Express server
 * - Establish database connection
 * - Register application routes
 * - Configure global error handling
 * - Start the HTTP server
 */

require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const initServer = require('./config/server');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

// Initialize the Express application with global middleware
const app = initServer();

// Connect to the MongoDB database
connectDB();

// Register user-related API routes
// All user endpoints will be prefixed with /api/users
app.use('/api/users', userRoutes);

// Register global error handling middleware
// This should be added after all route definitions
app.use(errorHandler);

// Define the server port (from environment variables or default)
const PORT = process.env.PORT || 5000;

// Start the HTTP server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

