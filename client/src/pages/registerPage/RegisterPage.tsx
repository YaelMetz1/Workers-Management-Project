import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import * as userRequests from "../../api/UserRequests";
import useCustomNavigate from "../../hooks/UseNavigate";
import { useQuery } from "react-query";

export default function RegisterPage() {
  const navigate = useCustomNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
console.log({
  email: formData.get("email") as string,
  password: formData.get("password") as string,
});
    try {
      await userRequests.register({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      });
      navigate("/");
    } catch (error) {
      console.error("Error registering:", error);
    }

    // useQuery('', () => userRequesrts.register({
    //   email: formData.get('email') as string,
    //   password: formData.get('password') as string,
    // }));

    // navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

// function useQuery(arg0: string, arg1: () => Promise<import("../../types/User").default | undefined>): { error: any; data: any; } {
//   throw new Error("Function not implemented.");
// }

