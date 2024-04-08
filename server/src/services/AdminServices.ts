import prisma from "../db/Client"
import Employee from "../types/employee/Employee";
import BaseService from "./BaseService"

export default class AdminServices extends BaseService<Employee>{

  constructor() { 
      super(prisma.employee);
  }
}