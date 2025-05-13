import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappWidget = () => {
  const whatsappNumber = '+918278333193';
  const whatsappMessage = 'Hi, I would like to know more about your products.';

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#23c759] transition-colors duration-300 rounded-full p-4 shadow-lg flex items-center justify-center cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          window.open(whatsappUrl, '_blank');
        }}
      >
        <FaWhatsapp className="h-8 w-8 text-white" />
      </a>
    </motion.div>
  );
};

export default WhatsappWidget;
