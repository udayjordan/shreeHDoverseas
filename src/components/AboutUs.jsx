import React from "react";
import { motion } from "framer-motion";
import goldenStellaImage from "../assets/Golden_stella.webp";
import kailashImage from "../assets/singla2.png";
import vijayImage from "../assets/vijay singla.png";
import sanchitImage from "../assets/founder.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-custom p-8 font-poppins">
      {/* About Us Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-squada text-primary">About Us</h1>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 shadow-lg rounded-xl"
        >
          <h2 className="text-2xl font-squada text-primary mb-4">Mission</h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>Provide top-quality rice that meets global standards.</li>
            <li>Promote sustainable farming practices.</li>
            <li>Innovate with advanced technology for better production.</li>
            <li>Focus on building lasting customer relationships.</li>
            <li>Expand our global presence with trusted service.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 shadow-lg rounded-xl"
        >
          <h2 className="text-2xl font-squada text-primary mb-4">Vision</h2>
          <p className="text-lg">
            To be a globally recognized leader in the rice export industry,
            known for delivering premium-quality rice that enriches lives,
            fosters sustainable agriculture, and promotes trust and excellence
            in every grain.
          </p>
        </motion.div>
      </div>

      {/* Nature of Business */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-squada text-primary mb-4">
            Nature of Business
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              <strong>Manufacturer & Exporter</strong>
            </li>
            <li>
              <strong>Experience in Rice Industry:</strong> 24+ years
            </li>
            <li>
              <strong>Countries Explore:</strong> 70+ countries
            </li>
            <li>
              <strong>Daily Milling & Processing Capacity:</strong> 250 MT
            </li>
            <li>
              <strong>Milling Technology:</strong> Fully automated with Satake
              (Japan) & Buhler (Germany)
            </li>
            <li>
              <strong>Rice Units:</strong> 2 mega rice units in different
              geographical locations
            </li>
            <li>
              <strong>Professional Staff:</strong> 100+
            </li>
            <li>
              <strong>Factory Area:</strong> 30,350 sq. meters
            </li>
            <li>
              <strong>Certifications:</strong> APEDA, ISO, FSSAI, UDYAM, GST
            </li>
          </ul>
        </div>
        <div className="hover:rotate-x-15 hover:rotate-y-30 transform transition-transform duration-500 ease-in-out bg-white p-6 shadow-lg rounded-xl flex items-center justify-center">
          <img
            src={goldenStellaImage}
            alt="Golden Stella Rice"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Message from Director */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-squada text-primary mb-4">
          Message from Director
        </h2>
        <p className="text-lg font-poppins max-w-3xl mx-auto">
          At Shree HD Overseas, we are dedicated to delivering the finest rice
          with a commitment to quality and trust. Our journey, built on
          integrity and customer satisfaction, has seen our brand{" "}
          <strong>Al Kasa</strong> thrive globally, thanks to your continued
          support.
        </p>
        <p className="text-lg font-poppins max-w-3xl mx-auto mt-4">
          We remain focused on combining traditional methods with modern
          technology to bring premium rice varieties to homes worldwide. Your
          trust inspires us to grow, innovate, and strengthen our partnerships
          for the future.
        </p>
        <p className="text-lg font-poppins mt-4 font-semibold">
          Thank you for your ongoing trust in Shree HD Overseas.
        </p>
        <p className="text-lg font-poppins mt-1 font-bold">Warm regards,</p>
        <p className="font-poppins text-2xl font-bold -mt-1">
          Kailash Singla , Vijay Singla & Sanchit Singla
        </p>
        <p className="font-poppins text-2xl font-extrabold -mt-2">
          Directors, Shree HD Overseas
        </p>
      </div>

      {/* Founders Animated Cards */}
      <div className="flex justify-center items-center mt-8 gap-8 flex-wrap">
        {[
          { name: "Kailash Singla", img: kailashImage },
          { name: "Vijay Singla", img: vijayImage },
          { name: "Sanchit Singla", img: sanchitImage },
        ].map((founder, index) => (
          <div
            key={index}
            className="w-56 h-72 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transform transition-transform duration-500 relative"
          >
            <img
              src={founder.img}
              alt={founder.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 bg-white bg-opacity-80 text-center text-sm font-semibold p-1 rounded">
              {founder.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
