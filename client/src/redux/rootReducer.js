import {combineReducers} from "redux";
import {alertReducer, ALERT_FEATURE_KEY} from "./layout/layout.reducers";
import {orderReducer, ORDER_FEATURE_KEY} from "./orders/orders.reducers";
import {productReducer, PRODUCT_FEATURE_KEY} from "./products/product.reducer";
import {userReducer, USER_FEATURE_KEY} from "./users/users.reducer";

let rootReducer = combineReducers({
  [PRODUCT_FEATURE_KEY]: productReducer,
  [USER_FEATURE_KEY]: userReducer,
  [ALERT_FEATURE_KEY]: alertReducer,
  [ORDER_FEATURE_KEY]: orderReducer,
});

export {rootReducer};
