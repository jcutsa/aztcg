import React from "react";

export default function Card(props) {
  const { name, image, price, inStock, brand } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      <p style={{ color: inStock ? "green" : "red", fontWeight: "bold" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <p>{brand}</p>
      <img
        src={image}
        alt={name}
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}
