import { useState, useEffect } from "react";
import { ShoppingBag, Plus } from "lucide-react";
import ButtonA from "../buttons/ButtonA";
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
      data-aos="fade-left"
      className="container-fluid mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
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

              <div className="absolute bottom-2 right-2">
                <div className="relative">
                  <button
                    className="flex items-center justify-center bg-white p-2 transition-all duration-300"
                    onClick={(e) => {
                      console.log("View port button clicked");
                      e.stopPropagation();
                    }}
                    onMouseEnter={() => setHoveredButton(product.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <ShoppingBag size={16} className="flex-shrink-0" />
                  </button>
                  {hoveredButton === product.id && (
                    <div className="absolute right-full bottom-0 mr-2 whitespace-nowrap z-10 bg-white px-2 py-1 rounded-md shadow-sm flex items-center">
                      <Plus size={14} className="mr-1" />
                      <span className="text-xs font-medium">VIEW PORT</span>
                    </div>
                  )}
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
      <div className="flex justify-center mt-6">
        <ButtonA
          text={"SHOW ALL"}
          onClick={() => (window.location.href = "/collections/all")}
        />
      </div>
    </div>
  );
}
