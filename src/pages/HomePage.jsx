import React from "react";
import HeroSection from "../components/HeroSection";
import BrandSlider from "../components/BrandSlider";
import ProductBenefit from "../components/ProductBenefit";
import Form from "../components/Form";
import BlogArticles from "../components/BlogArticles";
function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandSlider />
      <ProductBenefit />
      <Form />
      <BlogArticles />
    </>
  );
}

export default HomePage;
