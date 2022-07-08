import axios from "axios";
import React, { useEffect, useState } from "react";
import Api_key from "../Api";

export default function Product() {
  const [products, setProducts] = useState([]);

  // Get the product list from DB
  const getProducts = async () => {
    const id = window.location.pathname.split("/")[2];
    await axios
      .post(`${Api_key}/posts/get-productById`, {
        id: id,
      })
      .then((response) => {
        setProducts(response.data);
      });
  };

  /**
   * Add the product to the cart
   */
  async function addToCart(id) {
    await axios
      .post(`${Api_key}/posts/add-to-cart`, {
        id,
      })
      .then((response) => {
        if (response.message) {
          alert(response.message);
        }
      })
      .catch((error) => console.log(error.message));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container py-5">
      {/* {products.map((product) => ( */}
      <div className="row py-5">
        <div className="col-md-6">
          <img src="" alt="" height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{products.category}</h4>
          <h4 className="display-5">{products.title}</h4>
          <p className="lead fw-bolder">
            Rating : <span className="text-warning">4.5</span>
          </p>
          <h3 className="display-6 fw-bold my-4">
            <span>$</span>
            <span>{products.price}</span>
          </h3>
          <p className="lead">{products.message}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addToCart(products._id)}
          >
            Add to Cart
          </button>
          <button className="btn btn-outline-dark ms-2 px-3 py-2">
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
