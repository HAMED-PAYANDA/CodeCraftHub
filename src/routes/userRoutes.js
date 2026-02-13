/**
 * User Routes
 * -----------
 * This module defines all API routes related to user management.
 *
 * It maps HTTP endpoints to controller functions responsible
 * for handling user registration and authentication logic.
 */

const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

// Create a new Express Router instance
const router = express.Router();

/**
 * POST /register
 * ---------------
 * Registers a new user in the system.
 *
 * Request Body:
 * - username: String
 * - email: String
 * - password: String
 *
 * Response:
 * - 201 Created on success
 * - Error message on failure
 */
router.post('/register', registerUser);

/**
 * POST /login
 * ------------
 * Authenticates an existing user.
 *
 * Request Body:
 * - email: String
 * - password: String
 *
 * Response:
 * - 200 OK with JWT token on success
 * - Error message on failure
 */
router.post('/login', loginUser);

// Export the router to be used in the main application
module.exports = router;

