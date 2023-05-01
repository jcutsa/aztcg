import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function ShoppingCart({
    user,
    removeItem,
    updateQuantity,
    loggedIn,
    setLoggedIn,
}) {
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
            {loggedIn ? (
                <Stack>
                    <h1>Shopping Cart</h1>
                    <Stack
                        direction={"row"}
                        // alignItems="center"
                        // justifyContent="center"
                        sx={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            marginLeft: "165px",
                            width: "1000px",
                        }}
                    >
                        <Typography
                            sx={{ width: "54%", backgroundColor: "white" }}
                        >
                            Product
                        </Typography>
                        <Typography
                            sx={{ width: "15%", backgroundColor: "white" }}
                        >
                            Quantity
                        </Typography>
                        <Typography
                            sx={{ width: "10%", backgroundColor: "white" }}
                        >
                            Price
                        </Typography>
                        <Typography
                            sx={{ width: "10%", backgroundColor: "white" }}
                        >
                            Subtotal
                        </Typography>
                        <Typography
                            sx={{ width: "11%", backgroundColor: "white" }}
                        >
                            Delete
                        </Typography>
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
                        <Stack
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <h1 backgroundColor="green">
                                Total: ${total.toFixed(2)}
                            </h1>
                            <Button
                                sx={{
                                    width: "100px",
                                    height: "50px",
                                    bgcolor: "white",
                                    color: "green",
                                    border: "2px solid green",
                                    "&:hover": {
                                        bgcolor: "green",
                                        color: "white",
                                    },
                                }}
                                component={Link}
                                to="/checkout"
                            >
                                Checkout
                            </Button>
                        </Stack>
                    )}
                </Stack>
            ) : (
                <Typography>Please sign in to view cart</Typography>
            )}
        </div>
    );
}
