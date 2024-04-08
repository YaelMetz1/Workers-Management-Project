import useCustomNavigate from "../../hooks/UseNavigate";
import User from "../../types/User";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import * as userRequesrts from "../../api/UserRequests";
import { Alert, Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  const navigate = useCustomNavigate();

  const { setUser } = useContext(UserContext);

  const [emailAlert, setEmailAlert] = useState({
    open: false,
    message: ''
  });
  const [passwordAlert, setPasswordAlert] = useState({
    open: false,
    message: ''
  });
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setEmailAlert({open:false, message:''});
    setPasswordAlert({open:false, message:''});

    try{
    const userData: User | undefined = await userRequesrts.checkUserExists({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (!userData) {
      if (
        window.confirm(
          "You don't have an account yet. do you want to create a new one?"
        )
      ) {
        navigate("/Register");
      }
    } else {
      setUser((userData as User) ?? null);
      navigate("/Home");
    }}
    catch(error: any){
      console.error(error.response);
      if(error.response?.data?.name === 'ZodError') {
      setEmailAlert({open: true, message: error.response.data.issues[0].message});
      setPasswordAlert({open: true, message: error.response.data.issues[1].message});

      console.error(error);
      }
    }
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
        {emailAlert.open && <Alert severity="warning">{emailAlert.message}</Alert>}
        {passwordAlert.open && <Alert severity="warning">{passwordAlert.message}</Alert>}

        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/Register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
