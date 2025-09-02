import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import './Navbar.css'
import { Link } from "react-router";

function Navbar() {

const [menu,setmenu] = useState("shop")
  
  return (

    <div className="navbar">

      
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>

        <ul className="nav-menu">
            <li onClick={()=>{setmenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr />:<></>} </li>
            <li  onClick={()=>{setmenu("mens")}}><Link to='/mens'>Mens</Link>{menu==="mens"?<hr />:<></>} </li>
            <li  onClick={()=>{setmenu("womens")}}><Link to='/womens'>Womens</Link>{menu==="womens"?<hr />:<></>} </li>
            <li  onClick={()=>{setmenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr />:<></>} </li>
             </ul>

       <div className="nav-logo-cart">
       <Link to='/login'> <button>LOGIN</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
       </div>

    </div>
    
  )
}

export default Navbar