import React from "react";
import { blogImages } from "../constants/images";

const BlogArticles = () => {
  const articles = [
    {
      title: "Traditional basmati is a timeless grain for health and flavor",
      description:
        "Traditional Basmati rice is rich in essential nutrients, including vitamins and minerals, that contribute to a healthy diet.",
      image: blogImages.ir64Image,
      tag: "Basmati",
    },
    {
      title: "Sella rice is a nutritious choice for better digestion",
      description:
        "It is a powerhouse of essential nutrients, promoting better digestion, heart health, and overall well-being.",
      image: blogImages.goldenStellaImage,
      tag: "Non-Basmati",
    },
    {
      title: "Pusa Basmati is a perfect blend of aroma and taste",
      description:
        "Pusa Basmati rice is a wholesome grain that supports weight management, aids digestion, and boosts energy levels.",
      image: blogImages.pusaRawImage,
      tag: "Basmati",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-center text-5xl font-bold text-[#173334] font-poppins">
        Blog & Articles
      </h2>
      <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mt-2">
        These super foods are packed with vital nutrients, including vitamins
        and minerals that can help keep you healthy. Plus they're easy to enjoy;
        just add water and boil it and let the magic happen!
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 h-[500px] w-[300px] mx-auto flex flex-col justify-between"
          >
            <div>
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#ffbe30] text-black px-2 py-1 text-xs font-semibold rounded">
                  {article.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-2xl text-[#173334] leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {article.description}
                </p>
              </div>
            </div>
            <div className="flex justify-center pb-8">
              {/* Button to read full article */}
              {/*<button className="bg-[#ffbe30] text-black px-6 py-2 rounded-md hover:bg-yellow-500">
                Read All
              </button>*/}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogArticles;
