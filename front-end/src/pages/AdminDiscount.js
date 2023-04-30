import { 
  FormControlLabel, 
  FormGroup, 
  Checkbox, 
  Divider, 
  DialogContent, 
  DialogActions, 
  Typography,
  Stack,
  Button, 
  Modal, 
  TextField

} 
from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import SingleDiscount from "../components/SingleDiscount";

function AdminDiscount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [DiscountInfo, setDiscountInfo] = useState([]);

  const [name, setname] = useState("");
  const [percentage, setpercentage] = useState("");
  const [active, setactive] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const setDiscountData = (data) => {
    setDiscountInfo((prevData) =>
      prevData.map((discount) => 
        (discount.id === data.id ? data : discount)
      )
    );
  };

  const handleCreateDiscount = (newdiscount) => {
    fetch("http://localhost:8080/api/discount/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newdiscount),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New discount created:", data);
        setDiscountInfo((prevData) => [...prevData, data]);
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteDiscount = (id) => {
    fetch("http://localhost:8080/api/discount/" + {id}, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/discount/getAll")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Getting Object from API:", data);
        setDiscountInfo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div
      style={{
        padding: "24px 48px",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <Stack>
        <h1>Discount Info</h1>
        <Button
          variant="contained"
          onClick={handleModalOpen}
          size="small"
          sx={{ display: "block", mx: "auto", mt: 2 }}
        >
          Create discount
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
            <h2>Create New Discount</h2>
            <DialogContent dividers={true}>
              <FormGroup aria-label="position" row>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                <TextField
                  label="Percentage"
                  variant="outlined"
                  fullWidth
                  type="number"
                  margin="normal"
                  value={percentage}
                  onChange={(e) => setpercentage(e.target.value)}
                />
                <FormControlLabel
                  sx={{margin: 'auto'}}
                  checked={active}
                  control={<Checkbox 
                            onChange= {(e) => setactive(e.target.checked ? 1 : 0)}/>}
                  label="Active"
                  labelPlacement="start"
                />
              </FormGroup>
            </DialogContent>
            <DialogActions
              alignItems="center"
              justifyContent="center"
            >
              <Button onClick={handleModalClose} color="secondary">
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleCreateDiscount({
                    name: name,
                    percentage: percentage,
                    active: active
                  })
                  setname("");
                  setpercentage("");
                  setactive();
                  handleModalClose();
                }}
              >
                Create Discount
              </Button>
            </DialogActions>
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
            <Typography sx={{ width: "25%", backgroundColor: "white" }}>
              Name
            </Typography>
            <Typography sx={{ width: "25%", backgroundColor: "white" }}>
              Percentage
            </Typography>
            <Typography sx={{ width: "25%", backgroundColor: "white" }}>
              Active
            </Typography>
            <Typography sx={{ width: "15%", backgroundColor: "white" }}>
              Modify
            </Typography>
            <Typography sx={{ width: "6%", backgroundColor: "white" }}>
              Delete
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
        {Array.isArray(DiscountInfo) &&
          DiscountInfo.map((discountData) => (
            <SingleDiscount discountData={discountData} setDiscountData={setDiscountData} />
          ))}
      </Stack>
    </div>
  );
}

export default AdminDiscount;