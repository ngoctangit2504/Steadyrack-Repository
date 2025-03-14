import { useState } from "react";
import { ShoppingBag, ShoppingCart } from "lucide-react";

import { useCart } from '../../contexts/CartContext';

const ProductItem = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const { addItem, openCart } = useCart();
  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity: 1
    });
    openCart();
  };


  return (
    <div
      className="w-full p-2 hover:shadow-lg transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="relative">
        <img
          src={isHovered ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-[480px] object-cover"
        />

        {isHovered && (
          <button
            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md transition-all duration-200 flex items-center gap-2"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            onClick={handleAddToCart}
          >
            {buttonHovered ? (
              <>
                <ShoppingCart size={20} />
                <span className="text-sm font-medium">ADD TO CART</span>
              </>
            ) : (
              <ShoppingBag size={20} />
            )}
          </button>
        )}
      </div>

      <div className="p-2">
        <div className="grid grid-cols-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-end">{product.rating}</p>
        </div>

        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="font-bold">{product.price}</p>
        
      </div>
    </div>
  );
};

export default ProductItem;