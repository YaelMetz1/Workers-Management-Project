import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export async function getEmployees(req: Request, res: Response) {
  const prisma = new PrismaClient();
  try {
    const employees = await prisma.employee.findMany();
    if (employees) {
      res.status(200).json(employees);
    } else {
      res.json(); //{ message: "employees not found" }
    }
  } catch (error) {
    res.status(400).json({ Message: "Error getting employees" });
  } finally {
    await prisma.$disconnect();
  }
}

export async function addEmployee(req: Request, res: Response) {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.employee.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        jobTitle: req.body.jobTitle,
        salary: req.body.salary,
      },
    });
  } catch (error) {
    res.status(400).json({ Message: "Error inserting employee" });
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateEmployee(req: Request, res: Response) {
  const prisma = new PrismaClient();
  try {
    const updateUser = await prisma.employee.update({
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
  } catch (error) {
    res.status(400).json({ Message: "Error updating user" });
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteEmployee(req: Request, res: Response) {
  const prisma = new PrismaClient();
  try {
    const deleteUser = await prisma.employee.delete({
      where: {
        id: +(req.params.id),
      },
    });
  } catch (error) {
    res.status(400).json({ Message: "Error deleting employee" });
  } finally {
    await prisma.$disconnect();
  }
}
