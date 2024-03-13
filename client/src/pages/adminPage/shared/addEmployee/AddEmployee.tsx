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
import * as adminRequests from "../../../../api/AdminRequests"
import User from "../../../../types/User";

export default function AddEmployee(props: any) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };


  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            console.log("xcvbnm,");
            const employee: User|undefined=await adminRequests.addEmployee({
                name: formData.get("name") as string,
                email: formData.get("email") as string,
                phoneNumber: formData.get("phoneNumber") as string,
                jobTitle: formData.get("jobTitle") as string,
                salary: +(formData.get("salary") as string),
              });
              console.log(employee);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add New Employee</DialogTitle>
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
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="jobTitle"
            name="jobTitle"
            label="Job Title"
            fullWidth
            variant="standard"
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
