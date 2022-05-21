import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from "react";

const Product = (props) => {
    // console.log(props.product.img)
  const { name, img, price } = props.product;

  return (
    <div className="col card">
      <img className="img-fluid" src={img} alt="" />
      <h3>{name}</h3>
      <p>{price}</p>
      <button className="btn btn-success">Add To Card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
    </div>
  );
};

export default Product;
