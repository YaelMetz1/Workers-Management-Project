import express from "express";
import JobController from "../controllers/JobController";

const jobRoutes = express.Router();
const jobObject: JobController = new JobController();

jobRoutes.get("/getJob/:id", jobObject.getById);
jobRoutes.get("/getJobs", jobObject.getAll);
jobRoutes.post("/addJob", jobObject.create);
jobRoutes.patch("/updateJob", jobObject.update);
jobRoutes.delete("/deleteJob/:id", jobObject.delete);

export default jobRoutes;
