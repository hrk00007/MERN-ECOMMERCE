import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
  decrProductQty,
  deleteProductFromCart,
  incrProductQty,
} from "../../../../redux/orders/orders.actions";
import {ORDER_FEATURE_KEY} from "../../../../redux/orders/orders.reducers";
import Spinner from "../../../layout/components/spinner/Spinner";
let Cart = () => {
  let dispatch = useDispatch();

  const PRODUCT_TAX = 5.0;

  let cartInfo = useSelector((state) => {
    return state[ORDER_FEATURE_KEY];
  });

  let {cartItems, loading} = cartInfo;

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

  // clickIncrQty
  let clickIncrQty = (productId) => {
    dispatch(incrProductQty(productId));
  };

  // clickDecrQty
  let clickDecrQty = (productId) => {
    dispatch(decrProductQty(productId));
  };

  // clickDelete Cart Item
  let clickDeleteCartItem = (productId) => {
    dispatch(deleteProductFromCart(productId));
  };

  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <section className="m-5">
        {/* <h1 className="mb-5">Shopping Cart</h1> */}
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            {cartItems.length > 0 ? (
              <React.Fragment>
                <div className="cart-shopping-cart mt-5">
                  <div className="cart-column-labels">
                    <label className="cart-product-image">Image</label>
                    <label className="cart-product-details">Product</label>
                    <label className="cart-product-price">Price</label>
                    <label className="cart-product-quantity">Quantity</label>
                    <label className="cart-product-removal">Remove</label>
                    <label className="cart-product-line-price">Total</label>
                  </div>
                  {cartItems.map((cart) => {
                    return (
                      <div className="cart-product">
                        <div className="cart-product-image">
                          <img src={cart.image} alt="" />
                        </div>
                        <div className="cart-product-details">
                          <div className="cart-product-title">
                            <p className="h6 font-weight-bold">{cart.name}</p>
                          </div>
                          <p className="cart-product-description">
                            {cart.description}
                          </p>
                        </div>
                        <div className="cart-product-price">
                          {cart.price.toFixed(2)}
                          <i className="fa fa-rupee-sign ml-2" />{" "}
                        </div>

                        <div className="cart-product-quantity">
                          <i
                            className="fa fa-plus-square"
                            onClick={clickIncrQty.bind(this, cart._id)}
                          />
                          <span className="mx-2">{cart.qty}</span>
                          <i
                            className="fa fa-minus-square"
                            onClick={clickDecrQty.bind(this, cart._id)}
                          />
                        </div>
                        <div className="cart-product-removal ">
                          <button
                            className="cart-remove-product"
                            onClick={clickDeleteCartItem.bind(this, cart._id)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="cart-product-line-price">
                          {(cart.qty * cart.price).toFixed(2)}
                          <i className="fa fa-rupee-sign ml-2" />
                        </div>
                      </div>
                    );
                  })}

                  <div className="cart-totals">
                    <div className="cart-totals-item">
                      <label>Subtotal</label>
                      <div className="cart-totals-value" id="cart-subtotal">
                        {calcTotal().toFixed(2)}
                        <i className="ml-2 fa fa-rupee-sign " />{" "}
                      </div>
                    </div>
                    <div className="cart-totals-item">
                      <label>Tax (5%)</label>
                      <div className="cart-totals-value" id="cart-tax">
                        {calcTax().toFixed(2)}
                        <i className="ml-2 fa fa-rupee-sign" />{" "}
                      </div>
                    </div>
                    <div className="cart-totals-item totals-item-total">
                      <label>Grand Total</label>
                      <div className="cart-totals-value" id="cart-total">
                        {calcGrandTotal().toFixed(2)}
                        <i className="ml-2 fa fa-rupee-sign " />{" "}
                      </div>
                    </div>
                  </div>

                  <Link to="/orders/checkout" className="cart-checkout">
                    Checkout
                  </Link>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <section className="mt-3">
                  <div className="container">
                    <div className="row">
                      <div className="col text-center">
                        <p className="h3 text-heists">Your Cart is Empty </p>
                        <Link
                          to="/"
                          className="btn btn-dark text-heists btn-sm"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </section>
    </React.Fragment>
  );
};

export default Cart;
