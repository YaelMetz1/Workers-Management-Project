import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Button } from '@mui/material';
import React, { useState } from 'react';
import AddAndEditEmployee from "../addAndEditEmployee/AddAndEditEmployee"
import * as adminRequests from "../../../../api/AdminRequests"

export default function EmployeeCard(props: any) {

  const [dialog, setDialog] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState();
  const [requestAction, setRequestAction] = useState("");

  const handleDelete = async (employee: any) => {
    if (window.confirm(`Are you sure you want to delete ${employee.name}?`)) {
    await adminRequests.deleteEmployee(+(employee.id));
    }
  };

  const handleUpdate = async (employee: any) => {
    setEmployeeDetails(employee);
    setRequestAction("edit");
    setDialog(true);
  };

  const handleToggleDialog = (openAlert: boolean) => {
    setDialog(!dialog);
    setRequestAction("");
   // if (openAlert) {
      // setAlert({ open: true, message: "New employee successfully added" });
      // setTimeout(() => {
      //   setAlert({ open: false, message: "" });
      // }, 5000); // Close the alert after 5 seconds
 //   }
  };

  return (
    <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>

  <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={<Avatar alt={props.employee.name} src={props.employee.picture}/>}
                  title={props.employee.name}
                  subheader={props.employee.jobId}
                />
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  phone: {props.employee.phoneNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  email: {props.employee.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  salary: {props.employee.salary}
                </Typography>
              </CardContent>
              {props.page==="admin"?<Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',                  
                  pr: 2,
                }}
              >
              <Button startIcon={<EditIcon />} onClick={() => handleUpdate(props.employee)}></Button>
              <Button startIcon={<DeleteIcon />} onClick={() => handleDelete(props.employee)}></Button>
              </Box>: null}
    </Card>
    {dialog && <AddAndEditEmployee request={requestAction} employee={employeeDetails} onClose={handleToggleDialog} />}

    </Grid>


  );
}