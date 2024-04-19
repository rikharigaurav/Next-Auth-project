"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const express_2 = require("@auth/express");
// If your app is served through a proxy
// trust the proxy to allow us to read the `X-Forwarded-*` headers
app.set('trust proxy', true);
app.use('/auth/*', (0, express_2.ExpressAuth)({ providers: [] }));
