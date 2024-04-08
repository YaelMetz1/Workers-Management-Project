import express from "express";
import AdminController from "../controllers/AdminController";

const adminRoutes = express.Router();
let employeeObject: AdminController = new AdminController();

adminRoutes.get("/getEmployees", employeeObject.getAll);
adminRoutes.post("/addEmployee", employeeObject.create);
adminRoutes.patch("/updateEmployee", employeeObject.update);
adminRoutes.delete("/deleteEmployee/:id", employeeObject.delete);

export default adminRoutes;
