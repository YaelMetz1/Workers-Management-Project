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
exports.deleteEmployee = exports.updateEmployee = exports.addEmployee = exports.getEmployees = void 0;
const client_1 = require("@prisma/client");
function getEmployees(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const employees = yield prisma.employee.findMany();
            if (employees) {
                res.status(200).json(employees);
            }
            else {
                res.json(); //{ message: "employees not found" }
            }
        }
        catch (error) {
            res.status(400).json({ Message: "Error getting employees" });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.getEmployees = getEmployees;
function addEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const user = yield prisma.employee.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber,
                    jobTitle: req.body.jobTitle,
                    salary: req.body.salary,
                },
            });
        }
        catch (error) {
            res.status(400).json({ Message: "Error inserting employee" });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.addEmployee = addEmployee;
function updateEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const updateUser = yield prisma.employee.update({
                where: {
                    email: req.body.email,
                },
                //find a better way
                data: {
                    name: req.body.name,
                    password: req.body.password,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber,
                    jobTitle: req.body.jobTitle,
                    salary: req.body.salary,
                    isAdmin: req.body.isAdmin,
                },
            });
        }
        catch (error) {
            res.status(400).json({ Message: "Error updating user" });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.updateEmployee = updateEmployee;
function deleteEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const deleteUser = yield prisma.employee.delete({
                where: {
                    id: +(req.params.id),
                },
            });
        }
        catch (error) {
            res.status(400).json({ Message: "Error deleting employee" });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=AdminController.js.map