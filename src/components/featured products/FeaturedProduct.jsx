import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import ButtonA from "../buttons/ButtonA";
import productsData from "../../data.json"; // Đường dẫn tới file data.json của bạn
import { useNavigate } from "react-router-dom";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
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

  return (
    <div className="max-w-7xl mx-auto px-0 py-12">
      <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-1">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="cursor-pointer hover:shadow-lg transition"
            onClick={() => {
              console.log("Div clicked for product:", product.name);
              handleProductClick(product.name);
            }}
          >
            <div 
              className="relative bg-gray-100 overflow-hidden"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <img
                src={hoveredProductId === product.id && product.hoverImage ? product.hoverImage : product.primaryImage}
                alt={product.name}
                className="w-full h-80 object-cover"
                onClick={(e) => {
                  console.log("Image clicked for product:", product.name);
                  e.stopPropagation();
                  handleProductClick(product.name);
                }}
              />

              <div className="relative group">
                <button 
                  className="absolute bottom-4 right-4 flex items-center bg-white w-10 p-2 rounded-full shadow-md border border-gray-200 overflow-hidden transition-all duration-300 group-hover:w-32"
                  onClick={(e) => {
                    console.log("Quick view button clicked");
                    e.stopPropagation();
                    // Thêm chức năng quick view khi cần
                  }}
                >
                  <ShoppingBag size={18} className="flex-shrink-0" />
                  <span className="ml-2 text-sm font-semibold opacity-0 hidden group-hover:opacity-100 group-hover:block transition-opacity duration-300">
                    QUICK VIEW
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-black mr-6">{product.rating}</p>
              </div>
              {product.category && (
                <p className="text-gray-500 text-sm">{product.category}</p>
              )}
              <p className="text-black">{product.price}</p>
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