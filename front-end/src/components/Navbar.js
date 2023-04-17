import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartCheckoutOutlined from "@mui/icons-material/ShoppingCart.js";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchComponent from "./SearchComponent";

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "white",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" sx={{ height: 80 }}>
          <Toolbar sx={{ marginTop: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            />

            <Typography
              variant="h6"
              align="center"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link style={linkStyle} to="/">
                Home
              </Link>
              <Link style={linkStyle} to="/about">
                About
              </Link>
              {/* <Link style={linkStyle} to="/cards">
                Cards
              </Link> */}
              <Link style={linkStyle} to="/contact">
                Contact
              </Link>
              <Link to="/shopping-cart" style={{ marginTop: "10px" }}>
                <ShoppingCartCheckoutOutlined style={{ color: "#FFFFFF" }} />
              </Link>
              <SearchComponent />
            </Typography>

            <Link style={linkStyle} to="/sign-in" color="inherit">Sign In</Link>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
