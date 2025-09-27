import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"; // Fixed import - should be react-router-dom
import { ShopContext } from '../../Context/ShopContext';
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import './Navbar.css'

function Navbar() {
  const [menu, setMenu] = useState("shop")
  const { getTotalCartItems } = useContext(ShopContext); // Get function from context

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : <></>} 
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to='/mens'>Mens</Link>
          {menu === "mens" ? <hr /> : <></>} 
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to='/womens'>Womens</Link>
          {menu === "womens" ? <hr /> : <></>} 
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : <></>} 
        </li>
      </ul>

      <div className="nav-logo-cart">
        <Link to='/login'> 
          <button>LOGIN</button>
        </Link>
        <Link to='/cart' className="nav-cart-container">
          <img src={cart_icon} alt="cart" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar