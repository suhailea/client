import React, { useEffect, useState } from "react";
import axios from "axios";
import Api_key from "../../Api";
import DeleteIcon from "@mui/icons-material/Delete";

function MyCart() {
  const [cart, setCart] = useState([]);

  /**
   * Get Cart Items
   */
  async function getCartItems() {
    await axios.get(`${Api_key}/posts/cartItems`).then((response) => {
      console.log(response);
      setCart(response.data);
    });
  }

  /**
   * Delete item from the cart
   **/
  async function deleteProduct(product) {
    console.log(product._id);
    const id = product._id;
    await axios
      .post(`${Api_key}/posts/delete-from-cart`, {
        id: id,
      })
      .then(() => {
        getCartItems();
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getCartItems();
    console.log(cart);
  }, []);
  return (
    <div>
      {cart.map((data) => {
        return (
          <div className="px-4 my-5 bg-light rounded-3">
            <div className="container py-4">
              <button className="btn close float-end" aria-label="Close"></button>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <img src="https://cdn.shopify.com/s/files/1/1464/5034/products/SIGNATURE_DCSS_WHITE_850x1100.jpg?v=1629303075&format=webp" 
                  alt="asa" width="180px" height="200px" />
                </div>
                <div className="col-md-4">
                  <h3>{data.title}</h3>
                  <p>{data.message}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyCart;
