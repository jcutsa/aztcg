import React from "react";

export default function Card(props) {
  const { name, image, price } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      <img src={image} alt={name} style={{ width: "200px", height: "auto" }} />
    </div>
  );
}
