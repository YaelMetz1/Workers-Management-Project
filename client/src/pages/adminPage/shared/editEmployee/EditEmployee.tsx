import React from "react"
import { DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Dialog } from "@mui/material";
import * as adminRequests from "../../../../api/AdminRequests"


export default function EditEmployee(props: any){

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
          component: 'form',
          onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            await adminRequests.updateEmployee({
              name: formData.get("name") as string,
              email: formData.get("email") as string,
              phoneNumber: formData.get("phoneNumber") as string,
              jobTitle: formData.get("jobTitle") as string,
              salary: +(formData.get("salary") as string),
            });
          handleClose();
          },
        }}
      >
<DialogTitle>Edit Employee Details</DialogTitle>
    <DialogContent>
      <DialogContentText>
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        name="name"
        type="text"
        defaultValue={props.user.name}
        fullWidth
        variant="standard"
      />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            defaultValue={props.user.email}
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            defaultValue={props.user.phoneNumber}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="jobTitle"
            name="jobTitle"
            type="text"
            defaultValue={props.user.jobTitle}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="salary"
            name="salary"
            type="text"
            defaultValue={props.user.salary}
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