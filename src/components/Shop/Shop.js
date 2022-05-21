import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  // console.log(products)

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col product-container row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
        <div className="col col-2 col-md-3 cart-container">
            <h2>Order Summary</h2>
        </div>
      </div>
    </div>
  );
};

export default Shop;
