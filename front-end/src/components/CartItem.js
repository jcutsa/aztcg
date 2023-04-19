import { Button, Divider } from "@mui/material";
import { Card } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";

export default function CartItem({ item, removeItem, updateQuantity, total }) {
  const handleRemoveItem = () => {
    removeItem(item.id);
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantitySelected + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.id, item.quantitySelected - 1);
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
          <img src={item.image} style={{ width: "12%" }}></img>

          <Stack style={{ width: "400px", marginTop: "4%" }}>
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
                color: "black",
                backgroundColor:
                  item.quantitySelected === 1 ? "#8B7E74" : "Green",
                height: "20px",
                marginTop: "50%"
              }}
            >
              -
            </Button>
            <p style={{ width: "20px", marginTop: "50%"}}>{item.quantitySelected}</p>
            <Button
              onClick={handleIncrement}
              disabled={item.quantitySelected === item.maxQuantity}
              className={
                item.quantitySelected === item.maxQuantity
                  ? "disabled-button"
                  : ""
              }
              style={{
                color: "black",
                backgroundColor:
                  item.quantitySelected === item.maxQuantity
                    ? "#8B7E74"
                    : "Green",
                height: "20px",
                marginTop: "50%"
              }}
            >
              +
            </Button>
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <p style={{ marginLeft: "100px"}}>${item.price.toFixed(2)}</p>

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
