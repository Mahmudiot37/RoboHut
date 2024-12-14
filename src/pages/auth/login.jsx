import React, { useState } from "react";
import Layout from "../../components/layout/layout.jsx";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for button spinner
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start spinner
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });

      if (res && res.data.success) {
        // Show success message
        toast.success(res.data.message);
        // Update auth context and localStorage
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        // Redirect to desired path or default to home
        navigate(location.state || "/dashboard");
      } else {
        // Handle invalid login
        toast.error(res.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while logging in. Please try again.");
    } finally {
      setLoading(false); // Stop spinner
    }
  };

  return (
    <Layout title="Login - Ecommerce App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>
  
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter Your Email"
              required
            />
          </div>
  
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
          </div>
  
          {/* Forgot Password Button */}
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-secondary w-100" // Full-width for consistency
              disabled={loading}
              onClick={() => navigate("/forgotPassword")}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Processing...
                </>
              ) : (
                "Forgot Password?"
              )}
            </button>
          </div>
  
          {/* Login Button */}
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Logging in...
                </>
              ) : (
                "LOGIN"
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
  
};

export default Login;
