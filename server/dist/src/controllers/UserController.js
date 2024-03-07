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
exports.register = exports.verification = void 0;
const client_1 = require("@prisma/client");
//check if user in the db
function verification(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const employee = yield prisma.employee.findFirst({
                where: {
                    email: req.body.email,
                    password: req.body.password,
                },
            });
            if (employee) {
                res.status(200).json(employee);
            }
            else {
                res.json(); //{ message: "employee not found" }
            }
        }
        catch (err) {
            res.status(400).json({ message: err });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.verification = verification;
//An employee is registered in the system
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const updateUser = yield prisma.employee.update({
                where: {
                    email: req.body.email,
                },
                data: {
                    password: req.body.password,
                },
            });
        }
        catch (error) {
            res.status(400).json({ Message: "Error inserting user" });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.register = register;
//# sourceMappingURL=UserController.js.map