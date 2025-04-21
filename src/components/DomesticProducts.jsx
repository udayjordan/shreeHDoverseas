import { useNavigate } from "react-router-dom";
import domesticProduct1 from "../assets/Domestic_Products/IMG-20250304-WA0000.jpg";
import domesticProduct2 from "../assets/Domestic_Products/IMG-20250304-WA0001.jpg";
import domesticProduct3 from "../assets/Domestic_Products/IMG-20250304-WA0002.jpg";
import domesticProduct4 from "../assets/Domestic_Products/IMG-20250304-WA0003.jpg";
import domesticProduct5 from "../assets/Domestic_Products/IMG-20250304-WA0004.jpg";
import domesticProduct6 from "../assets/Domestic_Products/IMG-20250304-WA0005.jpg";
import domesticProduct7 from "../assets/Domestic_Products/IMG-20250304-WA0006.jpg";
import domesticProduct8 from "../assets/Domestic_Products/IMG-20250304-WA0007.jpg";

export default function DomesticProducts() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "HD BHOG CHEF's CHOICE",
      image: domesticProduct1,
      details:
        "Chef's Choice is a premium selection of 1121 long grain basmati rice, known for its extraordinary length,slender grains, and unique aroma. It is ideal for chefs and food enthusiasts who want to create luxurious dishes like biryanis and pilafs. The rice cooks up fluffy, non-sticky, and flavorful, enhancing",
    },
    {
      name: "HD BHOG CLASSIC",
      image: domesticProduct2,
      details:
        "Classic 1401 Steam Basmati Rice offers the perfect balance of traditional aroma and flavor. Steamed to retain its essential nutrients, this rice is a favorite for everyday meals that require a hint of tradition. Its moderate length and soft texture make it ideal for curriespulaos, and other home-cooked meals.",
    },
    {
      name: "HD BHOG SAPPHIRE",
      image: domesticProduct3,
      details:
        "Sapphire is a premium quality 1509 steam basmati rice, loved for its light, fluffy texture and rich aroma. This aromatic rice is perfect for creating fragrant rice dishes,including pulao and biryani. The steam processing ensures that the rice retains its nutrients while delivering a delightful flavor in every bite.",
    },
    {
      name: "HD BHOG ROYAL",
      image: domesticProduct4,
      details:
        "Royal 1121 Basmati Rice (2nd Wand) offers slightly broken grains that still retain the signature aroma and taste of the basmati variety. It's a cost-effective option without sacrificing quality, making it popular for both household cooking and food services.",
    },
    {
      name: "HD BHOG PREMIUM TIBAR",
      image: domesticProduct5,
      details:
        "Premium Tibar is another high-quality variant of 1121 basmati rice, featuring medium-sized broken grains. Despite being broken, it delivers the same richness and fragrance of full-grain basmati, making it an economical yet flavorful choice for various rice dishes.",
    },
    {
      name: "HD BHOG GRAND DUBAR",
      image: domesticProduct6,
      details:
        "Grand Dubar is a select variety of 1121 basmati rice known for its long, broken grains and appealing aroma. It's an excellent choice for those looking for premium rice at an affordable price. The rice is ideal for cooking everyday dishes without compromising on the basmati experience.",
    },
    {
      name: "HD BHOG MINI DUBAR",
      image: domesticProduct7,
      details:
        "Mini Dubar is a shorter broken grain version of 1121 basmati rice. This variety is perfect for those seeking the traditional basmati fragrance and taste at an economical price point. It's commonly used in homes and restaurants for regular meals, offering good quality at a budget-friendly cost.",
    },
    {
      name: "HD BHOG MUNGRA",
      image: domesticProduct8,
      details:
        "Mungra is a variant of 1121 basmati rice that features small broken grains but maintains the distinct basmati aroma and soft texture. It's an excellent option for bulk cooking or everyday meals where cost efficiency is important but without compromising on taste or quality.",
    },
  ];

  return (
    <div className="p-6 font-poppins">
      <h2 className="text-2xl font-bold text-[#173334] mb-4">
        Domestic Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group h-80 rounded-lg overflow-hidden transition duration-300 transform hover:scale-105"
          >
            <div className="h-full bg-white relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <button
                onClick={() => {
                  navigate(`/category/${index + 1}`, {
                    state: {
                      name: category.name,
                      image: category.image,
                      details: category.details,
                    },
                  });
                }}
                className="bg-[#d4a017] text-white px-4 py-2 rounded font-semibold hover:bg-[#b88b0a] transition duration-300"
              >
                View more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
