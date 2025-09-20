import React from 'react'
import './ProductDisplay.css'

function ProductDisplay(props) {
    const {product} = props;
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
          <img src={product.image} alt="" />
        </div>
        
        </div> 

    </div>
  )
}

export default ProductDisplay