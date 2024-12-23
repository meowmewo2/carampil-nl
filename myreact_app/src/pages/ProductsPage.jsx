import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    const fetchProducts = async () => {
      try {
        // Fetch products from both categories in parallel
        const [category4Response, category1Response] = await Promise.all([
          fetch("https://api.escuelajs.co/api/v1/categories/4/products"),
          fetch("https://api.escuelajs.co/api/v1/categories/1/products"),
        ]);

        if (!category4Response.ok || !category1Response.ok) {
          throw new Error("Failed to fetch products!");
        }

        const category4Data = await category4Response.json();
        const category1Data = await category1Response.json();

        // Combine products from both categories
        const combinedProducts = [...category4Data, ...category1Data];
        setProducts(combinedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen text-gray-500 text-lg">Loading products...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500 text-lg">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-gray-100 to-rose-100 p-6">
      <h1 className="text-4xl font-bold text-rose-600 mb-8 text-center">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            <img
              src={product.images[0] || "https://via.placeholder.com/150"}
              alt={product.title}
              className="w-full h-56 object-cover rounded-t-md"
              loading="lazy"
            />
            <div className="absolute top-2 left-2 bg-rose-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
              New
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800 truncate">
                {product.title}
              </h2>
              <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                {product.description || "No description available."}
              </p>
              <div className="mt-4 text-lg font-medium text-rose-600">
                ${product.price.toFixed(2)}
              </div>
              <button className="mt-4 w-full py-2 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
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
}

export default ProductsPage;
