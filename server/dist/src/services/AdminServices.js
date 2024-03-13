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
const prisma = new client_1.PrismaClient();
function getEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        const employees = yield prisma.employee.findMany({
            orderBy: {
                id: "asc",
            },
        });
        return employees;
    });
}
exports.getEmployees = getEmployees;
function addEmployee(employeeData) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        const user = yield prisma.employee.create({
            data: {
                name: employeeData.name,
                email: employeeData.email,
                phoneNumber: employeeData.phoneNumber,
                jobTitle: employeeData.jobTitle,
                salary: employeeData.salary,
            },
        });
        return user;
    });
}
exports.addEmployee = addEmployee;
function updateEmployee(employeeData) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const updateUser = yield prisma.employee.update({
                where: {
                    email: employeeData.email,
                },
                //find a better way
                data: {
                    name: employeeData.name,
                    email: employeeData.email,
                    phoneNumber: employeeData.phoneNumber,
                    jobTitle: employeeData.jobTitle,
                    salary: employeeData.salary,
                },
            });
            return updateUser;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.updateEmployee = updateEmployee;
function deleteEmployee(employeeId) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            const deleteUser = yield prisma.employee.delete({
                where: {
                    id: employeeId,
                },
            });
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=AdminServices.js.map