import prisma from "../db/Client"

export async function getUser(userdetails: {
  email: string;
  password: string;
}) {
    const user = prisma.employee.findFirst({
      where: {
        email: userdetails.email,
        password: userdetails.password,
      },
    });
    return user;

}

export async function updateUserPassword(userdetails: {
  email: string;
  password: string;
}) {
    const user = prisma.employee.update({
      where: {
        email: userdetails.email,
      },
      data: {
        password: userdetails.password,
      },
    });
    return user
}
