import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  // set product , cart and singleProductName
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [singleProductName, setSingleProductName] = useState([]);

  // load data public folder
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // handle Add to cart product
  const handleAddToCart = (product) => {
    let newProductAddCart = [];
    newProductAddCart = [...cart, product];
    setCart(newProductAddCart);
  };

  // generator random number and find out choose any product
  const handleChooseOneForMe = () => {
    const randomNumber = parseInt(Math.random() * cart.length);
    if (randomNumber === 0) {
      return handleChooseOneForMe();
    } else {
      const singleProduct = cart[randomNumber];
      setSingleProductName(singleProduct);
    }
  };

  // Buy Now Product btn
  const buyNowProduct = () => {
    alert("congratulations");
  };

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

          {cart.map((product) => (
            <Cart product={product} key={product.id}></Cart>
          ))}

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Congratulations!!! Product For Me
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <img className="w-25" src={singleProductName.img} alt="" />
                  <h5>{singleProductName.name}</h5>
                  <p>Price: ${singleProductName.price}</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Don't Like
                  </button>
                  <button
                    onClick={buyNowProduct}
                    type="button"
                    class="btn btn-primary"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleChooseOneForMe}
            className="btn btn-light btn-lg border-secondary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Choose 1 for me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
