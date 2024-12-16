import React, { useState } from "react";
import Layout from "../components/layout/layout.jsx";
import { useAuth } from "../context/auth.jsx";
import { useCart } from "../context/cart.jsx";

const Homepage = () => {
  const [auth] = useAuth();
  const { addToCart } = useCart(); // Use addToCart function from context

  // Sample product data
  const products = [
    { id: 1, name: "Product A", image: "/images/Arduino_Uno.jpg", price: "$10.00", details: "High-quality product for everyday use." },
    { id: 2, name: "Product B", image: "/images/ArduinoMega.webp", price: "$20.00", details: "Durable and reliable product." },
    { id: 3, name: "Product A", image: "/images/Arduino_Uno.jpg", price: "$10.00", details: "High-quality product for everyday use." },
    { id: 4, name: "Product B", image: "/images/ArduinoMega.webp", price: "$20.00", details: "Durable and reliable product." },
    { id: 5, name: "Product A", image: "/images/Arduino_Uno.jpg", price: "$10.00", details: "High-quality product for everyday use." },
    { id: 6, name: "Product B", image: "/images/ArduinoMega.webp", price: "$20.00", details: "Durable and reliable product." },
    { id: 7, name: "Product A", image: "/images/Arduino_Uno.jpg", price: "$10.00", details: "High-quality product for everyday use." },
    { id: 8, name: "Product B", image: "/images/ArduinoMega.webp", price: "$20.00", details: "Durable and reliable product." },
    { id: 9, name: "Product A", image: "/images/Arduino_Uno.jpg", price: "$10.00", details: "High-quality product for everyday use." },
    { id: 10, name: "Product B", image: "/images/ArduinoMega.webp", price: "$20.00", details: "Durable and reliable product." },
    // Add more products...
  ];

  const [showDetails, setShowDetails] = useState(null); // Toggle product details

  const handleShowDetails = (id) => {
    setShowDetails((prev) => (prev === id ? null : id)); // Toggle visibility
  };

  return (
    <Layout title={"Welcome"}>
      <h1>HomePage</h1>
      {/* Product Blocks */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", margin: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
            />
            <p style={{ margin: "10px 0", fontWeight: "bold", color: "#333" }}>{product.price}</p>
            <p style={{ margin: "10px 0", color: "#666" }}>ID: {product.id}</p>
            <button
              onClick={() => handleShowDetails(product.id)}
              style={{
                margin: "5px",
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {showDetails === product.id ? "Hide Details" : "Show Details"}
            </button>
            {showDetails === product.id && (
              <div style={{ marginTop: "10px", color: "#444", textAlign: "left" }}>
                <p>{product.details}</p>
              </div>
            )}
            <button
              onClick={() => addToCart(product)} // Add to Cart functionality
              style={{
                margin: "5px",
                padding: "8px 16px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Homepage;
