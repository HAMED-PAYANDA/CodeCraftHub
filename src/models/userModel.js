/**
 * User Model
 * ----------
 * This module defines the MongoDB schema and model for users
 * in the User Management Service.
 *
 * The User model represents application users such as students,
 * instructors, and administrators.
 */

const mongoose = require('mongoose');

/**
 * userSchema
 * ----------
 * Defines the structure of the User document in MongoDB.
 *
 * Fields:
 * - username: Unique identifier for the user
 * - email: Unique email address used for authentication
 * - password: Hashed user password
 * - role: Defines the user's role within the platform
 * - createdAt: Timestamp indicating when the user was created
 */
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,   // Username is mandatory
        unique: true      // No two users can share the same username
    },
    email: {
        type: String,
        required: true,   // Email is mandatory
        unique: true      // Email must be unique across users
    },
    password: {
        type: String,
        required: true    // Stores the hashed password
    },
    role: {
        type: String,
        enum: ['student', 'instructor', 'admin'], // Allowed user roles
        default: 'student'                        // Default role
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set creation timestamp
    }
});

/**
 * User Model
 * ----------
 * Creates a Mongoose model from the user schema.
 * This model is used to interact with the `users` collection
 * in the MongoDB database.
 */
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;

