import { useState } from "react";
import { ShoppingBag } from "lucide-react";

const allProducts = [
  {
    id: 1,
    name: "ProFlex Rack",
    price: "$119.99",
    rating: "★★★★★",
    image: "/src/assets/ProFlexSizesWhite.webp",
  },
  {
    id: 2,
    name: "GearMate Bundle",
    price: "$79.99",
    rating: "★★★★★",
    image: "/src/assets/GearMateSpineWhite.webp",
  },
  {
    id: 3,
    name: "GearMate SteadySpine",
    price: "$14.99",
    rating: "★★★★★",
    image: "/src/assets/GM-Spine_Ghost.webp",
  },
  {
    id: 4,
    name: "Mountain Bike Rack",
    price: "$89.99",
    rating: "★★★★★",
    description: "MTB, eMTB, Gravel",
    image: "/assets/mountain-bike-rack.png",
  },
  {
    id: 5,
    name: "Wall Mount Bike Rack",
    price: "$99.99",
    rating: "★★★★★",
    image: "/assets/wall-mount-bike.png",
  },
  {
    id: 6,
    name: "Car Roof Cargo Box",
    price: "$149.99",
    rating: "★★★★☆",
    image: "/assets/cargo-box.png",
  },
];

export default function FeaturedProducts() {
  const [showAll, setShowAll] = useState(false); // Trạng thái để hiển thị tất cả sản phẩm

  const displayedProducts = showAll ? allProducts : allProducts.slice(0, 4); // Lấy 4 sản phẩm hoặc tất cả

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-contain"
              />
              <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md">
                <ShoppingBag size={18} />
              </button>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            {product.description && (
              <p className="text-gray-500 text-sm">{product.description}</p>
            )}
            <p className="text-gray-700">{product.price}</p>
            <p className="text-yellow-500">{product.rating}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
      <button
          onClick={() => setShowAll(!showAll)}
          className="border border-black px-6 py-2 rounded-full text-black hover:bg-red-700 hover:text-white transition"
        >
          {showAll ? "SHOW LESS" : "SHOP ALL"}
        </button>
      </div>
    </div>
  );
}