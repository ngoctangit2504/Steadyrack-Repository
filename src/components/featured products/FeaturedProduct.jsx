import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import ButtonA from "../buttons/ButtonA";
import productsData from "../../data/data.json";
import { useNavigate } from "react-router-dom";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [activeProductId, setActiveProductId] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const getRandomProducts = (data, count) => {
      const shuffled = [...data].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
    
    setProducts(getRandomProducts(productsData, 4));
    console.log("Products loaded:", productsData.length);
  }, []);

  const handleProductClick = (productName) => {
    console.log("Product clicked:", productName);
    console.log("Navigating to:", `/product/${encodeURIComponent(productName)}`);
    navigate(`/product/${encodeURIComponent(productName)}`);
  };

  // Handle touch events for mobile
  const handleProductTouch = (productId) => {
    setActiveProductId(productId === activeProductId ? null : productId);
  };

  return (
    <div data-aos="fade-left" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="cursor-pointer hover:shadow-lg transition rounded-lg overflow-hidden border border-gray-100"
            onClick={() => handleProductClick(product.name)}
          >
            <div 
              className="relative bg-gray-100 overflow-hidden"
              onMouseEnter={() => setActiveProductId(product.id)}
              onMouseLeave={() => setActiveProductId(null)}
              onTouchStart={() => handleProductTouch(product.id)}
            >
              <img
                src={activeProductId === product.id && product.hoverImage ? product.hoverImage : product.primaryImage}
                alt={product.name}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-between items-center bg-white bg-opacity-90 transition-all duration-300">
                <span className="text-sm font-medium">View details</span>
                <button 
                  className="flex items-center justify-center bg-white p-2 rounded-full shadow-md border border-gray-200"
                  onClick={(e) => {
                    console.log("Quick view button clicked");
                    e.stopPropagation();
                    // Add quick view functionality when needed
                  }}
                >
                  <ShoppingBag size={16} className="flex-shrink-0" />
                </button>
              </div>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <h3 className="text-base sm:text-lg font-semibold truncate max-w-xs">{product.name}</h3>
                <p className="text-black ml-2 flex-shrink-0">{product.rating}</p>
              </div>
              {product.category && (
                <p className="text-gray-500 text-xs sm:text-sm">{product.category}</p>
              )}
              <p className="text-black font-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <ButtonA text={"SHOW ALL"} onClick={() => window.location.href = '/collections/all'} />
      </div>
    </div>
  );
}