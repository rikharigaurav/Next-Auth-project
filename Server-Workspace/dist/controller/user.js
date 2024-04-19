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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const db_1 = require("../db/db");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Assuming req.body is JSON data
        const user = req.body;
        const { username, name, email, password } = user;
        if (!user) {
            console.log("Fields required");
        }
        // Now you can use username, name, email, and password as expected
        // Example: save the user to a database
        const userCreated = yield db_1.db.user.create({
            data: {
                username,
                name,
                email,
                password,
            }
        });
        if (!userCreated) {
            throw new Error("Something went wrong");
        }
        // Send a success response
        return res.json({
            message: "User Created Succesfully"
        });
    }
    catch (error) {
        // Handle errors
        console.error("Error registering user:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.registerUser = registerUser;
