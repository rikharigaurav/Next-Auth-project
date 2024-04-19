"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@auth/express");
const express_2 = __importDefault(require("express"));
const app = (0, express_2.default)();
// If your app is served through a proxy
// trust the proxy to allow us to read the `X-Forwarded-*` headers
app.set('trust proxy', true);
app.use('/auth/*', (0, express_1.ExpressAuth)({ providers: [] }));
