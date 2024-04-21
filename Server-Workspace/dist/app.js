"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./route/user.route"));
const github_1 = __importDefault(require("@auth/express/providers/github"));
const express_2 = require("@auth/express");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)());
// If app is served through a proxy, trust the proxy to allow HTTPS protocol to be detected
// https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', true)
app.use('/auth/*', (0, express_2.ExpressAuth)({ providers: [github_1.default] }));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use('/', user_route_1.default);
