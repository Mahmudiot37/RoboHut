import React from "react";
import { useCart } from "../../context/cart";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="card">
      <h5>{product.name}</h5>
      <p>${product.price}</p>
      <button onClick={handleAddToCart} className="btn btn-primary">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
