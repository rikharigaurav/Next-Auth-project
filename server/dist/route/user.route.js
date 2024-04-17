"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controller/user");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/register').post(user_1.registerUser);
exports.default = router;
//# sourceMappingURL=user.route.js.map