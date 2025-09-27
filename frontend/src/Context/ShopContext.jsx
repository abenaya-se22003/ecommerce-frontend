import React, { createContext, useState, useEffect } from "react";
import all_product from '../assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartProducts, setCartProducts] = useState([]);

  // Load cart products from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartProducts');
    if (savedCart) {
      setCartProducts(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (itemId, selectedSize) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1
    }));
    
    // Add product details to cartProducts
    const product = all_product.find(product => product.id === itemId);
    const existingProductIndex = cartProducts.findIndex(item => 
      item.id === itemId && item.size === selectedSize
    );

    let updatedCartProducts;
    
    if (existingProductIndex > -1) {
      // Increase quantity if product with same size exists
      updatedCartProducts = cartProducts.map((item, index) => 
        index === existingProductIndex 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new product to cart
      const newProduct = {
        id: itemId,
        name: product.name,
        price: product.new_price,
        old_price: product.old_price,
        image: product.image,
        size: selectedSize,
        quantity: 1
      };
      updatedCartProducts = [...cartProducts, newProduct];
    }
    
    setCartProducts(updatedCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
  };

  const removeFromCart = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, prev[itemId] - 1)
    }));

    const updatedCartProducts = cartProducts.map(item => {
      if (item.id === itemId && item.size === size) {
        return { ...item, quantity: Math.max(0, item.quantity - 1) };
      }
      return item;
    }).filter(item => item.quantity > 0); // Remove items with quantity 0

    setCartProducts(updatedCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const getCartItems = () => {
    return cartProducts;
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
    setCartProducts([]);
    localStorage.removeItem('cartProducts');
  };

  const contextValue = { 
    all_product, 
    cartItems, 
    addToCart, 
    removeFromCart,
    getTotalCartItems,
    getCartItems,
    clearCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;