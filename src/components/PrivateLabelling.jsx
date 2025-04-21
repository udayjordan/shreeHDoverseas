import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import privateLabellingImage from "../assets/Private labeling of rice bag manufacture industry _20250320_161834_0000.jpg";

function PrivateLabelling() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [bagType, setBagType] = useState("");
  const [riceType, setRiceType] = useState("1121 BASMATI GOLDEN RICE");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("KG");
  const [googleDriveLink, setGoogleDriveLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const riceOptions = [
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
  ];

  const tabs = [
    {
      title: "Custom Branding",
      content: "Create your own unique brand identity with our custom branding services.",
      image: privateLabellingImage,
    },
    {
      title: "Product Development",
      content: "Work with our experts to develop new products tailored to your market.",
      image: privateLabellingImage,
    },
    {
      title: "Quality Assurance",
      content: "Ensure the highest quality standards for your branded products.",
      image: privateLabellingImage,
    },
  ];

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !companyName ||
      !email ||
      !phone ||
      !pincode ||
      !city ||
      !country ||
      !bagType ||
      !googleDriveLink
    ) {
      alert("Please fill all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const formData = {
      companyName,
      email,
      phone,
      pincode,
      city,
      country,
      bagType,
      riceType,
      quantity: `${quantity} ${unit}`,
      googleDriveLink,
    };

    try {
      setLoading(true);
      await fetch(
        "https://script.google.com/macros/s/AKfycbxQ5ckJ7lYIzhi4eTX_780-6On_7S67pDyuN1tmjrFBf2GsjZgN_8FwzHNkUbbQYaC-/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      alert(
        "Quotation request submitted successfully! You will get a call back soon!"
      );
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "Failed to submit request. Please check your details and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 font-poppins flex flex-col lg:flex-row gap-10 items-start">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full">
        <img
          src={privateLabellingImage}
          alt="Private Labelling"
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md mt-18"
        />
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 w-full flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-[#173334] mb-4">
          Quotation Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
          <PhoneInput
            placeholder="Your Phone Number"
            value={phone}
            onChange={setPhone}
            defaultCountry="IN"
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
          <input
            type="text"
            placeholder="Bag Type"
            value={bagType}
            onChange={(e) => setBagType(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
          <select
            value={riceType}
            onChange={(e) => setRiceType(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded"
          >
            {riceOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleQuantityChange(-1)}
              className="bg-gray-300 px-3 py-2 rounded"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              type="button"
              onClick={() => handleQuantityChange(1)}
              className="bg-gray-300 px-3 py-2 rounded"
            >
              +
            </button>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="bg-gray-300 px-2 py-1 rounded"
            >
              <option value="KG">KG</option>
              <option value="Tonne">Tonne</option>
              <option value="FCL">FCL</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Google Drive Link for Photo"
            value={googleDriveLink}
            onChange={(e) => setGoogleDriveLink(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
          <button
            type="submit"
            className="bg-[#d4a017] text-white px-6 py-2 rounded font-semibold hover:bg-[#b88b0a] transition duration-300 flex items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              "Submitting..."
            ) : (
              <>
                <FaShoppingBag /> Get Quotation
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PrivateLabelling;
