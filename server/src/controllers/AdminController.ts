import AdminServices from "../services/AdminServices"
import { BaseController } from "./BaseController";
import Employee from "../types/Employee";

export default class JobController extends BaseController<Employee>{

  constructor() { 
    super(new AdminServices());
  }
}