import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 text-custom p-8 font-poppins">
      {/* Contact Us Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-squada text-primary">Contact Us</h1>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Phone Numbers */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 shadow-lg rounded-xl"
        >
          <h2 className="text-2xl font-squada text-primary mb-4">Contact Numbers</h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              <a 
                href="tel:+918278333193" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'tel:+918278333193';
                }}
              >
                +91 8278333193
              </a>
            </li>
            <li>
              <a 
                href="tel:+919068757900" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'tel:+919068757900';
                }}
              >
                +91 90687 57900
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 shadow-lg rounded-xl"
        >
          <h2 className="text-2xl font-squada text-primary mb-4">Email</h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              <a 
                href="mailto:shreehdoverseas84@gmail.com" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:shreehdoverseas84@gmail.com';
                }}
              >
                shreehdoverseas84@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;