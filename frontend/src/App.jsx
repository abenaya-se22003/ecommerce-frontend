import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Component/Navbar/Navbar';
import Shop from './Component/Pages/Shop'
import ShopCategory from './Component/Pages/ShopCategory';
import Product from './Component/Pages/Product';
import Cart from './Component/Pages/Cart'
import LoginSignup from './Component/Pages/LoginSignup';
import Footer from './Component/Footer/Footer ';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
   
    <div style={{ marginTop: "54px", padding: "30px" }}></div>
    
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/signup' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
