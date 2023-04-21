import { Card } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function myCard(props) {
  const { name, image, price, inStock, brand, id } = props;
  const navigate = useNavigate();
  const [elevation, setElevation] = useState(3);

  function raiseElevation() {
    setElevation(20);
  }

  function lowerElevation() {
    setElevation(5);
  }

  const handleButtonClick = () => {
    navigate("/card/" + id);
  };

  return (
    <Card
      elevation={elevation}
      onMouseEnter={raiseElevation}
      onMouseLeave={lowerElevation}
      sx={{
        cursor: "pointer",
        height: "fit-content",
        width: "500px",
        padding: "5px",
      }}
    >
      <Stack direction={"row"}>
        <img
          onClick={handleButtonClick}
          src={image}
          alt={name}
          style={{ height: "300px" }}
        />
        <Stack spacing={2} onClick={handleButtonClick}>
          <h2 style={{ marginBottom: "0" }} onClick={handleButtonClick}>
            {name}
          </h2>
          <p>${price.toFixed(2)}</p>
          <p>{brand}</p>
          <p style={{ color: inStock ? "green" : "red", fontWeight: "bold" }}>
            {inStock ? "In Stock" : "Out of Stock"}
          </p>
        </Stack>
      </Stack>
    </Card>
  );
}
