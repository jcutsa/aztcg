import React from "react";
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

export default function App() {
  return (
    <BrowserRouter>
      <Navbar>{/* <Header /> */}</Navbar>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/card/:cardId" element={<SingleCard />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
