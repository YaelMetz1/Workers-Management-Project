import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {
  Button,
  Card,
  CardContent,
  Container
} from "@mui/material";
import useCustomNavigate from "../../hooks/UseNavigate";
import EmployeeCard from "../adminPage/shared/employeeCard/EmployeeCard"

export default function HomePage() {
  const navigate = useCustomNavigate();

  const {user} = useContext(UserContext);

  return (
    <Container
    sx={{
      pt: { xs: 4, sm: 12 },
      pb: { xs: 8, sm: 16 },
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: { xs: 3, sm: 6 },
    }}
  >
  <EmployeeCard  page="home" employee={user}/>

      {(user?.isAdmin)? <Button onClick={() => {navigate("/Admin")}}>
        see all employess
      </Button>: null}
      </Container>
  );
}
