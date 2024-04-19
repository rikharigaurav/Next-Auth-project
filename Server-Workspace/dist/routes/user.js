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
const index_1 = require("../schema/index");
const RegisterUser = (values) => __awaiter(void 0, void 0, void 0, function* () {
    const Validation = index_1.RegisterSchema.safeParse(values);
    if (!Validation) {
        return { error: "Invalid Fields" };
    }
    if (Validation.success) {
        const { email, password, username, name } = Validation.data;
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const existingEmail = yield prisma.user.findUnique({
            where: {
                email
            }
        });
        if (existingEmail) {
            return { error: "Email already exists" };
        }
        // const existingUsername = await getUserByUsername(username)
        // if(existingUsername) {
        //     return { error: "Username already exists"}
        // }
        yield prisma.user.create({
            data: {
                username,
                name,
                email,
                password: hashedPassword,
            }
        });
    }
    return { success: "User Created" };
});
exports.RegisterUser = RegisterUser;
//# sourceMappingURL=user.js.map