import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cards from "./pages/Cards";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ShoppingCart from "./pages/ShoppingCart";
import SingleCard from "./pages/SingleCard";
import Checkout from "./pages/Checkout";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword.js";
import AdminLogin from "./pages/AdminLogin.js";
import SignUp from "./pages/SignUp.js";
import AdminDashboard from "./pages/AdminDashboard.js"; // import the admin dashboard component
import AdminProducts from "./pages/AdminProducts.js"; // import the admin dashboard component
import AdminUsers from "./pages/AdminUsers.js"; // import the admin dashboard component
import AdminOrders from "./pages/AdminOrders.js"; // import the admin dashboard component
import AdminProductEdit from "./pages/AdminProductEdit.js";
// import handleCreateUser from "./pages/AdminUsers";

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    cart: [],
    admin: false,
    total: 0,
  });

  const handleSignOut = () => {
    setLoggedIn(false);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      cart: [],
      admin: false,
      total: 0,
    });
  };

  const removeItem = (id) => {
    setUser((prevUser) => ({
      ...prevUser,
      cart: prevUser.cart.filter((item) => item.id !== id),
    }));
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = user.cart.map((item) => {
      if (item.id === itemId) {
        const updatedItem = { ...item, quantitySelected: newQuantity };
        updatedItem.totalPrice =
          updatedItem.price * updatedItem.quantitySelected;
        return updatedItem;
      }
      return item;
    });
    const newTotal = updatedCartItems.reduce(
      (total, item) => total + item.totalPrice,
      0
    );
    setUser({
      ...user,
      cart: updatedCartItems,
      total: newTotal,
    });
  };

  return (
    <BrowserRouter>
      <Navbar user={user} onSignOut={handleSignOut} />

      <div>
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                user={user}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
                total={user.total}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path="/card/:cardId"
            element={<SingleCard setUser={setUser} />}
          />

          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/sign-in"
            element={
              <SignIn
                user={user}
                setUser={setUser}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/admin-login"
            element={<AdminLogin user={user} setUser={setUser} />}
          />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-products" element={<AdminProducts />} />
          <Route path="/admin-product-edit" element={<AdminProductEdit />} />
          <Route path="/admin-users" element={<AdminUsers user={user} />} />
          <Route
            path="/admin-users"
            element={<AdminUsers user={user} setUser={setUser} />}
          />
          <Route path="/admin-orders" element={<AdminOrders />} />
          {/* <Route path="/logged-in" element={<LoggedIn />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
