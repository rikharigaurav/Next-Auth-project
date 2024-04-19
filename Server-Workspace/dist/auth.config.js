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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const credentials_1 = __importDefault(require("next-auth/providers/credentials"));
const index_1 = require("./schema/index");
const db_1 = require("./db/db");
exports.default = {
    providers: [
        (0, credentials_1.default)({
            authorize(credentials) {
                return __awaiter(this, void 0, void 0, function* () {
                    const isValid = index_1.LoginSchema.safeParse(credentials);
                    if (isValid.success) {
                        const { email, password } = isValid.data;
                        const user = yield db_1.db.user.findUnique({
                            where: {
                                email: email,
                            },
                        });
                        if (!user || !('password' in user))
                            return null;
                        if (user.password === null)
                            return null; // Add this check
                        const passwordMatch = yield bcryptjs_1.default.compare(password, user.password);
                        if (passwordMatch)
                            return user;
                    }
                    return null;
                });
            },
        }),
    ],
};
