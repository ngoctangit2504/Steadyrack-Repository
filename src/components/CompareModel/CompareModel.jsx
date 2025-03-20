import React, { useState } from "react";
import { motion } from "framer-motion";
import CompareModelList from "./CompareModelList";

function CompareModel() {
  const products = [
    "ProFlex Rack",
    "GearMate Bundle",
    "GearMate SteadySpine",
    "Classic Rack",
    "eBike Rack",
    "Fat Rack",
    "Fender Rack",
    "Mountain Bike Rack",
  ];

  const [expanded, setExpanded] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleProduct = (product) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  return (
    <div data-aos="fade-up" className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <h2 className="text-4xl font-bold text-black text-center md:text-left">
          Compare the Models
        </h2>

        <div className="hidden md:block"></div>

        <div className="bg-white p-4 rounded-lg w-full">
          <button
            className="w-full text-left flex justify-between items-center font-medium text-black py-2"
            onClick={() => setExpanded(!expanded)}
          >
            Select Products
            {selectedProducts.length > 0 && (
              <span className="text-sm text-black">
                ({selectedProducts.length})
              </span>
            )}
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-black">
              {expanded ? "➖" : "➕"}
            </span>
          </button>
          <hr className="border-t border-gray-200 my-2" />
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Ban đầu ẩn
            animate={{
              opacity: expanded ? 1 : 0,
              height: expanded ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {products.map((product) => (
                <label key={product} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 appearance-none border border-black checked:bg-black checked:text-white checked:border-black"
                    checked={selectedProducts.includes(product)}
                    onChange={() => toggleProduct(product)}
                  />
                  <span className="text-black">{product}</span>
                </label>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <CompareModelList selectedProducts={selectedProducts} />
    </div>
  );
}

export default CompareModel;