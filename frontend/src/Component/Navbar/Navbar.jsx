import React from 'react'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li>shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
             </ul>
       <div className="nav-logo-cart">
        <button>LOGIN</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
       </div>
    </div>
    
  )
}

export default Navbar