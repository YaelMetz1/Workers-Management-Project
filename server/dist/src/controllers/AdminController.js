"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const adminServices = __importStar(require("../services/AdminServices"));
function getEmployees(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employees = yield adminServices.getEmployees();
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
    });
}
exports.getEmployees = getEmployees;
function addEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employee = yield adminServices.addEmployee(req.body);
            res.status(200).json(employee);
        }
        catch (error) {
            res.status(400).json({ Message: "Error inserting employee" });
        }
    });
}
exports.addEmployee = addEmployee;
function updateEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateUser = yield adminServices.updateEmployee(req.body);
            res.status(200).json(updateUser);
        }
        catch (error) {
            res.status(400).json({ Message: "Error updating user" });
        }
    });
}
exports.updateEmployee = updateEmployee;
function deleteEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleteUser = yield adminServices.deleteEmployee(+(req.params.id));
        }
        catch (error) {
            res.status(400).json({ Message: "Error deleting employee" });
        }
    });
}
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=AdminController.js.map