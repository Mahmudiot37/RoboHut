import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import axios from "axios";
import { useAuth } from "../../context/auth.jsx";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [auth] = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${auth.token}`, // Ensure token is sent
        };

        // Fetch user information
        const userRes = await axios.get("http://localhost:8000/api/v1/user/me", {
          headers,
        });

        if (userRes.data.success) {
          setUserInfo(userRes.data.user);
        } else {
          toast.error("Failed to load user data");
        }

        // Fetch cart items
        const cartRes = await axios.get("http://localhost:8000/api/v1/cart", {
          headers,
        });

        if (cartRes.data.success) {
          setCartItems(cartRes.data.cartItems);
        } else {
          toast.error("Failed to load cart items");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error fetching dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [auth.token]);

  if (loading) {
    return (
      <Layout title="User Dashboard">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4>Loading Dashboard...</h4>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="User Dashboard">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>User Information</h2>
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
          </div>
          <div className="col-md-6">
            <h2>My Cart</h2>
            {cartItems.length > 0 ? (
              <ul className="list-group">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <span>{item.productName}</span>
                      <span>${item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
