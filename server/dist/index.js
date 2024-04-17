"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config"));
dotenv_1.default.config();
const app_1 = require("./app");
const server = http_1.default.createServer(app_1.app);
server.listen(config_1.default.PORT, () => {
    console.log(`Server running at ${config_1.default.CLIENT_URL}`);
});
//# sourceMappingURL=index.js.map