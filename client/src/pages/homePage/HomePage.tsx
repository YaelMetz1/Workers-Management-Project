import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {
  Card,
  CardContent,
  Typography
} from "@mui/material";
import useCustomNavigate from "../../hooks/UseNavigate";

export default function HomePage() {
  const navigate = useCustomNavigate();

  const { user} = useContext(UserContext);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          Name: {user?.name}
        </Typography>
        <Typography variant="body2">Email: {user?.email}</Typography>
        <Typography variant="body2">
          Phone Number: {user?.phoneNumber}
        </Typography>
        <Typography variant="body2">Job Title: {user?.jobTitle}</Typography>
        <Typography variant="body2">Salary: {user?.salary}</Typography>
        {(user?.isAdmin)? <button onClick={() => {navigate("/Admin")}}>
          see all employess
        </button>: null}
      </CardContent>
    </Card>
  );
}
