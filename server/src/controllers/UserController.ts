import { Request, Response } from "express";
import * as userServices from "../services/UserServices";

//check if user in the db
export async function verification(req: Request, res: Response) {
  try {
    const employee = await userServices.getUser(req.body);

    if (employee) {
      res.status(200).json(employee);
    } else {
      res.json(); //{ message: "employee not found" }
    }
  } catch (err) {
    res.status(400).json({ message: err as string });
  }
}

//An employee is registered in the system
export async function register(req: Request, res: Response) {
  try {
    const updateUser = await userServices.updateUserPassword(req.body);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ Message: "Error inserting user" });
  }
}
