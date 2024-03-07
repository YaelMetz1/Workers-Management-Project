import { PrismaClient } from "@prisma/client";

export async function getEmployees() {
  const prisma = new PrismaClient();
  try {
    const employees = await prisma.employee.findMany();
    return employees;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function addEmployee(employeeData: {
  name: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  salary: number;
}) {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.employee.create({
      data: {
        name: employeeData.name,
        email: employeeData.email,
        phoneNumber: employeeData.phoneNumber,
        jobTitle: employeeData.jobTitle,
        salary: employeeData.salary,
      },
    });
    return user;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateEmployee(employeeData: {
  id: number,
  name: string,
  email: string,
  password: string,
  phoneNumber: string,
  jobTitle: string,
  salary: number,
  isAdmin: boolean
}) {
  const prisma = new PrismaClient();
  try {
    const updateUser = await prisma.employee.update({
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
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteEmployee(employeeId: number) {
  const prisma = new PrismaClient();
  try {
    const deleteUser = await prisma.employee.delete({
      where: {
        id: employeeId,
      },
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
