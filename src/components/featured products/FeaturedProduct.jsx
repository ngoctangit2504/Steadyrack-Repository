import { useState, useEffect } from "react";
import { ShoppingBag, Plus } from "lucide-react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import productsData from "../../data/data.json";
import { useNavigate } from "react-router-dom";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [activeProductId, setActiveProductId] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
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
    console.log(
      "Navigating to:",
      `/product/${encodeURIComponent(productName)}`
    );
    navigate(`/product/${encodeURIComponent(productName)}`);
  };

  // Handle touch events for mobile
  const handleProductTouch = (productId) => {
    setActiveProductId(productId === activeProductId ? null : productId);
  };

  return (
    <div
      data-aos="fade-up"
      className="container-fluid mx-auto pt-12 pb-20 px-5"
    >
      <h2 className="text-2xl h-9 sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3px] ">
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer transition overflow-hidden bg-white"
            onClick={() => handleProductClick(product.name)}
          >
            <div
              className="relative bg-gray-100 overflow-hidden"
              onMouseEnter={() => setActiveProductId(product.id)}
              onMouseLeave={() => setActiveProductId(null)}
              onTouchStart={() => handleProductTouch(product.id)}
            >
              <img
                src={
                  activeProductId === product.id && product.hoverImage
                    ? product.hoverImage
                    : product.primaryImage
                }
                alt={product.name}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
              />

<div className="absolute bottom-4 right-4">
        <div className="relative">
          <button
            className={`
              flex items-center justify-center
              rounded-full bg-white p-2
              transition-all duration-300
              ${hoveredButton === product.id ? 'px-4' : 'w-12 h-12'} // Thêm padding khi hover
            `}
            onClick={(e) => {
              console.log("Quick View button clicked");
              e.stopPropagation();
            }}
            onMouseEnter={() => setHoveredButton(product.id)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {hoveredButton !== product.id && (
              <ShoppingBag size={16} className="flex-shrink-0" />
            )}
            {hoveredButton === product.id && (
              <><ShoppingBag size={14} className="mr-1" /><span className="text-xs font-medium whitespace-nowrap">QUICK VIEW</span></>
            )}
          </button>
        </div>
      </div>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <h3 className="text-base sm:text-lg font-semibold truncate max-w-xs">
                  {product.name}
                </h3>
                <p className="text-black ml-2 flex-shrink-0">
                  {product.rating}
                </p>
              </div>
              {product.category && (
                <p className="text-gray-500 text-xs sm:text-sm">
                  {product.category}
                </p>
              )}
              <p className="text-black font-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button 
        className="bg-white text-black py-3.5 px-5 rounded-full border-2 border-black font-semibold hover:bg-red-700 hover:text-white transition" 
        onClick={() => (window.location.href = "/collections/all")}
      >
        SHOW ALL
      </button>
      </div>
    </div>
  );
}
