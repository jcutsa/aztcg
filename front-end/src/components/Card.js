import { Card } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function myCard(props) {
  const { name, image, price, inStock, brand, id } = props;
  const navigate = useNavigate();
  const [elevation, setElevation] = useState(3);

  function raiseElevation() {
    setElevation(15);
  }

  function lowerElevation() {
    setElevation(3);
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
          style={{ height: "300px"}}
        />
        <Stack spacing={2}>
          <h2 style={{ marginBottom:"0"}} onClick={handleButtonClick}>{name}</h2>
          <p>${price.toFixed(2)}</p>
          <p>{brand}</p>
          <p style={{ color: inStock ? "green" : "red", fontWeight: "bold" }}>
            {inStock ? "In Stock" : "Out of Stock"}
          </p>

          <div>
            <button
              style={{
                backgroundColor: inStock ? "green" : "gray",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                cursor: inStock ? "pointer" : "default",
              }}
              disabled={!inStock}
            >
              {inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </Stack>
      </Stack>
    </Card>
  );
}
