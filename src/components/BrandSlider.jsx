import { useEffect, useRef, useState } from "react";
import { brandImages } from "../constants/images";

const images = Object.values(brandImages);

const BrandSlider = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollSpeed = 0.5; // Adjust speed if necessary
    let position = 0;
    let animationFrame;

    const moveSlider = () => {
      if (!isPaused) {
        position -= scrollSpeed; // Move left
        slider.style.transform = `translateX(${position}px)`;

        // Reset position for infinite effect
        if (Math.abs(position) >= slider.scrollWidth / 2) {
          position = 0;
        }
      }

      animationFrame = requestAnimationFrame(moveSlider);
    };

    animationFrame = requestAnimationFrame(moveSlider);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div
      className="overflow-hidden relative w-full h-48"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume scrolling
    >
      <div
        ref={sliderRef}
        className="flex space-x-4 h-full"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
          transition: isPaused ? "transform 0.3s ease-out" : "none",
        }}
      >
        {/* Duplicating images for a seamless infinite effect */}
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="w-48 h-full flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`Brand ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
