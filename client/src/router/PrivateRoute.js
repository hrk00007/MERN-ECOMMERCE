import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Navigate, Outlet, Route, useNavigate} from "react-router-dom";
import {USER_FEATURE_KEY} from "../redux/users/users.reducer";

let PrivateRoute = ({component: component, ...rest}) => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
