import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { name, img } = props.product;
  return (
    <div className="my-4 d-flex justify-content-between">
      <img className="product-img" src={img} alt="" />
      <h6>{name}</h6>
      <button className="btn btn-danger">
        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>{" "}
      </button>
    </div>
  );
};

export default Cart;
