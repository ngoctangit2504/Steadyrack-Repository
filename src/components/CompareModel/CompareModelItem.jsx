import { useState } from "react";

const CompareModelItem = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full p-3 rounded-lg border border-white shadow-md transition hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>

        <div className="relative flex justify-center items-center my-2">
          <img
            src={isHovered ? product.hoverImage : product.primaryImage}
            alt={product.name}
            className="w-24 h-24 object-contain rounded-md"
          />
        </div>

        <hr className="my-2" />

        {product.wheelDiameter && (
          <div className="mb-2">
            <p className="font-medium text-sm">Wheel Diameter</p>
            <p className="text-sm">{product.wheelDiameter}</p>
          </div>
        )}

        {product.tireWidth && (
          <div className="mb-2">
            <p className="font-medium text-sm">Tire Width</p>
            <p className="text-sm">{product.tireWidth}</p>
          </div>
        )}

        {product.maximumWeight && (
          <div className="mb-2">
            <p className="font-medium text-sm">Maximum Weight</p>
            <p className="text-sm">{product.maximumWeight}</p>
          </div>
        )}

        {product.fenders && (
          <div className="mb-2">
            <p className="font-medium text-sm">Fenders/Mudguards</p>
            <p className="text-sm">{product.fenders}</p>
          </div>
        )}

        {product.includesGearMateSteadySpine && (
          <div className="mb-2">
            <p className="font-medium text-sm">Includes GearMate SteadySpine</p>
            <p className="text-sm">{product.includesGearMateSteadySpine}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareModelItem;
