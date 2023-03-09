import Axios from "axios";
import {BASE_URL} from "../../util/baseUrl";
import {setAuthToken} from "../../util/setAuthToken";
import {setAlert} from "../layout/layout.actions";
import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  CLEAR_CART_ITEMS,
  DECR_PRODUCT_QTY,
  DELETE_PRODUCT_FROM_CART,
  GET_ALL_ORDERS_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  INCR_PRODUCT_QTY,
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
} from "./orders.actionTypes";

let addToCart = (selectedProduct, qty, navigate) => {
  return (dispatch) => {
    try {
      dispatch({type: ADD_TO_CART_REQUEST});
      let theProduct = {
        ...selectedProduct,
        qty: qty === "" ? 1 : Number(qty),
      };
      dispatch({type: ADD_TO_CART_SUCCESS, payload: theProduct});
      navigate("/orders/cart");
    } catch (error) {
      console.log(error);
      dispatch({type: ADD_TO_CART_FAILURE, payload: error});
    }
  };
};
// incrProductQty
let incrProductQty = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({type: INCR_PRODUCT_QTY, payload: {productId: productId}});
    } catch (error) {
      console.log(error);
    }
  };
};

// decrProductQty
let decrProductQty = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({type: DECR_PRODUCT_QTY, payload: {productId: productId}});
    } catch (error) {
      console.log(error);
    }
  };
};

// delete Product From Cart
let deleteProductFromCart = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_PRODUCT_FROM_CART,
        payload: {productId: productId},
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// place an Order
let placeOrder = (order, navigate) => {
  return async (dispatch) => {
    try {
      if (localStorage.token) {
        setAuthToken(localStorage.getItem("token"));
      }
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      dispatch({type: PLACE_ORDER_REQUEST});
      let response = await Axios.post(
        `${BASE_URL}/order/`,
        JSON.stringify(order),
        config
      );
      dispatch({type: PLACE_ORDER_SUCCESS, payload: response.data});
      dispatch(clearCartItems());
      navigate("/orders/order-success");
    } catch (error) {
      dispatch(setAlert(JSON.stringify(error)), "danger");
      dispatch({type: PLACE_ORDER_FAILURE, payload: error});
    }
  };
};

let clearCartItems = () => {
  return (dispatch) => {
    try {
      dispatch({type: CLEAR_CART_ITEMS});
    } catch (error) {
      console.error(error);
    }
  };
};

// get All Orders
let getAllOrders = () => {
  return async (dispatch) => {
    try {
      dispatch({type: GET_ALL_ORDERS_REQUEST});
      let response = await Axios.get(`${BASE_URL}/order/`);
      dispatch({type: GET_ALL_ORDERS_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch(setAlert(JSON.stringify(error)), "danger");
      dispatch({type: GET_ALL_ORDERS_FAILURE, payload: error});
    }
  };
};

export {
  addToCart,
  deleteProductFromCart,
  decrProductQty,
  incrProductQty,
  placeOrder,
  clearCartItems,
  getAllOrders,
};
