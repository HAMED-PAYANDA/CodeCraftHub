/**
 * User Service
 * ------------
 * This service layer contains reusable business logic related to users.
 *
 * Services help separate database operations from controller logic,
 * improving maintainability, testability, and scalability.
 */

const User = require('../models/userModel');

/**
 * findUserById
 * ------------
 * Retrieves a user document from the database by its unique ID.
 *
 * This function is typically used by controllers or middleware
 * that require access to user details after authentication.
 *
 * @param {String} userId - The unique MongoDB ObjectId of the user
 * @returns {Promise<Object|null>} The user document if found, otherwise null
 */
exports.findUserById = async (userId) => {
    // Query the database for the user with the specified ID
    return await User.findById(userId);
};

