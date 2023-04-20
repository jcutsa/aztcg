import { AppBar, Drawer, List, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ClippedDrawer from "../components/ClippedDrawer";
const pages = ["Products", "Pricing", "Blog"];

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "white",
};

function AdminProducts() {
  return (
    <div
      style={{
        padding: "24px 48px",
        textAlign: "center",
        // overflowY: "scroll",
        height: "100vh",
      }}
    >
        <h1>Orders</h1>
    </div>
  );
}

export default AdminProducts;
