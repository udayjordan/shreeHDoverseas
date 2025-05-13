import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import logoImage from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);
  return (
    <footer className="bg-[#173334] text-white font-poppins py-8 px-4 sm:px-10 min-h-[300px]">
      <div className="container mx-auto grid md:grid-cols-4 gap-6 justify-center max-w-5xl sm:px-4">
        {/* Company Info */}
        <div className="col-span-1">
          <img src={logoImage} alt="Logo" className="h-16 w-16 md:h-20 md:w-20 ml-4" />
          <h2 className="text-lg md:text-xl font-semibold text-[#ffbe30]">
            Shree HD Overseas
          </h2>
          <p className="mt-1 md:mt-2 text-xs md:text-sm">
            <strong>Manufacturing Unit 1:</strong> <br />
            Shree HD Overseas <br />
            SH 8, Nissing, Karnal Haryana 132024 (India)
          </p>
          <p className="mt-1 md:mt-2 text-xs md:text-sm">
            <strong>Manufacturing Unit 2:</strong> <br />
            Rama Krishna Agro Foods <br />
            Nissing Agondh Road, SH 8, <br />
            Nissing, Karnal Haryana 132024 (India)
          </p>
          <p className="mt-1 md:mt-2 text-xs md:text-sm">
            <strong>Oman Office:</strong> <br />
            Po Box 108, Barka Sanaiya, <br />
            Muscat, Sultanate of Oman
          </p>
        </div>

        {/* Navigation */}
        <div className="col-span-1">
          <h3 className="text-base md:text-lg font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
            {/* <li>Search</li> */}
            {/* <li>My Cart</li> */}
            {/* <li>Wishlist</li> */}
            <li><Link to="/domestic-products" className="text-white hover:text-[#ffbe30]">Domestic Categories</Link></li>
            <li><Link to="/international-products" className="text-white hover:text-[#ffbe30]">International Categories</Link></li>
          </ul>
        </div>

        {/* About Us */}
        <div className="col-span-1">
          <h3 className="text-base md:text-lg font-semibold mb-2">About Us</h3>
          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
            <li><Link to="/about-us" className="text-white hover:text-[#ffbe30]">About Us</Link></li>
            <li><Link to="/contact-us" className="text-white hover:text-[#ffbe30]">Contact Us</Link></li>
            <li>FAQs</li>
            <li><Link to="/contact-us" className="text-white hover:text-[#ffbe30]">Delivery</Link></li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="col-span-1">
          <h3 className="text-base md:text-lg font-semibold text-[#ffbe30]">
            Subscribe to our newsletter 
          </h3>
          <p className="mt-2 text-xs md:text-sm">
            Stay updated with our latest products and offers.
          </p>
          <div className="mt-3 flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter Email Address..."
              className="p-2 mb-2 md:mb-0 md:flex-grow bg-white rounded-md md:rounded-l-md focus:outline-none text-black"
            />
            <button className="bg-[#ffbe30] text-black px-4 py-2 rounded-md md:rounded-r-md hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300">
              →
            </button>
          </div>
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
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
      <div className="text-center mt-6 text-xs md:text-sm">
        <p>© 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
