import React from "react";
import "./Css/shopCategory.css";
import dropdown_icon from "../../assets/dropdown_icon.png";
import Item from "../Item/item";
import all_product from "../../assets/all_product";

function ShopCategory({ banner, category }) {
  return (
    <div className="shop-category">
     
      <img src={banner} alt="banner" />

      <div className="shopcategory-indexSort">
        <p>
          Showing 1-12 <span> out of 36 products  </span>
        </p>
        <div className="shopcategory-sort">
          Sort by<img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>

      {/* Products */}
      <div className="shopcategory-products">
        {all_product
          .filter((item) => item.category === category)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
    </div>
  );
}

export default ShopCategory;
