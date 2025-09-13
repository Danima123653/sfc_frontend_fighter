import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PetOwner from "./pages/PetOwner";
import Veterinarian from "./pages/Veterinarian";
import AnimalShelter from "./pages/AnimalShelter";
import Footer from "./components/Footer";
import PetProduct from "./components/PetProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/petowner" element={<PetOwner />} />
          <Route path="/veterinarian" element={<Veterinarian />} />
          <Route path="/animalshelter" element={<AnimalShelter />} />
          <Route path="/petProduct" element={<PetProduct />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
