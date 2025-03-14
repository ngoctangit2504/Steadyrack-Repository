import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import ButtonA from "../buttons/ButtonA";
import ProFlexSizesWhiteImg from "../../assets/ProFlexSizesWhite.png";
import GearMateBundleImg from "../../assets/GearMateSpineWhite_f626826e-6e7c-4f45-99cd-876ec4bf19d9.png";
import GearMateSteadySpine from "../../assets/GM-Spine_Ghost.png";
import MountainBikeRack from "../../assets/MTB_1.png";

import ProFlexSaddlesImg from "../../assets/ProFlexSaddles.png";
import GearMasterWithRackImg from "../../assets/GearMateWithRack_Accessories_1b29874c-f3c3-4796-affa-1e53db795747.png";
import GearMasterTopImg from "../../assets/GearMateSpineTopWhite.png";
import ClassicMTBImg from "../../assets/Classic_MTB_fullset.png";


const allProducts = [{id: 1,name: "ProFlex Rack",price: "$119.99",rating: "★★★★★",image: ProFlexSizesWhiteImg,hoverImage: ProFlexSaddlesImg,},
  {id: 2,name: "GearMate Bundle",price: "$79.99",rating: "★★★★★",image: GearMateBundleImg,hoverImage: GearMasterWithRackImg,},
  {id: 3,name: "GearMate SteadySpine",price: "$14.99",rating: "★★★★★",image: GearMateSteadySpine,hoverImage: GearMasterTopImg,},
  {id: 4,name: "Mountain Bike Rack",price: "$89.99",rating: "★★★★★",description: "MTB, eMTB, Gravel",image: MountainBikeRack,hoverImage:ClassicMTBImg,},
];

export default function FeaturedProducts() {
  const [showAll, setShowAll] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const displayedProducts = showAll ? allProducts : allProducts.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-0 py-12">
  <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-1">
    {displayedProducts.map((product) => (
      <div key={product.id}>
        <div 
          className="relative bg-gray-100 overflow-hidden"
          onMouseEnter={() => setHoveredProductId(product.id)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          <img
            src={hoveredProductId === product.id && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-80 object-cover"
          />

<div className="relative group">
  <button className="absolute bottom-4 right-4 flex items-center bg-white w-10 p-2 rounded-full shadow-md border border-gray-200 overflow-hidden transition-all duration-300 group-hover:w-32">
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
          {product.description && (
            <p className="text-gray-500 text-sm">{product.description}</p>
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