import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

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

  // handle Choose Again btn
  const handleChooseAgain = () => {
    setCart([]);
    setSingleProductName([])
  };

  // Buy Now Product btn
  const buyNowProduct = () => {
    alert("Congratulations !!!!");
  };

  return (
    <div className="container">
      <div className="row row row-cols-1 row-cols-md-2 product-cart">
        {/* product container  */}
        <div className="product-container col col-md-9  row row-cols-1 row-cols-md-3 g-4 ">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        {/* cart container  */}
        <div className="cart-container col col-md-3 ms-2 bg-info py-4">
          <h2>Order Summary</h2>

          {cart.map((product) => (
            <Cart product={product} key={product.id}></Cart>
          ))}

          <div className="">
            {/*  Modal Choose 1 for me */}
            <div
              class="modal fade"
              id="choseOneForMe"
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
                    <p>Price: ৳ {singleProductName.price}</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Don't Like
                    </button>
                    <button
                      onClick={buyNowProduct}
                      type="button"
                      class="btn btn-success"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleChooseOneForMe}
              className="btn btn-light border-secondary"
              data-bs-toggle="modal"
              data-bs-target="#choseOneForMe"
            >
              Choose 1 for me
            </button>
            <br />

            {/* <!-- Modal Choose Again --> */}
            <div
              class="modal fade"
              id="chooseAgain"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                     Remove All Order Summary
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">Are your agree ???</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-success"
                      data-bs-dismiss="modal"
                    >
                      No
                    </button>
                    <button
                      onClick={handleChooseAgain}
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-danger mt-md-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#chooseAgain"
            >
              Choose Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
