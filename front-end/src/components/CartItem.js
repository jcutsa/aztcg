import { Button, Divider } from "@mui/material";
import { Card } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CartItem({ item, removeItem, updateQuantity, total }) {
  const navigate = useNavigate();
  const handleRemoveItem = () => {
    removeItem(item.id);
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantitySelected + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.id, item.quantitySelected - 1);
  };

  const handleButtonClick = () => {
    navigate("/card/" + item.id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      key={item.id}
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
        >
          <img
            src={item.image}
            onClick={handleButtonClick}
            style={{ width: "12%", cursor: "pointer" }}
          ></img>

          <Stack
            onClick={handleButtonClick}
            style={{
              width: "400px",
              marginTop: "4%",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <p>{item.name}</p>
            <p>{item.brand}</p>
          </Stack>

          <Stack
            direction={"row"}
            style={{
              backgroundColor: "white",
              height: "40x",
              marginLeft: "20px",
            }}
          >
            <Button
              onClick={handleDecrement}
              disabled={item.quantitySelected === 1}
              className={item.quantitySelected === 1 ? "disabled-button" : ""}
              style={{
                color: item.quantitySelected === 1 ? "White" : "Black",
                backgroundColor:
                  item.quantitySelected === 1 ? "#8B7E74" : "#FF6962",
                height: "20px",
                marginTop: "50%",
              }}
            >
              -
            </Button>
            <p style={{ width: "20px", marginTop: "50%" }}>
              {item.quantitySelected}
            </p>
            <Button
              onClick={handleIncrement}
              disabled={item.quantitySelected === item.maxQuantity}
              className={
                item.quantitySelected === item.maxQuantity
                  ? "disabled-button"
                  : ""
              }
              style={{
                // color: "white",
                color:
                  item.quantitySelected === item.maxQuantity
                    ? "White"
                    : "Black",
                backgroundColor:
                  item.quantitySelected === item.maxQuantity
                    ? "#8B7E74"
                    : "#77DD76",
                height: "20px",
                marginTop: "50%",
              }}
            >
              +
            </Button>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            style={{
              backgroundColor: "white",
              display: "flex",
              width: "100px",
            }}
          >
            <p style={{ marginLeft: "auto", marginRight: "auto" }}>
              ${item.price.toFixed(2)}
            </p>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            style={{
              backgroundColor: "white",
              display: "flex",
              width: "100px",
            }}
          >
            <p style={{ marginLeft: "auto", marginRight: "auto" }}>
              ${(item.price * item.quantitySelected).toFixed(2)}
            </p>
          </Stack>

          <Button
            onClick={handleRemoveItem}
            sx={{
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
            marginBottom: "20px",
            marginTop: "30px",
            width: "1000px",
            mx: "auto",
          }}
        />
      </div>
    </div>
  );
}
