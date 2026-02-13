/**
 * Database Configuration Module
 * --------------------------------
 * This module is responsible for establishing a connection
 * between the Node.js application and the MongoDB database
 * using Mongoose.
 *
 * The MongoDB connection string is retrieved from environment
 * variables to keep sensitive credentials secure.
 */

const mongoose = require('mongoose');

/**
 * connectDB
 * ----------
 * Establishes a connection to the MongoDB database.
 *
 * - Uses Mongoose to connect to MongoDB
 * - Reads the connection URI from process.env.MONGO_URI
 * - Logs a success message when connected
 * - Terminates the application if the connection fails
 */
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the URI from environment variables
        await mongoose.connect(process.env.MONGO_URI, {
            // These options ensure compatibility with older MongoDB drivers
            // (Safe to remove in newer Mongoose versions)
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Log successful database connection
        console.log('MongoDB connected successfully.');
    } catch (error) {
        // Log the error if the database connection fails
        console.error('MongoDB connection failed:', error);

        // Exit the application with failure code
        process.exit(1);
    }
};

// Export the database connection function
module.exports = connectDB;

