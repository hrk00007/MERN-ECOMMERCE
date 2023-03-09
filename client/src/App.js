import logo from "./logo.svg";
import "./App.css";
import Navbar from "./modules/layout/components/navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./modules/layout/components/home/Home";
import MensCollection from "./modules/products/components/mens-collections/MensCollection";
import WomensCollection from "./modules/products/components/womens-collections/WomensCollection";
import KidsCollections from "./modules/products/components/kids-collections/KidsCollection";
import UploadProduct from "./modules/products/components/upload-products/UploadProduct";
import Cart from "./modules/orders/components/cart/Cart";
import Checkout from "./modules/orders/components/checkout/Checkout";
import OrderList from "./modules/orders/components/order-list/OrderList";
import Profile from "./modules/users/components/profile/Profile";
import Login from "./modules/users/components/login/Login";
import Register from "./modules/users/components/register/Register";
import Trying from "./modules/products/components/mens-collections/Trying";
import ProductDetails from "./modules/products/components/product-details/ProductDetails";
import Alert from "./modules/layout/components/alert/Alert";
import {useEffect} from "react";
import {getUserInfo} from "./redux/users/users.action";
import {store} from "./redux/store";
import ProfileTest from "./modules/users/components/profile/ProfileTest";
import OrderSuccess from "./modules/orders/components/order-success/OrderSuccess";
import PrivateRoute from "./router/PrivateRoute";
import NavbarDemo from "./modules/layout/components/navbar/Navbardemo";
import ProductDetails2 from "./modules/products/components/product-details/ProductDetails2";
function App() {
  useEffect(() => {
    store.dispatch(getUserInfo());
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Alert />
        </div>
        {/* <Navbar /> */}
        <NavbarDemo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/men" element={<MensCollection />} />
          {/* <Route path="/products/men" element={<Trying />} /> */}
          <Route path="/products/women" element={<WomensCollection />} />
          <Route path="/products/kids" element={<KidsCollections />} />
          {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
          <Route path="/products/:id" element={<ProductDetails2 />} />
          <Route path="/products/upload" element={<UploadProduct />} />
          <Route path="/orders/cart" element={<Cart />} />

          <Route path="/orders/checkout" element={<Checkout />} />
          <Route path="/orders/list" element={<OrderList />} />
          <Route path="/orders/order-success" element={<OrderSuccess />} />
          <Route path="/users/profile" element={<Profile />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
