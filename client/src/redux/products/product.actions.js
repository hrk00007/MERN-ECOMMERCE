//upload Product
import Axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  KIDS_PRODUCT_FAILURE,
  KIDS_PRODUCT_REQUEST,
  KIDS_PRODUCT_SUCCESS,
  MEN_PRODUCT_FAILURE,
  MEN_PRODUCT_REQUEST,
  MEN_PRODUCT_SUCCESS,
  STRIPE_PAYMENT_FAILURE,
  STRIPE_PAYMENT_REQUEST,
  STRIPE_PAYMENT_SUCCESS,
  UPLOAD_PRODUCT_FAILURE,
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  WOMEN_PRODUCT_FAILURE,
  WOMEN_PRODUCT_REQUEST,
  WOMEN_PRODUCT_SUCCESS,
} from "./product.actionTypes";
import {setAlert} from "../layout/layout.actions";
import {placeOrder} from "../orders/orders.actions";
import {setAuthToken} from "../../util/setAuthToken";
import {BASE_URL} from "../../util/baseUrl";
let uploadProduct = (product, navigate) => {
  return async (dispatch) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      dispatch({type: UPLOAD_PRODUCT_REQUEST});
      let response = await Axios.post(
        `${BASE_URL}/product/upload`,
        JSON.stringify(product),
        config
      );
      dispatch({type: UPLOAD_PRODUCT_SUCCESS, payload: response.data});
      navigate("/");
    } catch (error) {
      dispatch({type: UPLOAD_PRODUCT_FAILURE, payload: error});
    }
  };
};

let getMensCollection = () => {
  return async (dispatch) => {
    try {
      dispatch({type: MEN_PRODUCT_REQUEST});
      let response = await Axios.get(`${BASE_URL}/product/men`);
      dispatch({type: MEN_PRODUCT_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: MEN_PRODUCT_FAILURE, payload: error});
    }
  };
};
let getWomensCollection = () => {
  return async (dispatch) => {
    try {
      dispatch({type: WOMEN_PRODUCT_REQUEST});
      let response = await Axios.get(`${BASE_URL}/product/women`);
      dispatch({type: WOMEN_PRODUCT_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: WOMEN_PRODUCT_FAILURE, payload: error});
    }
  };
};
let getKidsCollection = () => {
  return async (dispatch) => {
    try {
      dispatch({type: KIDS_PRODUCT_REQUEST});
      let response = await Axios.get(`${BASE_URL}/product/kids`);
      dispatch({type: KIDS_PRODUCT_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: KIDS_PRODUCT_FAILURE, payload: error});
    }
  };
};

let getProduct = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({type: GET_PRODUCT_REQUEST});
      let response = await Axios.get(`${BASE_URL}/product/${productId}`);
      dispatch({type: GET_PRODUCT_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: GET_PRODUCT_FAILURE, payload: error});
    }
  };
};
// MAKE STRIPE PAYMENT
let makeStripePayment = (body, navigate, order) => {
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
      dispatch({type: STRIPE_PAYMENT_REQUEST});
      /*   let response = await Axios.post(
        `${BASE_URL}/payment/pay`,
        JSON.stringify(body),
        config
      );
      dispatch({type: STRIPE_PAYMENT_SUCCESS, payload: response.data}); */
      dispatch(placeOrder(order, navigate));
    } catch (error) {
      dispatch(setAlert(JSON.stringify(error)), "danger");
      dispatch({type: STRIPE_PAYMENT_FAILURE, payload: error});
    }
  };
};
export {
  uploadProduct,
  getMensCollection,
  getWomensCollection,
  getKidsCollection,
  getProduct,
  makeStripePayment,
};
