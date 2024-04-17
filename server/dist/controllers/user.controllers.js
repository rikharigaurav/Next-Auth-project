"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = require("../data/user");
const db_1 = require("../db/db");
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, name, email, password } = req.body;
    console.log(req.body);
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
    const existingEmail = yield (0, user_1.getUserByEmail)(email);
    if (existingEmail) {
        return { error: "email already exists" };
    }
    // const existingUsername = await getUserByUsername(username)
    // if(existingUsername) {
    //     return { error: "Username already exists"}
    // }
    const usercreated = yield db_1.db.user.create({
        data: {
            username,
            name,
            email,
            password: hashedPassword,
        },
    });
    if (!usercreated) {
        return { error: 'Something went wrong' };
    }
    return { success: 'user created' };
});
exports.RegisterUser = RegisterUser;
//# sourceMappingURL=user.controllers.js.map