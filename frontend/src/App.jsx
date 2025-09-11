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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
   
    <div style={{ marginTop: "54px", padding: "30px" }}></div>
    
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory category="men" />} />
        <Route path='/womens' element={<ShopCategory category="women" />} />
        <Route path='/kids' element={<ShopCategory category="kid" />} />
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
