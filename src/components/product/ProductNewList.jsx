import { useState, useEffect } from "react";
import ProductCard from "./ProductItem.jsx";
import data from "../../data/data.json";

export default function ProductNewList() {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Lỗi tải dữ liệu:", error));
  }, []);

  const limitedProducts = products.slice(0, 3);

  return (
    <div className="m-6">
      <h2 className="text-sm font-bold ml-6">{limitedProducts.length} ITEMS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[1px]">
        {limitedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}