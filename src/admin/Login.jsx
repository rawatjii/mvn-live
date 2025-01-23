import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as CONFIG from "root/config/config";
import "./assets/css/admin.css";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errors, setErrors] = useState({});

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginFunc = async () => {
    var emailVal = emailRef.current.value;
    var passwordVal = passwordRef.current.value;
    setIsLoading(true);
    try {
      setEmailError("");
      setPasswordError("");

      if (!emailVal) {
        setEmailError("Please enter your email");
        setIsLoading(false);
        throw new Error("Invalid Email and Password");
      }

      if (!passwordVal) {
        setPasswordError("Please enter your password");
        setIsLoading(false);
        throw new Error("Invalid Email and Password");
      }
      emailVal = "";
      passwordVal = "";

      setIsLoading(false);
      // dispatch(actionTypes.login())
      toast.success("Login Successful");
      return navigate(CONFIG.ADMIN_ROOT);
    } catch (err) {
      setIsLoading(false);
      toast.error(err.message);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();

    loginFunc();
  };

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>
      <div className="admin_container login_page">
        <div className="row mx-0">
          <div className="col-md-6 left_col"></div>

          <div className="col-md-6 right_col">
            <div className="logo">
              <img
                src={CONFIG.IMAGE_URL + "logo.webp"}
                alt="logo"
                className="img-fluid"
              />
            </div>

            <div className="form_data">
              <h3 className="title">Sign In</h3>

              <form id="loginForm" onSubmit={loginHandler}>
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="emailAddress">
                    Email Address
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="emailAddress"
                    className="form-control"
                    required
                    placeholder="Email or Username"
                  />

                  {/* {errors.email && <div className="errMsg">{errors.email}</div>} */}
                  {emailError && <div className="errMsg">{emailError}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                  <input
                    ref={passwordRef}
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    required=""
                    placeholder="Password"
                  />
                  {/* {errors.password && <div className="errMsg">{errors.password}</div>} */}
                  {passwordError && (
                    <div className="errMsg">{passwordError}</div>
                  )}
                </div>

                <div className="d-grid my-4">
                  <button className="btn btn_primary submit_btn" type="submit">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
