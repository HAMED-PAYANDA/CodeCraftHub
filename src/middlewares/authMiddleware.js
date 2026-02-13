/**
 * Authentication Middleware
 * -------------------------
 * This middleware protects routes by validating JSON Web Tokens (JWT).
 *
 * It ensures that only authenticated users with a valid token
 * can access protected API endpoints.
 */

const jwt = require('jsonwebtoken');

/**
 * authMiddleware
 * --------------
 * Verifies the presence and validity of a JWT in the request headers.
 *
 * Expected Header Format:
 * Authorization: Bearer <JWT_TOKEN>
 *
 * Steps performed:
 * 1. Extracts the token from the Authorization header
 * 2. Verifies the token using the JWT secret
 * 3. Attaches decoded user information to req.user
 * 4. Allows request to proceed if verification succeeds
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const authMiddleware = (req, res, next) => {
    // Extract the token from the Authorization header
    const token = req.header('Authorization')?.split(' ')[1];

    // If no token is provided, deny access
    if (!token) {
        return res.status(401).json({ error: 'Access denied.' });
    }

    try {
        // Verify the token using the JWT secret
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        // Attach decoded user information to the request object
        req.user = verified;

        // Allow the request to continue to the next middleware/route
        next();
    } catch (error) {
        // Token is invalid or expired
        res.status(400).json({ error: 'Invalid token.' });
    }
};

// Export the authentication middleware
module.exports = authMiddleware;

