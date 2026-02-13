/**
 * Global Error Handling Middleware
 * --------------------------------
 * This middleware centralizes error handling for the application.
 *
 * Any error passed to this middleware will be logged and
 * a standardized error response will be sent to the client.
 */

const logger = require('./logger');

/**
 * errorHandler
 * ------------
 * Express error-handling middleware function.
 *
 * This function is triggered whenever an error is passed
 * using `next(error)` in the request-processing pipeline.
 *
 * Responsibilities:
 * - Logs the error details using the centralized logger
 * - Returns a generic error response to the client
 *
 * @param {Error} err - The error object thrown during request processing
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const errorHandler = (err, req, res, next) => {
    // Log the error for debugging and monitoring purposes
    logger.error(err);

    // Send a generic error response to avoid leaking sensitive details
    res.status(500).json({ error: 'Something went wrong.' });
};

// Export the global error handler middleware
module.exports = errorHandler;

