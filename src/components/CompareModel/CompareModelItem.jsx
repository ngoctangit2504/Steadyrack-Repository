import { useState } from "react";

const CompareModelItem = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full sm:w-[6cm] md:w-[7cm] lg:w-[8cm] p-2 rounded-lg border border-white shadow-lg transition hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col">
        
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>

        <div className="relative">
          <img
            src={isHovered ? product.hoverImage : product.primaryImage}
            alt={product.name}
            className="w-20 h-20 object-cover rounded-md"
          />
        </div>

        <hr className="my-2" />

        {product.wheelDiameter && (
          <div>
            <p className="font-medium">Wheel Diameter</p>
            <p>{product.wheelDiameter}</p>
            <hr className="my-2" />
          </div>
        )}

        {product.tireWidth && (
          <div>
            <p className="font-medium">Tire Width</p>
            <p>{product.tireWidth}</p>
            <hr className="my-2" />
          </div>
        )}

        {product.maximumWeight && (
          <div>
            <p className="font-medium">Maximum Weight</p>
            <p>{product.maximumWeight}</p>
            <hr className="my-2" />
          </div>
        )}

        {product.fenders && (
          <div>
            <p className="font-medium">Fenders/Mudguards</p>
            <p>{product.fenders}</p>
            <hr className="my-2" />
          </div>
        )}

        {product.includesGearMateSteadySpine && (
          <div>
            <p className="font-medium">Includes GearMate SteadySpine</p>
            <p>{product.includesGearMateSteadySpine}</p>
            <hr className="my-2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareModelItem;
