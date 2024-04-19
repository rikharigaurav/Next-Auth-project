"use strict";
/**
 * An array of routes accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_LOGIN_REDIRECT = exports.apiAuthPrefix = exports.authRoutes = exports.publicRoutes = void 0;
exports.publicRoutes = ['/', '/auth/new-verification'];
/**
 * An array of routes used for authentication
 * These routes will redirect logged in user to /settings
 * @type {string[]}
 */
exports.authRoutes = [
    '/new-password',
    '/reset',
    '/login',
    '/register',
    '/error',
];
/**
 * Prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
exports.apiAuthPrefix = '/api/auth';
/**
 * The default redirect path after logging in
 * @type {string}
 */
exports.DEFAULT_LOGIN_REDIRECT = '/settings';
