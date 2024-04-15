"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controllers_1 = require("../controllers/user.controllers");
exports.default = (router) => {
    router.post('/register', user_controllers_1.RegisterUser);
};
//# sourceMappingURL=user.routes.js.map