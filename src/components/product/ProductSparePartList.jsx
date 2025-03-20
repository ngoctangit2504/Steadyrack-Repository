import { useState, useEffect } from "react";
import ProductCard from "./ProductItem.jsx";
import data from "../../data/data.json";

export default function ProductList() {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Lỗi tải dữ liệu:", error));
  }, []);

  const filteredProducts = products.filter(product => 
    product.name && product.name.toLowerCase().includes("classic range")
  );

  return (
    <div>
      <h2 className="text-sm ml-6">{filteredProducts.length} ITEMS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[1px]">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}