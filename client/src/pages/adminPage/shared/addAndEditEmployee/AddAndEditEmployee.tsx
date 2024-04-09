import React, { useCallback, useEffect, useState } from "react";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Dialog,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import * as adminRequests from "../../../../api/AdminRequests";
import User from "../../../../types/Employee";
import * as jobRequests from "../../../../api/JobRequests";
import Job from "../../../../types/Job";

export default function AddandEditEmployee(props: any) {
  const [open, setOpen] = React.useState(true);
  const [jobs, setJobs] = useState<any[]>([]);
  const [job, setJob] = useState<Job>();

  const request: string = props.request;

  const fetchAndSetData = useCallback(async () => {
    const jobs = await jobRequests.getAllJobs();
    setJobs(jobs || []);

    if (request === "edit") {
      const job = await jobRequests.getJob(+props.employee.jobId);
      setJob(job);
    }
  }, []);

  useEffect(() => {
    fetchAndSetData();
  }, []);

  const handleClose = () => {
    setOpen(false);
    props.onClose(alert);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const employeeData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      jobId: job?.id,
      salary: +(formData.get("salary") as string),
      picture: formData.get("picture") as string,
    };

    if (request === "add") {
      const employee: User | undefined = await adminRequests.addEmployee(
        employeeData
      );
    } else if (request === "edit") {
      const employee: User | undefined = await adminRequests.updateEmployee(
        employeeData
      );
    }
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>
          {request === "add" ? "Add New Employee" : "Edit Employee Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            defaultValue={request === "edit" ? props.employee.name : ""}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={request === "edit" ? props.employee.email : ""}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type="phoneNumber"
            fullWidth
            variant="standard"
            defaultValue={request === "edit" ? props.employee.phoneNumber : ""}
          />
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">Job</InputLabel>
            <Select
              id="job"
              name="job"
              label="Job"
              value={
                request === "edit" && job
                  ? `${jobs.findIndex(
                      (j) =>
                        j.title === job.title &&
                        j.department === job.department &&
                        j.location === job.location
                    )}`
                  : ""
              }
            >
              {jobs.map((job, id) => {
                return (
                  <MenuItem key={id} value={id}>
                    {job.title + ", " + job.department + ", " + job.location}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <TextField
            autoFocus
            required
            margin="dense"
            id="salary"
            name="salary"
            label="salary"
            fullWidth
            variant="standard"
            defaultValue={request === "edit" ? props.employee.salary : ""}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="picture"
            name="picture"
            label="picture"
            type="picture"
            fullWidth
            variant="standard"
            defaultValue={request === "edit" ? props.employee.picture : ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Finish</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
