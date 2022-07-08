import React, { useState, useEffect } from "react";
import "./Products.scss";
import axios from "axios";
import Api_key from "../../Api";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Rating } from "@mui/material";
import ModalForm from "../Forms/Modal";
import { Link } from "react-router-dom";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  // Get the product list from DB
  const getProducts = () => {
    axios.get(`${Api_key}/posts`).then((reponse) => {
      setAllProducts(reponse.data);
      setProducts(reponse.data);
    });
  };

  // Delete the product
  async function deleteProduct(product) {
    await axios
      .delete(`${Api_key}/posts/delete`, {
        id: product._id,
      })
      .then((response) => {
        getProducts();
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function filterProductByCategory(category) {
    switch (category) {
      case "MensCloth":
        console.log("asdasdasd");
        setProducts(
          allProducts.filter((product) => product.category === "MensCloth")
        );
        break;
      case "WomensCloth":
        setProducts(
          allProducts.filter((product) => product.category === "WomensCloth")
        );
        break;
      case "Jewellery":
        setProducts(
          allProducts.filter((product) => product.category === "Jewellery")
        );
        break;
      case "Electronics":
        setProducts(
          allProducts.filter((product) => product.category === "Electronics")
        );
        break;
      default:
        break;
    }
  }
  const ShowButton = () => {
    return (
      <div className="buttons d-flex justify-content-center mb-5">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => getProducts()}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProductByCategory("MensCloth")}
        >
          Men's Clothind
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProductByCategory("WomensCloth")}
        >
          Women's Clothind
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProductByCategory("Jewellery")}
        >
          Jewellery
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProductByCategory("Electronics")}
        >
          Electrinics
        </button>
      </div>
    );
  };
  return (
    <div className="products">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="">
          <ShowButton />
          <div
            style={{ display: "flex", flexFlow: "wrap", alignItems: "center" }}
          >
            {products.map((product) => (
            <Link to={{pathname:`/products/${product._id}`}} style={{color:'black',}}>
              <div
                style={{
                  maxHeight: "300px",
                  marginLeft: "10px",
                  marginBottom: "100px",
                  maxWidth: "300px",
                }}
              >
                <div class="card">
                  <img
                    src="https://images.pexels.com/photos/12430047/pexels-photo-12430047.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.message}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "right",
                    }}
                  >
                    <div>
                      <DeleteIcon onClick={() => deleteProduct(product)} />
                    </div>
                  </div>
                </div>
                </div>
                </Link>
            ))}
          </div>
        </div>
      </div>
      <ModalForm
        open={isOpen}
        handleClose={() => setIsOpen(false)}
        success={() => getProducts()}
      />
    </div>
  );
}
