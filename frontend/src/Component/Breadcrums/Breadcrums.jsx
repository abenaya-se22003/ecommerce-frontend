import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../../assets/breadcrum_arrow.png'
import Product from '../Pages/Product'


function Breadcrums(props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dicta non qui sunt, aspernatur, obcaecati natus praesentium nemo quaerat adipisci porro pariatur commodi tenetur. Quo quae voluptas veniam voluptatibus ipsa?</p>
      Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrums