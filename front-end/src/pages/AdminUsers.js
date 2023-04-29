import { Checkbox, Divider, FormControlLabel } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import SingleUser from "../components/SingleUser";
import { Button, Modal, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "white",
};

function AdminUsers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [UserInfo, setUserInfo] = useState([]);

  // Data for API
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [permissionLevel, setPermissionLevel] = useState(1);
  const [admin, setAdmin] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setUsername("");
    setPassword("");
    setEmail("");
    setAdmin(false);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    setShowPassword(true);
  };

  const handleMouseUp = (event) => {
    event.preventDefault();
    setShowPassword(false);
  };

  // Function to handle modal open
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const handleModalClose = () => {
    resetForm();
    setIsModalOpen(false);
  };

  const setUserData = (data) => {
    // Update the userInfo state with the updated data
    setUserInfo((prevData) =>
      prevData.map((user) => (user.id === data.id ? data : user))
    );
  };

  // Function to create a new user
  const handleCreateUser = (newUser) => {
    console.log("Creating new user with data:", newUser);
    axios
      .post("http://localhost:8080/api/user/create", {
        ...newUser,
        permission_level: 0,
        admin: !!newUser.admin, // convert admin to boolean
      })
      .then((response) => {
        console.log("Created user:", response.data);
        setUserInfo((prevData) => [...prevData, response.data]);
        handleModalClose();
        resetForm(); // reset the form after the user is created
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleRemoveUser = (id) => {
    axios
      .delete(`http://localhost:8080/api/user/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        setUserInfo((prevData) => prevData.filter((user) => user.id !== id));
        window.alert(`User with ID ${id} has been deleted.`);
      })
      .catch((error) => {
        console.log(error);
      });
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
    <div
      style={{
        padding: "24px 48px",
        // paddingBottom: "20px",
        textAlign: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Stack style={{ backgroundColor: "white", paddingBottom: "100px" }}>
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onMouseDown={handleMouseDown}
                      onMouseUp={handleMouseUp}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={admin}
                  onChange={(e) => setAdmin(e.target.checked ? 1 : 0)}
                />
              }
              label="Admin"
            />

            <Button
              variant="contained"
              onClick={() =>
                handleCreateUser({
                  // id: 12,
                  first_name: firstName,
                  last_name: lastName,
                  username: username,
                  password: password,
                  email: email,
                  permission_level: permissionLevel,
                })
              }
            >
              Create User
            </Button>
          </div>
        </Modal>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
            paddingTop: "20px",
          }}
        >
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent="space-between"
            style={{ backgroundColor: "white", width: "1000px" }}
          >
            <Typography sx={{ width: "5%", backgroundColor: "white" }}>
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
            <Button
              sx={{
                width: "10%",
                backgroundColor: "white",
                textTransform: "capitalize",
                color: "black",
                pointerEvents: "none",
                fontFamily: "Arial",
                fontSize: "16px",
              }}
            >
              Modify
            </Button>
            <Button
              sx={{
                width: "5%",
                backgroundColor: "white",
                textTransform: "capitalize",
                color: "black",
                pointerEvents: "none",
                fontFamily: "Arial",
                fontSize: "16px",
              }}
            >
              Delete
            </Button>
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
          UserInfo.map((userData) => (
            <SingleUser
              key={userData.id}
              userData={userData}
              setUserData={setUserData}
              handleRemoveUser={handleRemoveUser}
            />
          ))}
      </Stack>
    </div>
  );
}

export default AdminUsers;
