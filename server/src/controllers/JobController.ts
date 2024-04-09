import JobServices from "../services/JobServices"
import { BaseController } from "./BaseController";
import Job from "../types/Job";

export default class JobController extends BaseController<Job> {

  constructor() {
    super(new JobServices());
  }
}