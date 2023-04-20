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
  const { firstName, lastName, email, admin } = userData;

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
        }}
      >
        <Stack
          direction={"row"}
          style={{ backgroundColor: "white", width: "1000px" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            sx={{ flex: "0 0 22.5%" }}
            onClick={(e) => {
              e.target.contentEditable = true;
              e.target.focus();
            }}
          >
            {firstName}
          </Typography>
          <Typography
            sx={{ flex: "0 0 22.5%" }}
            onClick={(e) => {
              e.target.contentEditable = true;
              e.target.focus();
            }}
          >
            {lastName}
          </Typography>
          <Typography
            sx={{ flex: "0 0 22.5%" }}
            onClick={(e) => {
              e.target.contentEditable = true;
              e.target.focus();
            }}
          >
            {email}
          </Typography>
          <Typography
            sx={{ flex: "0 0 22.5%" }}
            onClick={(e) => {
              e.target.contentEditable = true;
              e.target.focus();
            }}
          >
            {admin ? "Admin" : "User"}
          </Typography>
          <Button onClick={handleModifyUser} sx={{ flex: "0 0 10%" }}>
            Modify
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
            <Typography>First Name: {firstName}</Typography>
            <Typography>Last Name: {lastName}</Typography>
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
