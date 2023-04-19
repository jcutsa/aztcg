import { AppBar, Drawer, List, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ClippedDrawer from "../components/ClippedDrawer";
const pages = ["Products", "Pricing", "Blog"];
// import CardList from "../components/CardList";
const linkStyle = {
    marginRight: "1rem",
    textDecoration: "none",
    color: "white",
  };

function AdminDashboard() {
  return (
    <div style={{ padding: "24px 48px", textAlign: "center", backgroundColor: "yellow"}}>
      <div style={{ backgroundColor: "Green"}}>
        <h1>Admin Dashboard</h1>
        <Stack direction="row" justifyContent={"space-evenly"} style={{ color: "White"}}>
          <Link style={linkStyle} to="/admin-products" >Products</Link>
          <Link style={linkStyle}>Users</Link>
          <Link style={linkStyle}>Orders</Link>
        </Stack>
      </div>

    </div>
  );
}

export default AdminDashboard;
