import { Request, Response } from "express";
import * as adminServices from "../services/AdminServices"

export async function getEmployees(req: Request, res: Response) {
  try {
    const employees = await adminServices.getEmployees();
    if (employees) {
      res.status(200).json(employees);
    } else {
      res.json(); //{ message: "employees not found" }
    }
  } catch (error) {
    res.status(400).json({ Message: "Error getting employees" });
  }
}

export async function addEmployee(req: Request, res: Response) {
  try {
    const employee = await adminServices.addEmployee(req.body);
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ Message: "Error inserting employee" });
  }
}

export async function updateEmployee(req: Request, res: Response) {
  try {
    const updateUser = await adminServices.updateEmployee(req.body);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ Message: "Error updating user" });
  }
}

export async function deleteEmployee(req: Request, res: Response) {
  try {
    const deleteUser = await adminServices.deleteEmployee(+(req.params.id));
  } catch (error) {
    res.status(400).json({ Message: "Error deleting employee" });
  }
}
