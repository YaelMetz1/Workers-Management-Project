import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { grey } from "@mui/material/colors";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      Copyright © Yael W.
      {" " + new Date().getFullYear()}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: grey[200],
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  );
}
