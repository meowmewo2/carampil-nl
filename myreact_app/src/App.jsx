
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroBanner from "./components/Hero";
import Footer from "./components/Footer";
import CollectionsPage from "./pages/CollectionsPage"; // Create this component.

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define Routes for Each Page */}
        <Route path="/" element={<HeroBanner />} />
        <Route path="/collections" element={<CollectionsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
