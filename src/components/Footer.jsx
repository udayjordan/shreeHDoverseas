import React from "react";
import logoImage from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#173334] text-white font-poppins py-8 px-10">
      <div className="container mx-auto grid md:grid-cols-4 gap-6 justify-center max-w-5xl">
        {/* Company Info */}
        <div className="col-span-1">
          <img src={logoImage} alt="Logo" className="h-20 w-20 ml-4" />
          <h2 className="text-xl font-semibold text-[#ffbe30]">
            Shree HD Overseas
          </h2>
          <p className="mt-2 text-sm">
            <strong>Manufacturing Unit 1:</strong> <br />
            Shree HD Overseas <br />
            SH 8, Nissing, Karnal Haryana 132024 (India)
          </p>
          <p className="mt-2 text-sm">
            <strong>Manufacturing Unit 2:</strong> <br />
            Rama Krishna Agro Foods <br />
            Nissing Agondh Road, SH 8, <br />
            Nissing, Karnal Haryana 132024 (India)
          </p>
          <p className="mt-2 text-sm">
            <strong>Oman Office:</strong> <br />
            Po Box 108, Barka Sanaiya, <br />
            Muscat, Sultanate of Oman
          </p>
        </div>

        {/* Navigation */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>Search</li>
            {/* <li>My Cart</li> */}
            {/* <li>Wishlist</li> */}
            <li>Categories</li>
          </ul>
        </div>

        {/* About Us */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-[#ffbe30]">
            Subscribe to our newsletter and get 20% off
          </h3>
          <p className="mt-2 text-sm">
            Stay updated with our latest products and offers.
          </p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter Email Address..."
              className="p-2 flex-grow bg-white rounded-l-md focus:outline-none text-black"
            />
            <button className="bg-[#ffbe30] text-black px-4 py-2 rounded-r-md hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300">
              →
            </button>
          </div>
          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/share/18mBKWwFCq/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ffbe30] text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/hd_bhog?igsh=ajVnczZzZ24xOGt4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ffbe30] text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/shree-hd-overseas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ffbe30] text-lg"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm">
        <p>© 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
