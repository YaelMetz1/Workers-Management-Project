import React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Dialog,
} from "@mui/material";
import * as adminRequests from "../../../../api/AdminRequests";
import User from "../../../../types/User";

export default function AddEmployee(props: any) {
  const [open, setOpen] = React.useState(true);
 // const [alert, setAlert] = React.useState(false);

  const request: string = props.request;

  const handleClose = () => {
   // setOpen(false);
    props.onClose(alert);
  };

  const handleSubmit=async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const employeeData= {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    jobId: +(formData.get("jobId") as string),
    salary: +(formData.get("salary") as string)}

    if(request==="add"){
    const employee: User | undefined = await adminRequests.addEmployee(employeeData);
    } else if(request==="edit"){
    const employee: User | undefined = await adminRequests.updateEmployee(employeeData);
    }
    //setAlert(true);
    handleClose();
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit
        }}
      >
        <DialogTitle>{request==="add"? "Add New Employee": "Edit Employee Details"}</DialogTitle>
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
            defaultValue={request==="edit"? props.employee.name: ""}
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
            defaultValue={request==="edit"? props.employee.email: ""}
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
            defaultValue={request==="edit"? props.employee.phoneNumber: ""}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="jobId"
            name="jobId"
            label="Job Id"
            fullWidth
            variant="standard"
            defaultValue={request==="edit"? props.employee.jobId: ""}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="salary"
            name="salary"
            label="salary"
            fullWidth
            variant="standard"
            defaultValue={request==="edit"? props.employee.salary: ""}
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
