import React from "react";
import {Link} from "react-router-dom";

let Home = () => {
  return (
    <React.Fragment>
      <div className="landing-page">
        <div className="wrapper">
          <div className="d-flex  flex-column justify-content-center align-items-center h-100 text-center">
            <h3 className="display-4">Welcome to Code Heist</h3>
            <p className="lead px-3">
              This project is created using MERN stack. With Features like
              Login,Logout,Register,Product Details,Add to Cart,Checkout,Update
              Address,UpdateProfile and Stripe Payment Gateway.
            </p>
            <p className="lead px-3">
              Admin feature like Admin Dashboard for CRUD operations of product,
              Order List for track of all orders.
            </p>
            <p className="lead px-3">
              In Future I am going to add Reviews Section, Carousel for both
              HomePage and Product Details. Paypal and UPI Payment Gateway.
            </p>
            <Link to="/products/men" className="btn btn-heists btn-sm">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
