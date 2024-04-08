import prisma from "../db/Client"
import Job from "../types/job/Job";
import  BaseService  from "./BaseService";

export default class JobServices extends BaseService<Job>{

    constructor() { 
        super(prisma.job);
    }
}