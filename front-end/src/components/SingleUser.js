import {
  Stack,
  Divider,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Checkbox,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

// const API_URL = "http://localhost:8080/api/user/update";

// function SingleUser({ userData, setUserData }) {

function SingleUser({ userData, setUserData, handleRemoveUser }) {
  // const { id, first_name, last_name, email, admin } = userData;
  const { id, first_name, last_name, email, permission_level } = userData;
  const [open, setOpen] = useState(false);

  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedAdmin, setUpdatedAdmin] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setUpdatedFirstName(first_name);
    setUpdatedLastName(last_name);
    setUpdatedEmail(email);
    setUpdatedAdmin(permission_level === 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModifyUser = () => {
    handleOpen();
  };
  function updateUserDetails(id, firstName, lastName, email, isAdmin) {
    const user = {
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      permission_level: isAdmin ? 1 : 0, // use permission_level instead of isAdmin
    };

    axios
      .put("http://localhost:8080/api/user/update", user)
      .then((response) => {
        console.log(response.data);
        // Update state values here
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
        // Handle error here
      });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "5px",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          style={{ backgroundColor: "white", width: "1000px" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography sx={{ width: "5%", backgroundColor: "white" }}>
            {id}
          </Typography>
          <Typography
            sx={{
              width: "20%",
              backgroundColor: "white",
              overflowWrap: "break-word",
            }}
          >
            {first_name}
          </Typography>
          <Typography
            sx={{
              width: "20%",
              backgroundColor: "white",
              overflowWrap: "break-word",
            }}
          >
            {last_name}
          </Typography>
          <Typography
            sx={{
              width: "20%",
              backgroundColor: "white",
              overflowWrap: "break-word",
            }}
          >
            {email}
          </Typography>
          <Typography
            sx={{
              width: "20%",
              backgroundColor: "white",
              overflowWrap: "break-word",
            }}
          >
            {permission_level == 1 ? "Admin" : "User"}
          </Typography>
          <Button
            onClick={handleModifyUser}
            sx={{ width: "10%", backgroundColor: "white" }}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleRemoveUser(id)}
            sx={{
              width: "5%",
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "#ff5722",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease-in-out",
              marginLeft: "auto",
            }}
          >
            X
          </Button>
        </Stack>
        <Divider
          sx={{
            marginBottom: "8px",
            marginTop: "10px",
            width: "1000px",
            mx: "auto",
          }}
        />
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth={true}
        >
          <DialogTitle>Modify User</DialogTitle>
          <DialogContent dividers={true}>
            <Typography variant="subtitle1">User Details</Typography>
            <Typography variant="body1">
              <strong>ID:</strong> {id}
            </Typography>
            <TextField
              label="First Name"
              placeholder={first_name}
              value={updatedFirstName}
              onChange={(e) => setUpdatedFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              placeholder={last_name}
              value={updatedLastName}
              onChange={(e) => setUpdatedLastName(e.target.value)}
            />
            {/* <InputLabel shrink={updatedEmail !== ""}>{email}</InputLabel> */}
            <TextField
              label="Email"
              placeholder={email}
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={updatedAdmin}
                  onChange={(e) => setUpdatedAdmin(e.target.checked)}
                />
              }
              label="Admin"
              style={{ paddingLeft: "20px" }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                updateUserDetails(
                  id,
                  updatedFirstName,
                  updatedLastName,
                  updatedEmail,
                  updatedAdmin
                );
                setUpdatedFirstName("");
                setUpdatedLastName("");
                setUpdatedEmail("");
                setUpdatedAdmin(false);
                handleClose();
              }}
              color="primary"
            >
              Update User
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default SingleUser;
