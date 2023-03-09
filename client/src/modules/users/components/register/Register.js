import React, {useState} from "react";
import logo from "../../../../assets/img/logo1.png";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {registerUser} from "../../../../redux/users/users.action";
let Register = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let [userError, setUserError] = useState({
    nameError: null,
    emailError: null,
    passwordError: null,
  });

  let handleUsername = (e) => {
    setUser({...user, name: e.target.value});
    let regExp = /^[a-zA-Z ]*$/;
    if (regExp.test(e.target.value)) {
      setUserError({...userError, nameError: ""});
    } else {
      setUserError({...userError, nameError: "Enter a proper name"});
    }
  };
  let handleEmail = (e) => {
    setUser({...user, email: e.target.value});
    let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (regExp.test(e.target.value)) {
      setUserError({...userError, emailError: ""});
    } else {
      setUserError({...userError, emailError: "Enter a proper Email"});
    }
  };
  // handle password
  let handlePassword = (e) => {
    setUser({...user, password: e.target.value});
    let regExp = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regExp.test(e.target.value)) {
      setUserError({...userError, passwordError: ""});
    } else {
      setUserError({...userError, passwordError: "Enter a proper Password"});
    }
  };

  // submitRegister
  let submitRegister = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(registerUser(user, navigate));
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(user)}</pre>
      <pre>{JSON.stringify(userError)}</pre> */}
      <section className="p-3 bg-heists">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <p className="h3">Register Here</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card ">
                <div className="card-header bg-dark text-heists">
                  <p className="h4">Register Here</p>
                </div>
                <div className="card-body bg-heists">
                  <form onSubmit={submitRegister}>
                    <div className="form-group">
                      <input
                        name="name"
                        value={user.name}
                        onChange={handleUsername}
                        type="text"
                        className={`form-control ${
                          userError.nameError ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Name"
                        required
                      />
                      {userError.nameError ? (
                        <small className="text-danger">
                          {userError.nameError}
                        </small>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        name="email"
                        value={user.email}
                        onChange={handleEmail}
                        type="email"
                        className={`form-control ${
                          userError.emailError ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Email"
                        required
                      />
                      {userError.emailError ? (
                        <small className="text-danger">
                          {userError.emailError}
                        </small>
                      ) : null}
                    </div>
                    {/* password */}
                    <div className="form-group">
                      <input
                        name="password"
                        value={user.password}
                        onChange={handlePassword}
                        className={`form-control ${
                          userError.passwordError ? "is-invalid" : ""
                        }`}
                        type="password"
                        placeholder="Enter password"
                        required
                      />
                      {userError.passwordError ? (
                        <small className="text-danger">
                          {userError.passwordError}
                        </small>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-dark btn-sm"
                        value="Register"
                      />
                    </div>
                  </form>
                  <small className="font-weight-bold">
                    Have an Account ? <Link to="/users/login">Login</Link>
                  </small>
                </div>
                <div className="card-footer text-center">
                  <img src={logo} alt="" width="120" height="40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;
