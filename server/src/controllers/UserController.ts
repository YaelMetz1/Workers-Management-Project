import { Request, Response } from "express";
import * as userServices from "../services/UserServices";

export async function verification(req: Request, res: Response) {
  try {
    const employee = await userServices.getUser(req.body);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.json(); 
    }
  } catch (error) {
    res.status(400).json({error: error});
  }
}

export async function register(req: Request, res: Response) {
  try {
    const updateUser = await userServices.updateUserPassword(req.body);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({error: error});
  }
}
