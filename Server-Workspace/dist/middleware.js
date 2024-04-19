"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const auth_config_1 = __importDefault(require("./auth.config"));
const next_auth_1 = __importDefault(require("next-auth"));
const routes_1 = require("./routes");
const { auth } = (0, next_auth_1.default)(auth_config_1.default);
exports.default = auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    // console.log(nextUrl)
    const isApiAuthRoute = nextUrl.pathname.startsWith(routes_1.apiAuthPrefix);
    const isPublicRoute = routes_1.publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = routes_1.authRoutes.includes(nextUrl.pathname);
    if (isApiAuthRoute) {
        return;
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(routes_1.DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return;
    }
    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/login", nextUrl));
    }
    return;
});
// Optionally, don't invoke Middleware on some paths
exports.config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
