import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { grey } from '@mui/material/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" >
      Copyright © Yael W. 
      {" " + new Date().getFullYear()}
    </Typography>
  );
}


export default function Footer() {
  return (
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: grey[200],
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
  );
}