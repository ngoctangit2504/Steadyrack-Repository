import { useState, useEffect, useRef } from "react";
import CompareModelItem from "./CompareModelItem";
import data from "../../data/data.json";

export default function CompareModelList({ selectedProducts }) {
  const [products, setProducts] = useState([]);
  const scrollContainerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    
    const filteredLocalData =
      selectedProducts.length > 0
        ? data.filter((product) => selectedProducts.includes(product.name))
        : data.filter((product) => product.type === "pro");

    setProducts(filteredLocalData);

    fetch("/data.json")
      .then((response) => response.json())
      .then((fetchedData) => {
        const filteredData =
          selectedProducts.length > 0
            ? fetchedData.filter((product) => selectedProducts.includes(product.name))
            : fetchedData.filter((product) => product.type === "pro");

        setProducts(filteredData);
      })
      .catch((error) => console.error("Lỗi tải dữ liệu:", error));
  }, [selectedProducts]); 

  
  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div data-aos="fade-up" className="w-full px-4 relative">
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 cursor-grab active:cursor-grabbing select-none px-2"
        style={{
          overflowX: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="w-32 sm:w-40 md:w-48 lg:w-[8cm] flex-shrink-0"
            >
              <CompareModelItem product={product} />
            </div>
          ))
        ) : (
          <p className="text-center w-full">Không có sản phẩm phù hợp</p>
        )}
      </div>
    </div>
  );
}