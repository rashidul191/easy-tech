import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from "react";


const Product = (props) => {
    const {handleAddToCart, product} = props
    // console.log(props.product.img)
  const { name, img, price} = product;

  return (
    <div className="product-item col card">
      <img className="img-fluid" src={img} alt="" />
      <h3>{name}</h3>
      <p>Price: $ {price}</p>
      <button onClick={()=> handleAddToCart(product)}  className="add-to-cart btn btn-success">Add To Card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
    </div>
  );
};

export default Product;
