import React, { useContext, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'

function ProductDisplay(props) {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('');

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to cart');
            return;
        }
        addToCart(product.id, selectedSize);
        alert(`${product.name} (Size: ${selectedSize}) added to cart!`);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div> 
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="display-star">
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star" />
                    <p>(124)</p>
                </div>
                <div className="display-price">
                    <div className="display-price-old">${product.old_price}</div>
                    <div className="display-price-new">${product.new_price}</div>
                </div>
                <div className="display-description">
                    <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment</p>
                </div>
                <div className="display-right-size">
                    <h1>Select size</h1>
                    <div className="product-choose-size">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div 
                                key={size}
                                className={`size-option ${selectedSize === size ? 'active' : ''}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default ProductDisplay;