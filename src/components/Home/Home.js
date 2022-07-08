import React from "react";
import Products from "../Products/Products";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div class="card bg-dark text-white">
        <img
          src="https://media.istockphoto.com/photos/portrait-of-a-happy-young-man-paying-online-by-a-credit-card-picture-id1317628108?b=1&k=20&m=1317628108&s=170667a&w=0&h=q_uDzbolDuKtbbm4XS5oinK-3CwdASXtOTnaPaKx6C8="
          class="card-img"
          alt="..."
          height={450}
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="containert">
            <h5 class="card-title display-3 fw-bolder mb-0">
              New Season Arrivals
            </h5>
            <p class="card-text lead fs-2">Check Out All trendss</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
