import express from "express";
import * as adminController from "../controllers/AdminController";

const adminRoutes = express.Router();

adminRoutes.get("/getEmployees", adminController.getEmployees);
adminRoutes.post("/addEmployee", adminController.addEmployee);
adminRoutes.patch("/updateEmployee", adminController.updateEmployee);
adminRoutes.delete("/deleteEmployee/:id", adminController.deleteEmployee);

export default adminRoutes;
