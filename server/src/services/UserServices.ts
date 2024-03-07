import { PrismaClient } from "@prisma/client";

export async function getUser(userdetails: {
  email: string;
  password: string;
}) {
  const prisma = new PrismaClient();
  try {
    const user = prisma.employee.findFirst({
      where: {
        email: userdetails.email,
        password: userdetails.password,
      },
    });
    return user;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateUserPassword(userdetails: {
  email: string;
  password: string;
}) {
  const prisma = new PrismaClient();
  try {
    const user = prisma.employee.update({
      where: {
        email: userdetails.email,
      },
      data: {
        password: userdetails.password,
      },
    });
    return user;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
