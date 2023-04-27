import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar, Drawer, List, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ClippedDrawer from "../components/ClippedDrawer";
import SingleUser from "../components/SingleUser";
// import { UserInfo } from "../assetts/UserInfo";
import { Button, Modal, TextField } from "@mui/material";
import { useState, useEffect } from "react";

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "white",
};

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

  const [UserInfo, setUserInfo] = useState();

  const setUserData = (data) => {
    // Update the userInfo state with the updated data
    setUserInfo((prevData) => prevData.map((user) => user.id === data.id ? data : user));
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/user/getAll")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Getting Object from API:", data);
        setUserInfo(data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);

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
        {/* <Stack
          direction={"row"}
          style={{ backgroundColor: "white", width: "1000px" }}
          alignItems="center"
          justifyContent="space-between"
        ></Stack> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
            paddingTop: "20px"
          }}
        >
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent="space-between"
            style={{ backgroundColor: "white", width: "1000px" }}
          >
            <Typography sx={{ width: "10%", backgroundColor: "white" }}>
              ID
            </Typography>
            <Typography sx={{ width: "20%", backgroundColor: "white" }}>
              First Name
            </Typography>
            <Typography sx={{ width: "20%", backgroundColor: "white" }}>
              Last Name
            </Typography>
            <Typography sx={{ width: "20%", backgroundColor: "white" }}>
              Email
            </Typography>
            <Typography sx={{ width: "20%", backgroundColor: "white" }}>
              Permissions
            </Typography>
            <Typography sx={{ width: "10%", backgroundColor: "white" }}>
              Modify
            </Typography>
          </Stack>
        </div>
        <Divider
          sx={{
            marginBottom: "8px",
            marginTop: "-10px",
            width: "1000px",
            mx: "auto",
          }}
        />
        {Array.isArray(UserInfo) &&
          UserInfo.map((userData) => <SingleUser userData={userData} setUserData={setUserData} />)}
        {/* Button to open modal */}

        {/* Modal to create a new user */}
      </Stack>
    </div>
  );
}

export default AdminUsers;
