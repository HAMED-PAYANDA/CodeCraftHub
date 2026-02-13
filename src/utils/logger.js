/**
 * Logger Utility
 * --------------
 * This module configures and exports a centralized logging utility
 * using the Winston logging library.
 *
 * The logger is used across the application to record informational
 * messages, warnings, and errors in a consistent format.
 */

const winston = require('winston');

/**
 * logger
 * ------
 * Creates a Winston logger instance with multiple transports.
 *
 * Logging Configuration:
 * - Level: 'info' (logs info, warn, and error messages)
 * - Format: JSON (structured logs, easy to parse)
 * - Transports:
 *   • File transport for error logs
 *   • Console transport for real-time logging
 */
const logger = winston.createLogger({
    level: 'info',

    // Use JSON format for structured and machine-readable logs
    format: winston.format.json(),

    // Define where logs should be written
    transports: [
        // Write error-level logs to a file
        new winston.transports.File({
            filename: 'error.log',
            level: 'error'
        }),

        // Output logs to the console
        new winston.transports.Console()
    ]
});

// Export the logger instance for use throughout the application
module.exports = logger;

