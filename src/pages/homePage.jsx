import React, { useState } from "react";
import Layout from "../components/layout/layout.jsx";
import { useAuth } from "../context/auth.jsx";

const Homepage = () => {
  const [auth, setAuth] = useAuth();
  
  // Sample product data for 10 products
  const products = [
    { id: 1, name: "Product A", image: "/images/Arduino_Uno.jpg", price: "$10.00", details: "High-quality product for everyday use." },
    { id: 2, name: "Product B", image: "/images/ArduinoMega.webp", price: "$20.00", details: "Durable and reliable product." },
    { id: 3, name: "Product C", image: "/images/product-c.jpg", price: "$15.00", details: "Affordable yet efficient." },
    { id: 4, name: "Product D", image: "/images/product-d.jpg", price: "$25.00", details: "Perfect for home and office." },
    { id: 5, name: "Product E", image: "/images/product-e.jpg", price: "$30.00", details: "Premium build quality." },
    { id: 6, name: "Product F", image: "/images/product-f.jpg", price: "$40.00", details: "Ideal for professional use." },
    { id: 7, name: "Product G", image: "/images/product-g.jpg", price: "$50.00", details: "Designed for maximum efficiency." },
    { id: 8, name: "Product H", image: "/images/product-h.jpg", price: "$35.00", details: "Compact and lightweight." },
    { id: 9, name: "Product I", image: "/images/product-i.jpg", price: "$45.00", details: "Modern design with advanced features." },
    { id: 10, name: "Product J", image: "/images/product-j.jpg", price: "$60.00", details: "Top-notch product for luxury buyers." },
  ];

  const [showDetails, setShowDetails] = useState(null); // To toggle product details visibility

  const handleShowDetails = (id) => {
    setShowDetails((prev) => (prev === id ? null : id)); // Toggle product details
  };

  return (
    <Layout title={"Welcome"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>

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
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
            />
            {/* Price */}
            <p style={{ margin: "10px 0", fontWeight: "bold", color: "#333" }}>{product.price}</p>
            {/* Product ID */}
            <p style={{ margin: "10px 0", color: "#666" }}>ID: {product.id}</p>
            {/* Details Button */}
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
            {/* Product Details */}
            {showDetails === product.id && (
              <div style={{ marginTop: "10px", color: "#444", textAlign: "left" }}>
                <p>{product.details}</p>
              </div>
            )}
            {/* Add to Cart Button */}
            <button
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
