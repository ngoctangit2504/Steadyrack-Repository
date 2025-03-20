import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import productsData from "../../data/data.json";
import FeaturedProduct from "../../components/featured products/FeaturedProduct";
import BrandCarousel from "../../components/carousel/BrandsCarousel";

const ProductDetailPage = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedProFlexOption, setSelectedProFlexOption] = useState(null);

  useEffect(() => {
    const decodedName = decodeURIComponent(productName);
    const foundProduct = productsData.find((item) => item.name === decodedName);

    if (foundProduct) {
      // Convert to new format if the product doesn't have images array
      if (!foundProduct.images) {
        foundProduct.images = [
          foundProduct.primaryImage,
          foundProduct.hoverImage,
        ].filter(Boolean);
      }
      
      setProduct(foundProduct);
      setSelectedImage(foundProduct.primaryImage || (foundProduct.images && foundProduct.images[0]));
      
      // Set default selected size if available
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
      
      // Set default ProFlex option if available
      if (foundProduct.proFlexOptions) {
        const availableOptions = Object.entries(foundProduct.proFlexOptions)
          .filter(([_, available]) => available)
          .map(([option]) => option);
          
        if (availableOptions.length > 0) {
          setSelectedProFlexOption(availableOptions[0]);
        }
      }
    }
    setLoading(false);
  }, [productName]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!product) {
    return <div className="p-8 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity,
      selectedSize,
      selectedProFlexOption,
    });
    openCart();
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const hasSizes = product.sizes && product.sizes.length > 0;

  return (
    <div>
         <div className="max-w-screen-2xl mx-auto px-2 py-8 grid md:grid-cols-3 gap-12">
 
  <div className="flex col-span-2">
    
    <div className="flex flex-col gap-2 mr-4">
      {product.images?.map((image, index) => (
        <div 
          key={index}
          className={`cursor-pointer border w-16 h-16 flex items-center justify-center ${selectedImage === image ? 'border-black' : 'border-gray-200'}`}
          onClick={() => handleThumbnailClick(image)}
        >
          <img
            src={image}
            alt={`${product.name} thumbnail ${index + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>
    
    <div className="w-full aspect-square">
      <img
        src={selectedImage || product.image}
        alt={product.name}
        className="w-full h-full object-contain"
      />
    </div>
  </div>

  <div className="flex flex-col col-span-1">
    <div className="grid grid-cols-2 mb-4">
      <p className="text-sm mt-1">{product.rating} ★ (2 Reviews)</p>
      <a className="text-red-600 text-end hover:underline cursor-pointer">Subscribe to Save 10%</a>
    </div>
    
    <h1 className="text-3xl font-semibold">{product.name}</h1>
    <p className="text-3xl font-semibold mt-2">{product.price}</p>
    <p className="text-xl mt-4">{product.detail}</p>

    <div className="grid mt-6">
    {product.proFlexNarrow && product.proFlexNarrow.length > 0 && (
      <h3 className="text-base font-medium mb-2">ProFlex Narrow: {Array.isArray(product.proFlexNarrow) ? product.proFlexNarrow.join(', ') : product.proFlexNarrow}</h3>
    )}

    {product.proFlexWide && product.proFlexWide.length > 0 && (
      <h3 className="text-base font-medium mb-2">ProFlex Wide: {Array.isArray(product.proFlexWide) ? product.proFlexWide.join(', ') : product.proFlexWide}</h3>
      )}

      {product.proFlexFat && product.proFlexFat.length > 0 && (
      <h3 className="text-base font-medium mb-2">ProFlex Fat: {Array.isArray(product.proFlexFat) ? product.proFlexFat.join(', ') : product.proFlexFat}</h3>
      )}

    </div>

    
    {hasSizes && (
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Size: {selectedSize}</h3>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 border ${
                selectedSize === size
                  ? "bg-black text-white border-black"
                  : "bg-white border-gray-300 hover:border-gray-500"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    )}

    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="flex items-center justify-center">
        <button
          className="w-10 h-10 bg-gray-200 text-xl rounded-full flex items-center justify-center"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        >
          -
        </button>
        <span className="mx-4 text-xl">{quantity}</span>
        <button
          className="w-10 h-10 bg-gray-200 text-xl rounded-full flex items-center justify-center"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <button
        className="col-span-2 bg-black text-white text-lg py-3 px-6 rounded-lg w-full hover:bg-gray-800 transition"
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>
    </div>
    
    <p className="text-sm text-gray-500 mt-2">
      or 4 interest-free payments of{" "}
      <span className="font-bold text-black">${(parseFloat(product.price.replace('$', '')) / 4).toFixed(2)}</span>{" "}
      with <span className="text-green-600 font-semibold">Afterpay</span> 🛈
    </p>
    
    <div className="border-t mt-6">
      {["Why Steadyrack?", "What's Included?", "Shipping & Returns"].map((title) => (
        <div key={title} className="border-b py-3 cursor-pointer flex justify-between items-center">
          <span className="text-lg font-medium">{title}</span>
          <span className="text-xl font-bold">+</span>
        </div>
      ))}
    </div>
  </div>
</div>

    <BrandCarousel/>
    <FeaturedProduct/>

    </div>
  );
};

export default ProductDetailPage;