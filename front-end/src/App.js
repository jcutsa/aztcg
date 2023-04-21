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

export default function App() {
  const [user, setUser] = useState({
    firstName: "him",
    lastName: "she",
    email: "123@gmail.com",
    cart: [
      {
        name: "Solemn Judgment - Maze of Memories (MAZE)",
        brand: "Yu-Gi-Oh!",
        image: require("./assetts" + "./images/card1.jpg".substring(1)),
        price: 2.24,
        maxQuantity: 10,
        quantitySelected: 10,
        id: "1",
        totalPrice: 22.4,
      },
      {
        name: "Labyrinth Heavy Tank - Maze of Memories (MAZE)",
        brand: "Yu-Gi-Oh!",
        image: require("./assetts" + "./images/card3.jpg".substring(1)),
        price: 0.4,
        maxQuantity: 7,
        quantitySelected: 7,
        id: "3",
        totalPrice: 2.8,
      },
    ],

    admin: true,
  });

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
      <Navbar user={user} />

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
            element={<SignIn user={user} setUser={setUser} />}
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/admin-login"
            element={<AdminLogin user={user} setUser={setUser} />}
          />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-products" element={<AdminProducts /> } />
<<<<<<< HEAD
          <Route path="/admin-product-edit" element={<AdminProductEdit/> } />
          <Route path="/admin-users" element={<AdminUsers user={user} /> } />
=======
          <Route path="/admin-users" element={<AdminUsers user={user} setUser={setUser} /> } />
>>>>>>> bc9081b17 (added editable textfields)
          <Route path="/admin-orders" element={<AdminOrders/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
