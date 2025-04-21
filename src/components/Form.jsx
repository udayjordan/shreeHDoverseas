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
    const response = await fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, quantity, category }),
    });

    if (response.ok) {
      alert("Quotation request sent successfully!");
    } else {
      alert("Failed to send request. Try again.");
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
                <span className="font-semibold">
                  Quantity ({category === "domestic" ? "Tonne" : "FCL"}):
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="px-3 py-2 bg-gray-200 rounded-md"
                    onClick={() => setQuantity(Math.max(0, quantity - 0.1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    step="0.1"
                    className="w-20 text-center border border-gray-300 rounded-md"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        Math.max(0, Math.min(9999, Number(e.target.value)))
                      )
                    }
                  />
                  <button
                    type="button"
                    className="px-3 py-2 bg-gray-200 rounded-md"
                    onClick={() => setQuantity(Math.min(9999, quantity + 0.1))}
                  >
                    +
                  </button>
                </div>
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
