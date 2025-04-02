import { useState, useEffect } from "react";
import ProductCard from "./ProductItem.jsx";
import data from "../../data/data.json";
import { useSidebar } from "../../hooks/useSidebar.js";
import { Filter, ArrowUpDown } from "lucide-react";

export default function ProductList() {
  const [products, setProducts] = useState(data);

  const { toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Featured");

  const sortOptions = [
    "Featured",
    "Best selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, old to new",
    "Date, new to old",
  ];

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsOpen(false);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Lỗi tải dữ liệu:", error));
  }, []);

  const filteredProducts = products.filter(
    (product) => product.name && product.name.toLowerCase().includes("gearmate")
  );

  return (
    <div>
      <div className="flex items-center justify-between py-2.5">
        <h2 className="text-sm ml-6 py-2.5 font-semibold">
          {filteredProducts.length} ITEMS
        </h2>
        <div className="flex items-center space-x-1 mr-6">
          <button
            onClick={toggleSidebar}
            className="flex items-center text-sm font-semibold bg-gray-200 rounded-full py-1.5 px-2.5 transition-colors space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>FILTER</span>
          </button>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center text-sm font-semibold bg-gray-200 rounded-full py-1.5 px-2.5 transition-colors space-x-2"
            >
              <ArrowUpDown className="w-4 h-4" />
              <span>SORT</span>
            </button>

            {isOpen && (
              <div className="absolute right-0 w-[188px] bg-white border border-black z-10">
                <div className="pb-5 pt-1">
                  {sortOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleSortSelect(option)}
                      className="flex items-center px-1 py-1 hover:bg-gray-100 cursor-pointer text-left text-sm"
                    >
                      <div
                        className={`w-3 h-3 rounded-full border mr-2 relative ${
                          selectedSort === option
                            ? "bg-black border-black"
                            : "bg-white border-black"
                        }`}
                      >
                        {selectedSort === option && (
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[1px]">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
