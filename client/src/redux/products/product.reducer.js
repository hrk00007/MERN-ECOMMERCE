import {
  MEN_PRODUCT_REQUEST,
  MEN_PRODUCT_SUCCESS,
  MEN_PRODUCT_FAILURE,
  UPLOAD_PRODUCT_FAILURE,
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  WOMEN_PRODUCT_REQUEST,
  WOMEN_PRODUCT_SUCCESS,
  WOMEN_PRODUCT_FAILURE,
  KIDS_PRODUCT_REQUEST,
  KIDS_PRODUCT_SUCCESS,
  KIDS_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  STRIPE_PAYMENT_REQUEST,
  STRIPE_PAYMENT_SUCCESS,
  STRIPE_PAYMENT_FAILURE,
} from "./product.actionTypes";

export const PRODUCT_FEATURE_KEY = "product";

let initialState = {
  loading: false,
  products: [],
  selectedProduct: {},
  errorMessage: "",
};

let productReducer = (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
    case UPLOAD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPLOAD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    //Men Product
    case MEN_PRODUCT_REQUEST:
    case WOMEN_PRODUCT_REQUEST:
    case KIDS_PRODUCT_REQUEST:
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MEN_PRODUCT_SUCCESS:
    case WOMEN_PRODUCT_SUCCESS:
    case KIDS_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case MEN_PRODUCT_FAILURE:
    case WOMEN_PRODUCT_FAILURE:
    case KIDS_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    //case Get a Product
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedProduct: payload,
      };
    // Make Stripe Payments
    case STRIPE_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STRIPE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case STRIPE_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export {productReducer};
