import { useState, useEffect } from "react";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position and set the button visibility
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Hero Image */}
      <img
        src="/pexels-freestocks-291762.jpg"
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to New Look!
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          Explore the latest styles and trends in fashion. Discover unique pieces that express your individuality!
        </p>
        <button
          onClick={() => window.location.href = "/products"}
          className="px-8 py-4 bg-rose-700 text-white rounded-full text-lg md:text-xl hover:bg-rose-500 transition duration-300"
        >
          Shop Now
        </button>
      </div>

    {/* About Us Section */}
<div id="about-us" className="w-full bg-gradient-to-r from-rose-100 to-pink-100 py-20">
  <div className="max-w-7xl mx-auto text-center px-4">
    <h2 className="text-4xl font-semibold text-rose-700 mb-6 animate__animated animate__fadeIn animate__delay-1s">
      About Us
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
      We are a fashion hub bringing you the latest trends in clothing, shoes, accessories, and more. Our mission is to provide you with top-quality fashion that suits every style and personality. Our team carefully curates every item to ensure the best quality and style for you!
    </p>
    <div className="flex justify-center space-x-8 mt-8">
      <div className="w-20 h-20 border-4 border-rose-700 rounded-full flex items-center justify-center text-rose-700 text-xl transition transform hover:scale-125 hover:bg-rose-400 hover:text-white hover:rotate-12 cursor-pointer duration-300 ease-in-out">
        <span>👗</span> {/* Dress icon */}
      </div>
     
      <div className="w-20 h-20 border-4 border-rose-700 rounded-full flex items-center justify-center text-rose-700 text-xl transition transform hover:scale-125 hover:bg-rose-400 hover:text-white hover:rotate-12 cursor-pointer duration-300 ease-in-out">
        <span>👠</span> {/* Shoe icon */}
      </div>
      <div className="w-20 h-20 border-4 border-rose-700 rounded-full flex items-center justify-center text-rose-700 text-xl transition transform hover:scale-125 hover:bg-rose-400 hover:text-white hover:rotate-12 cursor-pointer duration-300 ease-in-out">
        <span>👜</span> {/* Handbag icon */}
      </div>
    </div>
  </div>
</div>


      {/* Contact Section */}
      <div id="contact" className="w-full bg-gradient-to-l from-pink-200 to-rose-200 py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold text-rose-700 mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Have questions or need assistance? Reach out to us anytime. We're here to help!
          </p>
          <a
            href="mailto:info@fashionhub.com"
            className="mt-4 text-lg font-semibold text-rose-700 hover:text-rose-500 transition duration-300"
          >
            info@newlook.com
          </a>
          <div className="mt-8">
            <p className="text-lg text-gray-700">Follow us:</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://facebook.com" className="text-rose-700 hover:text-rose-500">
                Facebook
              </a>
              <a href="https://instagram.com" className="text-rose-700 hover:text-rose-500">
                Instagram
              </a>
              <a href="https://twitter.com" className="text-rose-700 hover:text-rose-500">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-rose-700 text-white rounded-full p-4 shadow-lg hover:bg-rose-500 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default HomePage;
