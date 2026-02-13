/**
 * Environment Configuration Module
 * --------------------------------
 * This module loads environment variables from a `.env` file
 * into `process.env` using the dotenv package.
 *
 * Environment variables are used to store sensitive and
 * environment-specific configuration such as:
 * - Database connection strings
 * - Server ports
 * - Authentication secrets
 *
 * This file should be imported at the very beginning of the
 * application lifecycle to ensure all variables are available.
 */

require('dotenv').config();



