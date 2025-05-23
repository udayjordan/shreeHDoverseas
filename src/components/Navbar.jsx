import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logoImage from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#173334] px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <a href="/" className="flex items-center space-x-4 hover:text-[var(--color-primary)]">
          <img src={logoImage} alt="Logo" className="h-12 w-12" />
          <div className="flex flex-col items-start">
            <h1 className="text-[28px] font-squada text-[var(--color-primary)]">
              SHREE HD
              <span className="text-[24px] font-stick text-[var(--color-text)] bg-[var(--color-secondary)] px-2 ml-2 rounded-none tracking-wider">
                OVERSEAS
              </span>
            </h1>
            <p className="text-sm font-cedarville text-yellow-400">
              Loyalty and Taste Speaks
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Centered Search Bar */}
          {/* <div className="relative flex justify-start">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--color-primary)]" />
            <input
              type="text"
              placeholder="Search Products"
              className="font-poppins text-[16px] pl-9 pr-3 py-1 w-56 rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)]"
            />
          </div> */}

          <a
            href="/"
            className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
          >
            Home
          </a>
          <a
            href="/about-us"
            className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
          >
            About Us
          </a>
          <a
            href="/domestic-products"
            className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
          >
            Domestic Products
          </a>
          <a
            href="/international-products"
            className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
          >
            International Products
          </a>
          <a
            href="/private-labelling"
            className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
          >
            Private Labelling
          </a>
          <a
              href="/contact-us"
              className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
            >
              Contact Us
            </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[var(--color-primary)]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-3 text-center">
            <a
              href="/"
              className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
            >
              Home
            </a>
            <a
            href="/about-us"
            className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
          >
            About Us
          </a>
            <a
              href="/domestic-products"
              className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
            >
              Domestic Products
            </a>
            <a
              href="/international-products"
              className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
            >
              International Products
            </a>
            <a
              href="/private-labelling"
              className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
            >
              Private Labelling
            </a>
            <a
              href="/contact-us"
              className="text-white text-[16px] hover:text-[var(--color-primary)] font-poppins"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
