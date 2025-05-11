import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import formImage from "../assets/form.jpg";

const Form = () => {
  const [category, setCategory] = useState("domestic");
  const [quantity, setQuantity] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    product: "",
  });

  const products = {
    domestic: [
      "HD BHOG CHEF's CHOICE",
      "HD BHOG CLASSIC",
      "HD BHOG SAPPHIRE",
      "HD BHOG ROYAL",
      "HD BHOG PREMIUM TIBAR",
      "HD BHOG GRAND DUBAR",
      "HD BHOG MINI DUBAR",
      "HD BHOG MUNGRA",
    ],
    international: [
      "AL-KASA 1121 STEAM RICE",
      "KVS - PREMIUM CATERING RICE",
      "1121 BASMATI GOLDEN RICE",
      "1121 BASMATI STEAM RICE",
      "1121 BASMATI SELLA RICE",
      "ORGANIC STEAM RICE",
      "ORGANIC GOLDEN SELLA RICE",
      "ORGANIC SELLA RICE",
      "1718 BASMATI GOLDEN RICE",
      "1718 BASMATI SELLA RICE",
      "1718 BASMATI STEAM RICE",
      "1401 BASMATI SELLA RICE",
      "1401 BASMATI GOLDEN RICE",
      "1509 BASMATI GOLDEN RICE",
      "1509 BASMATI STEAM RICE",
      "PR 11 STEAM RICE",
      "PR 11 SELLA RICE",
      "PR 11 GOLDEN RICE",
      "SONA MANSOORI RICE",
    ],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxVk12kRPjj-DrhJECKMSo0iHM9oiZDl5E--ZUsXFtyogtUbx8z8uWqfM9WvC--V6u5/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, quantity, category }),
      });

      if (response.ok) {
        alert("Quotation request submitted successfully! You will get a call back soon!");
      } else {
        alert("Failed to send request. Please try again. later");
      }
    } catch (error) {
      alert("An error occurred while submitting the request. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={formImage}
            alt="Contact Form"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 flex space-x-4 text-white text-xl">
            <a href="https://www.facebook.com/share/18mBKWwFCq/?mibextid=wwXIfr">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/hd_bhog?igsh=ajVnczZzZ24xOGt4">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/shree-hd-overseas/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-extrabold text-gray-700 mb-6 text-center">
              GET <span className="text-yellow-500">QUOTATION :)</span>
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Your Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.mobile}
                onChange={handleChange}
              />

              <select
                className="w-full p-3 border border-gray-300 rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="domestic">Domestic Products</option>
                <option value="international">International Products</option>
              </select>

              <select
                name="product"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.product}
                onChange={handleChange}
              >
                {products[category].map((product, index) => (
                  <option key={index} value={product}>
                    {product}
                  </option>
                ))}
              </select>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">
                  Quantity ({category === "domestic" ? "Tonne" : "FCL"}):
                </span>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="9999"
                  className="w-20 text-center border-2 border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
                  value={quantity}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (!isNaN(value)) {
                      setQuantity(Math.max(0, Math.min(9999, value)));
                    }
                  }}
                  onClick={(e) => {
                    if (e.target.value === '0') {
                      e.target.value = '';
                      e.target.select();
                    }
                  }}
                />
              </div>

              <button
                className="w-full p-3 bg-yellow-500 text-white border border-yellow-500 rounded-md transition duration-300 hover:bg-white hover:text-yellow-500"
                type="submit"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
