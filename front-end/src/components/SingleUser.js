import {
  Stack,
  Divider,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";

function SingleUser({ userData }) {
  const { id, first_name, last_name, email, admin } = userData;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModifyUser = () => {
    handleOpen();
  };

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
          <Typography
            sx={{ width: "10%", backgroundColor: "white" }}
            onClick={(e) => {
              e.target.contentEditable = true;
              e.target.focus();
            }}
          >
            {id}
          </Typography>
          <Typography
            sx={{
              width: "20%",
              backgroundColor: "white",
              overflowWrap: "break-word",
            }}
            onClick={(e) => {
              e.target.contentEditable = true;
              e.target.focus();
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
            onClick={(e) => {
              e.target.contentEditable = true;
              e.target.focus();
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
            onClick={(e) => {
              e.target.contentEditable = true;
              e.target.focus();
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
            onClick={(e) => {
              e.target.contentEditable = true;
              e.target.focus();
            }}
          >
            {admin ? "Admin" : "User"}
          </Typography>
          <Button
            onClick={handleModifyUser}
            sx={{ width: "10%", backgroundColor: "white" }}
          >
            Edit
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

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Modify User</DialogTitle>
          <DialogContent>
            <Typography>ID: {id}</Typography>
            <Typography>First Name: {first_name}</Typography>
            <Typography>Last Name: {last_name}</Typography>
            <Typography>Email: {email}</Typography>
            <Typography>User Type: {admin ? "Admin" : "User"}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default SingleUser;
