import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "./assets/css/login.css";
import { API_BASE_URL } from "../config/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [authStatus, setAuthStatus] = useState({
    isAuthenticated: null,
    isLoading: true,
  });

  const token = localStorage.getItem("token");

  // Check if user is already authenticated on mount

  useEffect(() => {
    const checkAuth = async () => {
      if (!token) {
        setAuthStatus({ isAuthenticated: false, isLoading: false });

        return;
      }

      try {
        const response = await axios.post(
          `${API_BASE_URL}/validate-token`,

          {},

          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setAuthStatus({
          isAuthenticated: response.data.status == true,
          isLoading: false,
        });
      } catch (err) {
        console.error("Token validation failed:", err);

        setAuthStatus({ isAuthenticated: false, isLoading: false });
      }
    };

    checkAuth();
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });

      const { token } = res.data;
      if (!token) {
        throw new Error("No token received");
      }

      localStorage.setItem("token", token);

      toast.success("Login successful! ✅", {
        position: "top-center",
        autoClose: 500,
        onClose: () => navigate("/admin", { replace: true }),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Login failed. Please try again.";

      toast.error(`❌ ${errorMessage}`, { position: "top-center" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirect to /admin if already authenticated

  if (authStatus.isLoading) {
    return (
      <div className="loading" style={{ textAlign: "center", padding: "20px" }}>
        
      </div>
    );
  }

  if (authStatus.isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="loginContainer">
      <ToastContainer position="top-center" />
      <div className="row">
        <div className="col-6">
          <div className="imgContainer">{/* Optional image or logo */}</div>
        </div>
        <div className="col-6">
          <div className="LoginRightContainer">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="w-90 login_form">
              <div className="FieldContainer mb-3">
                <label className="mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  className="w-100 rounded-1 border-0 outline-0"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="FieldContainer">
                <label className="mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  className="w-100 rounded-1 border-0 outline-0"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="SubmitButton px-4 py-2 mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
