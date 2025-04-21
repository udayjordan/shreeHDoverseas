import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import BlogArticles from "./components/BlogArticles";
import InternationalProducts from "./components/InternationalProducts";
import DomesticProducts from "./components/DomesticProducts";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import AboutUs from "./components/AboutUs";
import PrivateLabelling from "./components/PrivateLabelling";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/domestic-products" element={<DomesticProducts />} />
            <Route path="/international-products" element={<InternationalProducts />} />
            <Route path="/private-labelling" element={<PrivateLabelling />} />
            <Route path="/category/:id" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
