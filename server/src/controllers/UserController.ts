import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

//check if user in the db
export async function verification(req: Request, res: Response) {
  const prisma = new PrismaClient();

  try {
    const employee = await prisma.employee.findFirst({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });

    if (employee) {
      res.status(200).json(employee);
    } else {
      res.json(); //{ message: "employee not found" }
    }
  } catch (err) {
    res.status(400).json({ message: err as string });
  } finally {
    await prisma.$disconnect();
  }
}

//An employee is registered in the system
export async function register(req: Request, res: Response) {
  const prisma = new PrismaClient();
  try {
    const updateUser = await prisma.employee.update({
      where: {
        email: req.body.email,
      },
      data: {
        password: req.body.password,
      },
    });
  } catch (error) {
    res.status(400).json({ Message: "Error inserting user" });
  } finally {
    await prisma.$disconnect();
  }
}
