import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

export default function ShoppingCart({ user, removeItem, updateQuantity }) {
  const { cart } = user;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let temp_total = 0;
    cart.forEach((item) => (temp_total = temp_total + item.totalPrice));
    console.log(temp_total);
    setTotal(temp_total);
  }, [cart]);

  return (
    <div
      style={{
        padding: "24px 48px",
        textAlign: "center",
        // overflowY: "scroll",
        height: "100vh",
      }}
    >
      <Stack>
        <h1>Shopping Cart</h1>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "150px",
            width: "1000px",
          }}
        >
          <h3 style={{ width: "500px", backgroundColor: "white" }}>Product</h3>
          <h3 style={{ width: "150px", backgroundColor: "white" }}>Quantity</h3>
          <h3 style={{ width: "250px", backgroundColor: "white" }}>Price</h3>
        </Stack>
        <Divider
          sx={{
            marginBottom: "20px",
            marginTop: "-10px",
            width: "1000px",
            mx: "auto",
          }}
        />

        {cart.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
            total={item.totalPrice}
          />
        ))}
        {total === 0.0 ? (
          <h1>Shopping Cart is empty</h1>
        ) : (
          <h1>Total: ${total.toFixed(2)}</h1>
        )}
      </Stack>
    </div>
  );
}
