import React from "react";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full max-w-[1577px] bg-[var(--color-primary)] px-10 py-14 max-md:px-5 max-md:py-10 overflow-hidden">
      {/* <div className="self-start px-4 pt-1.5 pb-1 text-lg font-extrabold text-custom bg-white rounded-lg max-md:px-4">
        Daily Discount
      </div> */}
      <div className="mt-9 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col grow items-start font-extrabold text-custom max-md:mt-6 max-md:max-w-full">
              <h1 className="text-9xl leading-[112px] max-w-full max-md:text-5xl max-md:leading-[52px]">
                Rice
                <br />
                Products
              </h1>
              <p className="self-stretch mt-6 text-xl tracking-normal leading-8 text-white max-md:max-w-full">
                These super foods are packed with vital nutrients,
                <br />
                including vitamins and minerals that can help keep you healthy.
                <br />
                Plus they're easy to enjoy—just add water and let the magic
                happen!
              </p>
              <button
                onClick={() => navigate("/about-us")}
                className="px-10 py-4 mt-5 max-w-full text-2xl leading-none bg-[var(--color-text)] rounded-lg tracking-[2px] w-[300px] text-[var(--color-primary)] font-extrabold transition duration-300 hover:bg-white hover:text-[var(--color-text)] max-md:px-4"
              >
                View more
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:w-full max-md:ml-0 relative">
            {/* Background layer */}
            <div
              className=" bg-[#173334]   rounded-[47px] opacity-100 object-contain mt-4 w-full aspect-[1.47] rounded-[47px] max-md:mt-10 max-md:max-w-full "
              style={{
                aspectRatio: "1.47", // Same as the image
              }}
            >
              {/* Card */}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ce62e8b3ea4411eb33b67e8d4409900a95fd2a5a9ec1e0821d6b01b1e37b7d?placeholderIfAbsent=true&apiKey=1e8cec7748e741d2bdda6e07b2f97b67"
                className="hover:rotate-x-15 hover:rotate-y-30 object-contain  w-full aspect-[1.47] rounded-[47px]  max-md:max-w-full transform transition-transform duration-500 ease-in-out"
                alt="Rice product showcase"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
