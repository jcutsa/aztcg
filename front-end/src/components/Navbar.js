import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartCheckoutOutlined from "@mui/icons-material/ShoppingCart.js";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const linkStyle = {
  marginRight: "1rem", // Add 1rem of right margin between links
  textDecoration: "none", // Remove underline from links
  color: "white", // Set the default link color
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Set AppBar color to black
    },
  },
});

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
              <Link style={linkStyle} to="/">
                Home
              </Link>
              <Link style={linkStyle} to="/about">
                About
              </Link>
              <Link style={linkStyle} to="/cards">
                Cards
              </Link>
              <Link style={linkStyle} to="/contact">
                Contact
              </Link>
              <Link to="/shopping-cart" style={{ marginTop: "10px"}}>
                <ShoppingCartCheckoutOutlined style={{ color: "#FFFFFF"}} />
              </Link>
              

            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
