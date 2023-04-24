import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    background: "#F0F0F0",
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  "& .MuiListItemText-root": {
    textAlign: "center",
    color: theme.palette.primary.main,
  },
}));

export default function ClippedDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Toolbar />
      <StyledDrawer variant="persistent" anchor="left" open={open}>
        <List>
          <StyledListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </StyledListItem>
          <StyledListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Products" />
          </StyledListItem>
          <StyledListItem button onClick={handleDrawerClose}>
            <ListItemText primary="About" />
          </StyledListItem>
          <StyledListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Contact" />
          </StyledListItem>
        </List>
      </StyledDrawer>
    </>
  );
}
