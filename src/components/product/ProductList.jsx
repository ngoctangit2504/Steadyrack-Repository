import { useState, useEffect } from "react";
import ProductCard from "./ProductItem.jsx";
import data from "../../data.json";

export default function ProductList() {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Lỗi tải dữ liệu:", error));
  }, []);

  return (
    <div>
    <h2 className="text-sm ml-6">{products.length} ITEMS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[1px]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}