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
  FormGroup
} 
from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/discount";

function SingleDiscount({ discountData, setDiscountData}) {
  const { id, name, percentage, active} = discountData;
  let activeText = ""

  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [updatedName, setupdatedName] = useState("");
  const [updatedPercentage, setupdatedPercentage] = useState("");
  const [updatedActive, setupdatedActive] = useState();
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleModifyDiscount = () => {
    handleOpen();
  };
  const handleDeleteDiscount = () => {
    handleOpenDelete();
  };

  function updateDiscountDetails(id_2, name_2, percentage_2, active_2) {
    const discount = {
      id: id_2,
      name: name_2,
      percentage: percentage_2,
      active: active_2 ? 1 : 0,
    };
    axios
      .put(API_URL + "/update", discount)
      .then((response) => {
        console.log(response.data);
        console.log(typeof response.data.active);
        setDiscountData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

  function deleteDiscountDetails(id_2) {
    const discount = { id: id_2};
    axios
    .delete(API_URL + "/delete/" + discount.id)
    .then((response) => {{window.location.reload(false);}})
    .catch((error) => {
      console.log(error);
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
          <Typography sx={{ width: "25%", backgroundColor: "white", position: "center" }}>
            {name}
          </Typography>
          <Typography
            sx={{
              width: "25%",
              backgroundColor: "white",
              overflowWrap: "break-word",
            }}
          >
            {percentage}
          </Typography>
          <Typography
            sx={{
              width: "30%",
              backgroundColor: "white",
              overflowWrap: "break-word",
            }}
          >
            {active === 1 ? activeText = "Active" : activeText = "Not Active"}
          </Typography>
          <Button
            onClick={handleModifyDiscount}
            sx={{ width: "12.5%", backgroundColor: "white" }}
          >
            Edit
          </Button>
          <Button
            onClick={handleDeleteDiscount}
            sx={{ width: "12.5%%", backgroundColor: "white" }}
          >
            Delete
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
          open={openDelete}
          onClose={handleCloseDelete}
          maxWidth="md"
          fullWidth={true}
          sx={{margin: 'auto'}}
        >
          <DialogTitle>Delete Discount</DialogTitle>
          <DialogContent dividers={true} >
            <Typography variant="h6" align="center" >Are you sure you wanna delete discount <b>"{name}"</b>?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDelete} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                deleteDiscountDetails(
                  id
                );
                setupdatedName("");
                setupdatedPercentage("");
                setupdatedActive();
                handleCloseDelete();
              }}
              color="primary"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={true}
        >
          <DialogTitle>Modify discount</DialogTitle>
          <DialogContent dividers={true}>
            <FormGroup aria-label="position" row>
              <TextField
                label={name}
                sx={{margin: 'auto'}}           
                defaultValue={name}
                value={updatedName}
                onChange={(e) => setupdatedName(e.target.value)}
              />
              <TextField
                sx={{margin: 'auto'}}
                label={percentage}
                type="number"
                defaultValue={percentage}
                value={updatedPercentage}
                onChange={(e) => setupdatedPercentage(e.target.value)}
              />
              <FormControlLabel
                sx={{margin: 'auto'}}
                control={<Checkbox 
                          defaultChecked={Boolean(active === 1 ? true: false)}
                          onChange= {e => setupdatedActive(e.target.checked)}/>}
                label="Active"
                labelPlacement="start"
              />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                updateDiscountDetails(
                  id,
                  updatedName,
                  updatedPercentage,
                  updatedActive,
                );
                setupdatedName("");
                setupdatedPercentage("");
                setupdatedActive();
                handleClose();
              }}
              color="primary"
            >
              Update discount
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
export default SingleDiscount;