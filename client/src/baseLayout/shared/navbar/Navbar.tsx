import React,  { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UserContext } from "../../../context/UserContext";
import useCustomNavigate from "../../../hooks/UseNavigate";
import LogoutIcon from '@mui/icons-material/Logout';

export default function NavBar() {

    const navigate = useCustomNavigate();
    const { setUser } = useContext(UserContext);

    const handleLogOut=()=>{
        setUser(null);
        navigate("/");
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employees Website
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>
          <LogoutIcon/> Log-out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}