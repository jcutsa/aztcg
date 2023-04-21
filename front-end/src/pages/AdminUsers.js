import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar, Drawer, List, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ClippedDrawer from "../components/ClippedDrawer";
import SingleUser from "../components/SingleUser";
import { UserInfo } from "../assetts/UserInfo";

const pages = ["Products", "Pricing", "Blog"];

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "white",
};

import { Button, Modal, TextField } from "@mui/material";
import { useState } from "react";

function AdminUsers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to create a new user
  const handleCreateUser = () => {
    // TODO: Implement code to create a new user
  };

  // Function to handle modal open
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    // Existing code
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
        <Button
  variant="contained"
  onClick={handleModalOpen}
  size="small"
  sx={{ display: "block", mx: "auto", mt: 2 }}
>
  Create User
</Button>

        <Modal open={isModalOpen} onClose={handleModalClose}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "4px",
            }}
          >
            <h2>Create New User</h2>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Permissions"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" onClick={handleCreateUser}>
              Create User
            </Button>
          </div>
        </Modal>
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
        {/* Button to open modal */}

        {/* Modal to create a new user */}
      </Stack>
    </div>
  );
}

export default AdminUsers;
