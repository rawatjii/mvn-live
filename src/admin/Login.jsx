import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./assets/css/login.css";
import { API_BASE_URL } from "../config/config";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });

      const { token, record } = res.data;

      // ✅ Save token to localStorage
      localStorage.setItem("token", token);

      alert("Login successful! Token saved. ✅");

      // ✅ Redirect to admin dashboard
      navigate("/admin");
    } catch (error) {
      console.error("❌ Login failed:", error.response?.data || error.message);
      alert("Login failed ❌");
    }
  };

  return (
    <div className="loginContainer">
      <div className="row">
        <div className="col-6">
          <div className="imgContainer">
            {/* Optional image or logo */}
          </div>
        </div>
        <div className="col-6">
          <div className="LoginRightContainer">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="FieldContainer">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="FieldContainer">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="SubmitButton">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
