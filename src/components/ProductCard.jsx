import React from "react";
import goldenStellaImage from "../assets/Golden_stella.webp";
import traditionalBasmatiImage from "../assets/Traditional_Basmati.webp";

const ProductCard = ({ product }) => {
  const getProductImage = (productName) => {
    switch (productName) {
      case "Golden Stella Rice":
        return goldenStellaImage;
      case "Traditional Basmati Rice":
        return traditionalBasmatiImage;
      default:
        return goldenStellaImage;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={getProductImage(product.name)}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-[#d4a017] font-bold">${product.price}</span>
          <button className="bg-[#173334] text-white px-4 py-2 rounded hover:bg-[#d4a017] transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 