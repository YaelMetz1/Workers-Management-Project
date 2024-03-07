import { Container, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import User from "../../types/User";

export default function HomePage() {

  const { user, setUser } = useContext(UserContext);



    return (<Container  maxWidth="xs">
    <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        {(user)? user.name: "error"}
      </Typography>
        <List>
            <ListItem>
              <ListItemText
                primary="Single-line item"
              />
            </ListItem>,
        </List>
    </Grid>
    </Grid>
    </Container>);

}

