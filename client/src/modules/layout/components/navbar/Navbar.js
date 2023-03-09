import React from "react";
import logo from "../../../../assets/img/logo1.png";
// import logo from "../../../../assets/img/logo.png";
// import logo from "../../../../assets/img/logo2.png";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {USER_FEATURE_KEY} from "../../../../redux/users/users.reducer";
import {logOut} from "../../../../redux/users/users.action";
import {ORDER_FEATURE_KEY} from "../../../../redux/orders/orders.reducers";
let Navbar = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let cartInfo = useSelector((state) => {
    return state[ORDER_FEATURE_KEY];
  });

  let {cartItems} = cartInfo;
  let userInfo = useSelector((state) => {
    return state[USER_FEATURE_KEY];
  });
  let {isAuthenticated, loading, user} = userInfo;

  // logOutUser
  let logOutUser = () => {
    dispatch(logOut(navigate));
  };
  let beforeLinks = (
    <React.Fragment>
      <li className="nav-item">
        <Link to="/users/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/users/register" className="nav-link">
          Register
        </Link>
      </li>
    </React.Fragment>
  );

  let afterLinks = (
    <React.Fragment>
      {user ? (
        <li className="nav-item">
          <Link to="/users/profile" className="nav-link">
            <img
              src={user.avatar}
              alt=""
              width="20"
              height="20"
              className="rounded-circle"
            />
            &nbsp;{user.name}
          </Link>
        </li>
      ) : null}
      <li className="nav-item">
        <Link to="#!" onClick={logOutUser} className="nav-link">
          Logout
        </Link>
      </li>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" width="120" height="35" />
          </Link>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/products/men" className="nav-link">
                  Men's Wear
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products/kids" className="nav-link">
                  Kids's Wear
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products/women" className="nav-link">
                  Women's Wear
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {user && user.isAdmin && (
                <li className="nav-item">
                  <Link to="/products/upload" className="nav-link">
                    Upload
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/orders/cart" className="nav-link">
                  <i className="fas fa-shopping-cart" />
                  <span className="bagde badge-success">
                    {cartItems.length}
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                {user && user.isAdmin && (
                  <Link to="/orders/list" className="nav-link">
                    Order List
                  </Link>
                )}
              </li>

              {/* <li className="nav-item">
                <Link to="/users/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users/register" className="nav-link">
                  Register
                </Link>
              </li> */}
              {!loading && (
                <React.Fragment>
                  {!isAuthenticated ? beforeLinks : afterLinks}
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
