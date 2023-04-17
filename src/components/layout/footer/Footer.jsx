import React from "react";
import {
  Container,
  Paper,
  Avatar,
  Box,
  Button,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const Footer = () => {


  const RedirectMailTo = () => {
    window.location.href ="https://mail.google.com/mail/?view=cm&fs=1&to=pablohcoronel25@gmail.com"
  }
  const RedirectLinkedin = () => {
    window.location.href ="https://www.linkedin.com/in/pablocoronel25/"
  }
  const DonwloadCV = () => {
  }
  return (
    <Grid container>
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          bgcolor: 'background.paper'
        }}
      >
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Icon>person</Icon>
            </ListItemIcon>
            <ListItemText
              primary="Download my resumee"
              secondary="Get a detailed cv on pdf."
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => RedirectLinkedin()}>
            <ListItemIcon>
              <Icon>work</Icon>
            </ListItemIcon>
            <ListItemText
              primary="Connect with me on Linkedin"
              secondary="You can find me there too."
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon onClick={() => RedirectMailTo()}>
              <Icon>inbox</Icon>
            </ListItemIcon>
            <ListItemText
              primary="Let's chat!"
              secondary="Send me a message and I'll reply soon."
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  );
};

export default Footer;
