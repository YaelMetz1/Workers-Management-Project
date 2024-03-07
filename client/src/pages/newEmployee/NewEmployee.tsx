import React from "react";
import {
  FormLabel,
  Box,
  Button,
  Container,
  CssBaseline,
  FormGroup,
  Input,
  TextField,
  Typography,
  RadioGroup,
} from "@mui/material";
import * as adminRequests from "../../api/AdminRequests"
import useCustomNavigate from "../../hooks/UseNavigate";

export default function NewEmployee() {
    const navigate = useCustomNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    await adminRequests.addEmployee({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        jobTitle: formData.get("jobTitle") as string,
        salary: +(formData.get("salary") as string),
      });
      navigate("/Admin");

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Typography component="h1" variant="h5">
          Add Employee
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            autoComplete="phoneNumber"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="jobTitle"
            label="Job Title"
            name="jobTitle"
            autoComplete="jobTitle"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="salary"
            label="Salary"
            name="salary"
            autoComplete="salary"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Employee
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
