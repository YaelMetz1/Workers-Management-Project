import prisma from "../Client"

export async function getEmployees() {
  const employees = await prisma.employee.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return employees;
}

export async function addEmployee(employeeData: {
  name: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  salary: number;
}) {
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
}

export async function updateEmployee(employeeData: {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  jobTitle: string;
  salary: number;
  isAdmin: boolean;
}) {
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
  
}

export async function deleteEmployee(employeeId: number) {
    const deleteUser = await prisma.employee.delete({
      where: {
        id: employeeId,
      },
    });

}
