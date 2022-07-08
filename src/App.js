import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contacts from './components/Contacts/Contacts'
import Products from './components/Products/Products'
import MyCart from './components/MyCart/MyCart'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from "./components/Product";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="content"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/my-cart" element={<MyCart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
