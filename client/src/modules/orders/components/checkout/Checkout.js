import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {ORDER_FEATURE_KEY} from "../../../../redux/orders/orders.reducers";
import {makeStripePayment} from "../../../../redux/products/product.actions";
import {USER_FEATURE_KEY} from "../../../../redux/users/users.reducer";
import Spinner from "../../../layout/components/spinner/Spinner";
import StripeCheckout from "react-stripe-checkout";
import stripeImage from "../../../../assets/img/uibrains.png";
import {placeOrder} from "../../../../redux/orders/orders.actions";
let Checkout = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const PRODUCT_TAX = 5.0;
  let userInfo = useSelector((state) => {
    return state[USER_FEATURE_KEY];
  });

  let {loading, user} = userInfo;

  let cartInfo = useSelector((state) => {
    return state[ORDER_FEATURE_KEY];
  });

  let {cartItems} = cartInfo;

  let calcTotal = () => {
    let result = 0;
    if (cartItems.length > 0) {
      for (let item of cartItems) {
        result += item.price * item.qty;
      }
    }
    return result;
  };

  let calcTax = () => {
    return (calcTotal() * PRODUCT_TAX) / 100;
  };

  let calcGrandTotal = () => {
    return calcTotal() + calcTax();
  };

  // Submit of Stripe Payment Form
  let clickPayment = (token) => {
    let items = cartItems.map((cartItem) => {
      return {
        name: cartItem.name,
        price: cartItem.price,
        qty: cartItem.qty,
      };
    });

    let order = {
      items: items,
      tax: calcTax(),
      total: calcTotal(),
    };
    let product = {
      price: Number(calcGrandTotal()) * 100,
      name: "Products from  BrainsKart",
    };
    let body = {
      token,
      product,
    };
    dispatch(makeStripePayment(body, navigate, order));
  };

  //direct Order
  /*   let clickPayment = (e) => {
    e.preventDefault();
    let items = cartItems.map((cartItem) => {
      return {
        name: cartItem.name,
        price: cartItem.price,
        qty: cartItem.qty,
      };
    });

    let order = {
      items: items,
      tax: calcTax(),
      total: calcTotal(),
    };

    dispatch(placeOrder(order, navigate));
  }; */

  // let onPlaceOrder = (e) => {
  //   e.preventDefault();
  //   dispatch(placeOrder(order, navigate));
  // };
  return (
    <React.Fragment>
      <section className="p-3 bg-heists">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <p className="h3">Checkout Page</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header bg-dark text-heists">
                  <p className="h4">Billing Address</p>
                </div>
                <div className="card-body">
                  {loading ? (
                    <Spinner />
                  ) : (
                    <React.Fragment>
                      {user !== null && user.address ? (
                        <ul className="list-group">
                          <li className="list-group-item bg-heists">
                            <b>Flat:</b>
                            {user.address.flat}
                          </li>
                          <li className="list-group-item bg-heists">
                            <b>Street:</b>
                            {user.address.street}
                          </li>
                          <li className="list-group-item bg-heists">
                            <b>Landmark:</b>
                            {user.address.landmark}
                          </li>
                          <li className="list-group-item bg-heists">
                            <b>City:</b>
                            {user.address.city}
                          </li>
                          <li className="list-group-item bg-heists">
                            <b>State</b>:{user.address.state}
                          </li>
                          <li className="list-group-item bg-heists">
                            <b>Country:</b>
                            {user.address.country}
                          </li>
                          <li className="list-group-item bg-heists">
                            <b>Pincode:</b>
                            {user.address.pincode}
                          </li>
                          <li className="list-group-item bg-heists">
                            <b>Mobile:</b>
                            {user.address.mobile}
                          </li>
                        </ul>
                      ) : (
                        <h2 className="text-danger h4 font-weight-bold">
                          Login to See Your Address
                        </h2>
                      )}
                    </React.Fragment>
                  )}
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header bg-dark text-heists">
                  <p className="h4">Payment Option</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="customRadio"
                        id="customRadio1"
                        className="custom-control-input"
                      />
                      <label
                        htmlFor="customRadio1"
                        className="custom-control-label"
                      >
                        CASH ON DELIVERY(COD)
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="customRadio"
                        id="customRadio2"
                        className="custom-control-input"
                      />
                      <label
                        htmlFor="customRadio2"
                        className="custom-control-label"
                      >
                        UPI
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="customRadio"
                        id="customRadio3"
                        className="custom-control-input"
                      />
                      <label
                        htmlFor="customRadio3"
                        className="custom-control-label"
                      >
                        CREDIT-CARD/DEBIT-CARD{" "}
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-dark text-heists">
                  <p className="h4">Your Cart</p>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    {cartItems.length > 0 ? (
                      <React.Fragment>
                        {cartItems.map((cartItem) => {
                          return (
                            <li key={cartItem._id} className="list-group-item">
                              <div className="row text-center">
                                <div className="col-md-2">
                                  <img
                                    src={cartItem.image}
                                    alt=""
                                    width="50"
                                    height="80"
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p className="h6">{cartItem.name}</p>
                                  <p className="h6 font-weight-bold">
                                    Qty : {cartItem.qty}
                                  </p>
                                  <p className="h6 font-weight-bold">
                                    Price : &#8377; {cartItem.price?.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </React.Fragment>
                    ) : null}
                  </ul>
                  <ul className="list-group mt-2">
                    <li className="list-group-item bg-brains">
                      <b>Total :</b> &#8377; {calcTotal().toFixed(2)}
                    </li>
                    <li className="list-group-item bg-brains">
                      <b>Tax :</b> &#8377; {calcTax().toFixed(2)}
                    </li>
                    <li className="list-group-item bg-brains">
                      <b>Grand Total :</b> &#8377; {calcGrandTotal().toFixed(2)}
                    </li>
                  </ul>
                  {/* STRIPE PAYMENT CHECKOUT FORM  */}
                  <StripeCheckout
                    token={clickPayment}
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
                    name="Stripe Payment"
                    amount={calcGrandTotal() * 100}
                    description="Payments with Stripe"
                    currency="USD"
                    image={stripeImage}
                  >
                    <button className="btn btn-secondary btn-sm btn-block mt-3">
                      PAY &#8377; {calcGrandTotal().toFixed(2)}
                    </button>
                  </StripeCheckout>
                  {/* direct Order */}
                  {/*     <button
                    className="btn btn-secondary btn-sm btn-block mt-3"
                    onClick={clickPayment}
                  >
                    PAY &#8377; {calcGrandTotal().toFixed(2)}
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Checkout;
