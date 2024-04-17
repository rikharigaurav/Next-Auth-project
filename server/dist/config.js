"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PORT = process.env.PORT || 8080;
const DOMAIN = process.env.DOMAIN || 'localhost';
const PROTOCOL = process.env.PROTOCOL || 'http://';
const CLIENT_URL = 'http://localhost:8080';
exports.default = {
    PORT,
    DOMAIN,
    PROTOCOL,
    CLIENT_URL,
};
//# sourceMappingURL=config.js.map