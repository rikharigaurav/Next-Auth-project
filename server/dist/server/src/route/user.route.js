"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("middleware/validate");
const user_1 = require("../controller/user");
const express_1 = require("express");
const schema_1 = require("schema");
const router = (0, express_1.Router)();
router.route('/register').post((0, validate_1.Validation)(schema_1.RegisterSchema), user_1.registerUser);
exports.default = router;
//# sourceMappingURL=user.route.js.map