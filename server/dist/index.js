"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_js_1 = require("./app.js");
const PORT = 3000;
const server = http_1.default.createServer(app_js_1.app);
app_js_1.app.listen(PORT, () => {
    console.log(`⚙️ Server is running at port : ${PORT}`);
});
//# sourceMappingURL=index.js.map