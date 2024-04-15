"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const client_1 = require("@prisma/client");
exports.db = new client_1.PrismaClient();
if (process.env.NODE_ENV !== 'production')
    globalThis.prisma = exports.db;
console.log(`\n DataBase connected !! DB HOST: ${exports.db}`);
// export const db = new PrismaClient();
//# sourceMappingURL=db.js.map