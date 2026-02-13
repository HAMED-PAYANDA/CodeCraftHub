/**
 * User Controller
 * ----------------
 * This controller contains request-handling logic for user-related
 * operations such as registration and authentication.
 *
 * It acts as the intermediary between HTTP requests (routes)
 * and the database/business logic (models).
 */

const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * registerUser
 * ------------
 * Handles user registration requests.
 *
 * Steps performed:
 * 1. Extracts user details from the request body
 * 2. Hashes the user's password using bcrypt
 * 3. Creates a new user document in MongoDB
 * 4. Returns a success response upon successful registration
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the user's password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance with hashed password
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success status
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        // Handle errors such as duplicate email or database failure
        res.status(500).json({ error: 'Registration failed.' });
    }
};

/**
 * loginUser
 * ---------
 * Handles user login and authentication requests.
 *
 * Steps performed:
 * 1. Finds the user by email
 * 2. Compares provided password with stored hashed password
 * 3. Generates a JSON Web Token (JWT) on successful authentication
 * 4. Returns the token to the client
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });

        // If user does not exist, return error
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Compare provided password with stored hash
        const isMatch = await bcrypt.compare(password, user.password);

        // If passwords do not match, return unauthorized error
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }

        // Generate JWT token for authenticated user
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '1h' }
        );

        // Return token in response
        res.status(200).json({ token });
    } catch (error) {
        // Handle unexpected errors during login
        res.status(500).json({ error: 'Login failed.' });
    }
};

