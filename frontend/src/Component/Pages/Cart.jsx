import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Css/Cart.css';
import remove_icon from '../../assets/cart_cross_icon.png';

const Cart = () => {
  const { getCartItems, removeFromCart, addToCart, clearCart } = useContext(ShopContext);
  const cartItems = getCartItems();

  console.log('Cart Items:', cartItems); // Debug log

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleRemoveItem = (itemId, size) => {
    // Remove the item completely
    const updatedCart = cartItems.filter(item => !(item.id === itemId && item.size === size));
    // Update localStorage and state
    localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
    window.location.reload(); // Quick fix to refresh the cart
  };

  const handleIncreaseQuantity = (itemId, size) => {
    addToCart(itemId, size);
  };

  const handleDecreaseQuantity = (itemId, size, quantity) => {
    if (quantity > 1) {
      removeFromCart(itemId, size);
    } else {
      handleRemoveItem(itemId, size);
    }
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    clearCart();
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart">
        <div className="cart-empty">
          <h1>Your Shopping Cart</h1>
          <div className="empty-cart-message">
            <p>Your cart is empty</p>
            <button className="continue-shopping-btn" onClick={() => window.history.back()}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <span className="cart-items-count">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}</span>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${item.size}-${index}`} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-size">Size: <span>{item.size}</span></p>
                <p className="item-price">${item.price}</p>
                
                <div className="quantity-controls">
                  <button 
                    onClick={() => handleDecreaseQuantity(item.id, item.size, item.quantity)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => handleIncreaseQuantity(item.id, item.size)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="item-total">
                <p className="total-price">${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => handleRemoveItem(item.id, item.size)}
                  className="remove-btn"
                >
                  <img src={remove_icon} alt="Remove" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal ({getTotalItems()} items)</span>
              <span>${getTotalAmount().toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="summary-row">
              <span>Tax</span>
              <span>${(getTotalAmount() * 0.1).toFixed(2)}</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-total">
              <span>Total</span>
              <span>${(getTotalAmount() * 1.1).toFixed(2)}</span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>

            <button className="continue-shopping-btn" onClick={() => window.history.back()}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;