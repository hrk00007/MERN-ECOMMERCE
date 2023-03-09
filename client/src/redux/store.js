import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {rootReducer} from "./rootReducer";

let middleware = [thunk, logger];
let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export {store};
