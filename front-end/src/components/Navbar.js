// import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ShoppingCartCheckoutOutlined from "@mui/icons-material/ShoppingCart.js";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchComponent from "./SearchComponent";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Stack } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { Badge } from "@mui/material";
import { Typography } from '@mui/material';
import PercentIcon from '@mui/icons-material/Percent';

// import { Badge } from "@mui/material";


const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "white",
  variant: "h6",
  align: "center",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.2rem",
};


const theme = createTheme({
  palette: {
    primary: {
      main: "#4B8673",
    },
  },
});
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
export default function Navbar({ user, admin, loggedIn , onSignOut}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isValidLogin, setIsValidLogin] = React.useState(false);

  const totalItems = user.cart.reduce(
    (total, item) => total + item.quantitySelected,
    0
  );

  // if user is an admin add that admin dashboard button
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="auto" sx={{ height: 150 }}>
          <Stack justifyContent="center" alignItems="center">
            {/* Top Stack */}
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              spacing={3}
              style={{ display: "flex", alignItems: "center", margin: 25}}
            >
              <Typography variant="h4" sx={{fontStyle: 'italic'}}>A-Z TCG Marketplace</Typography>
              <SearchComponent></SearchComponent>
              {user.firstName === "" ? (
                <Link style={linkStyle} to="/sign-in" color="inherit">
                  Sign In
                </Link>
              ) : (
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={onSignOut}
                  style={{ marginLeft: "auto", color: "white" }}
                >
                  Sign Out
                </Button>
              )}

              <Link to="/shopping-cart" style={{ marginTop: "5px" }}>
                <Badge color="info" badgeContent={totalItems}>
                  <ShoppingCartCheckoutOutlined style={{ color: "#FFFFFF" }} />
                </Badge>
              </Link>
            </Stack>
            {/* Bottom Stack */}
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              spacing={2}
              style={{ display: "flex", marginTop: "6px" }}
            >
              <Link style={linkStyle} to="/">
                Home
              </Link>
              <Link style={linkStyle} to="/about">
                About
              </Link>
              <Link style={linkStyle} to="/contact">
                Contact
              </Link>
              {user.admin ? (
                <div>
                  <Link
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableelevation="true"
                    onClick={handleClick}
                    style={linkStyle}
                  >
                    Admin
                    <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                  </Link>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem
                      component={Link}
                      to="/admin-products"
                      onClick={handleClose}
                      disableRipple
                    >
                      <EditIcon />
                      Products
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/admin-users"
                      onClick={handleClose}
                      disableRipple
                    >
                      <GroupIcon />
                      Users
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/admin-orders"
                      onClick={handleClose}
                      disableRipple
                    >
                      <ArchiveIcon />
                      Orders
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/admin-discount"
                      onClick={handleClose}
                      disableRipple
                    >
                      <PercentIcon />
                      Discounts
                    </MenuItem>
                  </StyledMenu>
                </div>
              ) : (
                <></>
              )}
            </Stack>
          </Stack>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
