import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DomesticProduct_Details from "../components/DomesticProduct_Details";

export default function CategoryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, image, details } = location.state || {};

  if (!name || !image || !details) {
    // If no state is available, redirect to home
    navigate("/");
    return null;
  }

  return (
    <div>
      <DomesticProduct_Details name={name} image={image} details={details} />
    </div>
  );
}
