import { NavLink } from "react-router";
import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll direction
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 ${isScrolled ? "bg-transparent shadow-md" : "bg-gray-950 shadow-lg"} text-white sticky top-0 z-50`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <span role="img" aria-label="Fashion logo" className="text-3xl text-rose-900">
            💄
          </span>
          <span className="text-3xl font-semibold tracking-wide text-rose-700">
            New Look
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-3xl md:hidden text-white-700 hover:text-rose-600 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative bg-gray-800 md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto md:flex items-center transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0">
            <li>
              <NavLink
                to="/"
                exact
                className="text-lg font-medium hover:text-red-500 transition duration-200"
                activeClassName="text-red-100 font-semibold"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="text-lg font-medium hover:text-red-500 transition duration-200"
                activeClassName="text-red-100 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </NavLink>
            </li>
            <li>
              <a
                href="#about-us"
                className="text-lg font-medium hover:text-red-500 transition duration-200"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-medium hover:text-red-500 transition duration-200"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
