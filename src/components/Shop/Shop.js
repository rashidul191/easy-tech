import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // console.log(products)

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const handleAddToCart = (product) => {
    let newProductAddCart = [];
    newProductAddCart = [...cart, product];
    setCart(newProductAddCart);
  };
//   console.log(cart)
  return (
    <div className="container">
      <div className="row">
        <div className="col product-container row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="col col-2 col-md-3 ms-2 bg-info cart-container">
          <h2>Order Summary</h2>
        
           {
               cart.map((product)=>  <Cart product = {product} key= {product.id} ></Cart>)
           }
          
          <button className="btn btn-light btn-lg border-secondary">Choose 1 for me</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
