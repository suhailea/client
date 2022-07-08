import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <div className="navbar">
      <div className="navbar_items">
        <div className="logo">
          <Link to="/">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/products" className="link">
              <li>Products</li>
            </Link>
            <Link to="/contacts" className="link">
              <li>Contact Us</li>
            </Link>
            <Link to="/my-cart" className="link">
              <li>My Cart</li>
            </Link>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
