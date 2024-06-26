/**
 * An array of routes accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ['/', '/new-verification']

/**
 * An array of routes used for authentication
 * These routes will redirect logged in user to /settings
 * @type {string[]}
 */

export const authRoutes = [
  '/new-password',
  '/reset',
  '/login',
  '/register',
  '/error',
]

/**
 * Prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = '/api/auth'

/**
 * The default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = '/board'
