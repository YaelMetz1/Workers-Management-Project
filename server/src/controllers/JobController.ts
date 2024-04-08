import JobServices from "../services/JobServices"
import { BaseController } from "./BaseController";
import Job from "../types/job/Job";

export default class JobController extends BaseController<Job>{

    constructor() { 
      super(new JobServices());
    }
}