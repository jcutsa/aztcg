import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar, Drawer, List, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ClippedDrawer from "../components/ClippedDrawer";
import SingleUser from "../components/SingleUser";
import {UserInfo} from "../assetts/UserInfo";

const pages = ["Products", "Pricing", "Blog"];

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "white",
};

function AdminUsers() {
  return (
    <div
      style={{
        padding: "24px 48px",
        textAlign: "center",
        // overflowY: "scroll",
        height: "100vh",
      }}
    >
      <Stack>
        <h1>User Info</h1>
        <Stack
          direction={"row"}
          // alignItems="center"
          // justifyContent="center"
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "165px",
            width: "1000px",
          }}
        >
          <Typography sx={{ width: "22.5%", backgroundColor: "white" }}>
            First Name
          </Typography>
          <Typography sx={{ width: "22.5%", backgroundColor: "white" }}>
            Last Name
          </Typography>
          <Typography sx={{ width: "22.5%", backgroundColor: "white" }}>
            Email
          </Typography>
          <Typography sx={{ width: "22.5%", backgroundColor: "white" }}>
            Permissions
          </Typography>
          <Typography sx={{ width: "10%", backgroundColor: "white" }}>
            Modify
          </Typography>
        </Stack>
        <Divider
          sx={{
            marginBottom: "8px",
            marginTop: "-10px",
            width: "1000px",
            mx: "auto",
          }}
        />
        {Array.isArray(UserInfo) &&
          UserInfo.map((userData) => <SingleUser userData={userData} />)}
      </Stack>
    </div>
  );
}

export default AdminUsers;
