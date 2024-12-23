const HeroBanner = () => (
  <div
  id="home"
  className="relative bg-cover bg-center h-screen flex items-center justify-center"
  style={{
    backgroundImage: `url(/herobg2.jpeg)`,
  }}
>
      {/* Overlay for darker background effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  
      <div className="container mx-auto relative z-10 h-full flex items-center px-10">
        {/* Left Side Content */}
        <div className="text-white max-w-lg space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Redefine Your Game
          </h1>
          <p className="text-lg md:text-xl">
            Discover high-performance sportswear designed to push your limits.
            Engineered for comfort, durability, and style—because your best deserves the best.
          </p>
          <button className="py-3 px-6 bg-purple-800 hover:bg-purple-700 rounded-full text-lg font-semibold transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
  
  export default HeroBanner;
  