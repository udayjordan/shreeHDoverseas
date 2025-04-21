import { useLocation } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaShoppingBag, FaTruck } from "react-icons/fa";

export default function DomesticProduct_Details() {
  const location = useLocation();
  const {
    name = "Unknown Product",
    image = "",
    details = "No details available.",
  } = location.state || {};

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("KG");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !phone ||
      !email ||
      !pincode ||
      !city ||
      !country ||
      !additionalRequirements
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = {
      name,
      phone,
      email,
      quantity: `${quantity} ${unit}`,
      pincode,
      city,
      country,
      additionalRequirements,
    };

    try {
      setLoading(true);
      await fetch(
        "https://script.google.com/macros/s/AKfycbwO-oeaa_pVKpzC2RmlTqf0Mc0XVWOhKwdnXMjZG8cUHBduI83zk6Pwy3-86Uc3PnRh/exec",
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
    <div className="p-6 font-poppins flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/2 w-full">
        <div className="relative group overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-auto transition-transform duration-300 group-hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col gap-6">
        <div>
          <h2 className="text-5xl font-bold text-[#173334] mb-4">{name}</h2>
          <h3 className="text-3xl font-bold text-[#173334] mb-4">
            Product Details
          </h3>
          <p className="text-lg text-gray-700">{details}</p>
        </div>
        <h2 className="text-3xl font-bold text-[#173334] mb-4">
          Quotation Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <PhoneInput
            placeholder="Your Phone Number"
            value={phone}
            onChange={setPhone}
            defaultCountry="IN"
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <textarea
            placeholder="Additional Requirements"
            value={additionalRequirements}
            onChange={(e) => setAdditionalRequirements(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded"
            required
          ></textarea>
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
        <div className="mt-6 bg-blue-100 p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-3">
            <FaTruck className="text-blue-600" />
            <div>
              <h3 className="text-lg">Free Delivery</h3>
              <p className="text-gray-600">
                Enter your postal code for delivery availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
