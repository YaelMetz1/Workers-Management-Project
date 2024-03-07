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
exports.updateUserPassword = exports.getUser = void 0;
const client_1 = require("@prisma/client");
function getUser(userdetails) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const user = prisma.employee.findFirst({
                where: {
                    email: userdetails.email,
                    password: userdetails.password,
                },
            });
            return user;
        }
        catch (error) {
            throw error;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.getUser = getUser;
function updateUserPassword(userdetails) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const user = prisma.employee.update({
                where: {
                    email: userdetails.email,
                },
                data: {
                    password: userdetails.password,
                },
            });
            return user;
        }
        catch (error) {
            throw error;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.updateUserPassword = updateUserPassword;
//# sourceMappingURL=UserServices.js.map