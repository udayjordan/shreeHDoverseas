import React from "react";
import goldenStellaImage from "../assets/Golden_stella.webp";
import traditionalBasmatiImage from "../assets/Traditional_Basmati.webp";

const ProductBenefit = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Golden Stella Rice */}
        <div className="relative group">
          <img
            src={goldenStellaImage}
            alt="Golden Stella Rice"
            className="w-full h-[400px] object-cover"
          />
          {/* Transparent Overlay */}
          <div className="absolute inset-0 bg-[#0000005C]"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-6 text-left">
            <h2 className="text-white font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight font-poppins">
              Golden <br /> Sella Rice
            </h2>
            <p className="text-white text-sm md:text-base font-poppins mt-2">
              Perfect for your daily meals, this premium rice brings the authentic
              taste of tradition to your table. Easy to cook and ready in minutes—
              simply add water and enjoy the rich flavor of quality rice.
            </p>
            <button className="mt-4 bg-[var(--color-primary)] text-black font-bold font-poppins py-2 px-4 rounded self-start transition-all duration-300 hover:bg-[#173334] hover:text-[var(--color-primary)]">
              View All
            </button>
          </div>
        </div>

        {/* Traditional Basmati Rice */}
        <div className="relative group">
          <img
            src={traditionalBasmatiImage}
            alt="Traditional Basmati Rice"
            className="w-full h-[400px] object-cover"
          />
          {/* Transparent Overlay */}
          <div className="absolute inset-0 bg-[#0000005C]"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-6 text-left">
            <h2 className="text-white font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight font-poppins">
              Traditional <br /> Basmati Rice
            </h2>
            <p className="text-white text-sm md:text-base font-poppins mt-2">
              Traditional Basmati Rice are packed with vital nutrients, including
              vitamins and minerals that help keep you healthy. Just add water and
              let the magic happen!
            </p>
            <button className="mt-4 bg-[var(--color-primary)] text-black font-bold font-poppins py-2 px-4 rounded self-start transition-all duration-300 hover:bg-[#173334] hover:text-[var(--color-primary)]">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefit;
