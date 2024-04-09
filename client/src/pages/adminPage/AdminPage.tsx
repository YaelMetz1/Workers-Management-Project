import React, { useCallback, useEffect, useState } from "react";
import * as adminRequests from "../../api/AdminRequests";
import {
  Snackbar,
  Alert,
  Button,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import EmployeeCard from "./shared/employeeCard/EmployeeCard";
import AddIcon from "@mui/icons-material/Add";
import AddAndEditEmployee from "./shared/addAndEditEmployee/AddAndEditEmployee";
import BaseLayout from "../../baseLayout/BaseLayout";

export default function AdminPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [dialog, setDialog] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState();
  const [requestAction, setRequestAction] = useState("");
  const [alert, setAlert] = useState({ open: false, message: "" });

  const fetchAndSetData = useCallback(async () => {
    const data = await adminRequests.getAllEmployees();
    setRows(data || []);
  }, []);

  useEffect(() => {
    fetchAndSetData();
  }, [rows]);

  const handleAdd = useCallback(async (row: any) => {
    setRequestAction("add");
    setDialog(true);
  }, []);

  const handleToggleDialog = (openAlert: boolean) => {
    setDialog(!dialog);
    setRequestAction("");
  };

  return (
    <BaseLayout>
      <Container
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" color="text.primary">
            Employees
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {rows.map((employee, index) => (
            <EmployeeCard key={index} page="admin" employee={employee} />
          ))}
        </Grid>
        <Button startIcon={<AddIcon />} onClick={handleAdd}>
          Add Employee
        </Button>
        {dialog && (
          <AddAndEditEmployee
            request={requestAction}
            employee={employeeDetails}
            onClose={handleToggleDialog}
          />
        )}

        {
          <Snackbar open={alert.open} autoHideDuration={5000}>
            <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
              {alert.message}
            </Alert>
          </Snackbar>
        }
      </Container>
    </BaseLayout>
  );
}
