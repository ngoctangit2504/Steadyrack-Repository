import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import productsData from "../../data/data.json";
import FeaturedProduct from "../../components/featured products/FeaturedProduct";
import BrandCarousel from "../../components/carousel/BrandsCarousel";
import LineVideo from "../../components/videoComponent/LineVideo";
import FAQ from "../../components/faq/FAQ";
import ReviewComponent from "../../components/review/ReviewComponent";
import VideoBannerContent from "../../components/backround Intro/VideoBannerContent";
import RichTextTitle from "../../components/TextTitle/RichTextTitle";
import BackroundFind from "../../assets/Choosing_right_rack_Home_page_2160_x_1440_px.png";
import VideoOverlay from '../../components/videoComponent/VideoOverlay';
import VideoBody from "../../assets/videos/introducing-the-new-proflex-bike-rack3.mp4";


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
    if (!selectedSize && product.sizes && product.sizes.length > 0) {
      alert("Please select a size.");
      return;
  }
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
        className="col-span-2 bg-black text-white text-lg py-3 px-6 rounded-full w-full hover:bg-gray-800 transition"
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

    <div 
      className="grid grid-cols-1 gap-4 py-8 px-4 aos-animate" 
      data-aos="fade-up" 
      data-aos-anchor="#product" 
      data-aos-delay="500"
    >
      <div className="flex items-center">
        <span className="flex items-center justify-center mr-3">
          <img 
            src="//www.steadyrack.com/cdn/shop/files/Layer_1-2_1.png?v=1735452416&width=96" 
            alt="" 
            srcSet="//www.steadyrack.com/cdn/shop/files/Layer_1-2_1.png?v=1735452416&width=96 96w" 
            width="96" 
            height="75" 
            loading="lazy" 
            className="w-6 md:w-6"
          />
        </span>
        <div className="text-sm md:text-base">
          <a href="/pages/shipping" title="Shipping">Free Shipping in Selected Countries*</a>
        </div>
      </div>
      
      <div className="flex items-center">
        <span className="flex items-center justify-center mr-3">
          <img 
            src="//www.steadyrack.com/cdn/shop/files/Layer_1-2_ffe887cc-df2a-4208-bcda-f35db22154da.png?v=1735452415&width=80" 
            alt="" 
            srcSet="//www.steadyrack.com/cdn/shop/files/Layer_1-2_ffe887cc-df2a-4208-bcda-f35db22154da.png?v=1735452415&width=80 80w" 
            width="80" 
            height="94" 
            loading="lazy" 
            className="w-[18px] md:w-5"
          />
        </span>
        <div className="text-sm md:text-base">
          <a href="/pages/standard-warranty" title="Standard Warranty">5 Year Warranty</a>
        </div>
      </div>
    </div>

    <LineVideo/>

    
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
   
   <div data-aos="fade-up" className="flex justify-center items-center h-64 bg-white px-4 overflow-hidden">
  <h1 className="text-11xl leading-none uppercase italic skew-x-10 font-impact tracking-tight whitespace-nowrap bg-gradient-to-r from-black via-gray to-lightgray text-transparent bg-clip-text">
    READY, STEADY, PRO.
  </h1>
</div>

<RichTextTitle title={"Introducing ProFlex. Innovation meets modern design in the all-new ProFlex. Built for convenience and durability, it’s bike storage reimagined."}/>

<VideoBannerContent
        videoUrl="/videos/Introducing the new ProFlex Bike Rack6.mp4"
        videoType="video/mp4"
        title="Steadyrack Ready"
        text="Designed to work seamlessly with all Steadyrack bike racks."
        iconUrl="https://www.steadyrack.com/cdn/shop/files/Icons_8.png?v=1739416076&width=194"
        autoplay={true}
        loop={true}
        muted={true}
      />

<div className='pt-11 pb-20'>
    <div className='px-5 mb-4'>
        <div data-aos="fade-up" className='mb-5'>
            <h1 className='text-4xl font-semibold text-black tracking-tight'>The Features You Need</h1>
        </div>
        <div className='mx-10 px-5'>
            <div className='grid grid-cols-12 gap-4'> {/* Loại bỏ h-screen, để nội dung tự điều chỉnh */}
                <div className="col-span-3 p-4 text-white flex flex-col"> {/* Loại bỏ items-center và justify-center từ đây */}
                    
                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">SteadyBracket™</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>A 3-hook system creates a secure support to either side of the SteadySpine, Available in three sizes.</p>
                    </div>

                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">SteadyBin™</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>Functional design to maximize access to your gear. Available in three sizes.</p>
                    </div>

                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">SteadySpine™</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>An innovative robust glass-filled nylon spine designed to support your gear.</p>
                    </div>


                </div>
                <div class="col-span-6 p-4 text-white flex items-center justify-center"> {/* Thêm items-center và justify-center vào đây */}
                    <img src='https://www.steadyrack.com/cdn/shop/files/image_1_3dca60f8-7ee0-4d68-97f8-fdce33ebc067.png?v=1737354642&width=2000'
                         className='w-full'/>  {/* Make image responsive */}
                </div>
                <div class="col-span-3 p-4 text-white flex flex-col"> {/* Loại bỏ items-center và justify-center từ đây */}
                <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">SteadyHook™</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>These versatile hooks can be flipped 180° to maximize use.</p>
                    </div>

                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">Easy Access</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>Obtuse exit angle allows for easy access and removal of smaller items.</p>
                    </div>

                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">SteadyLoop™</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>A hook and loop fastener for easy attachment of your gear.</p>
                    </div>
                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">Grub Screws</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>Allows for lockable positioning on all bins.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>


     <div data-aos="fade-up" className="relative w-full h-screen flex flex-col justify-start items-center text-center px-6 mx-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BackroundFind})`,
          }}
        ></div>
      </div>

      <div className='pt-9 pb-5'>
        <div className='px-5 grid grid-cols-2'>
           <div className='px-1.5'>
            <img src='https://www.steadyrack.com/cdn/shop/files/200_Arrangements_-_GearMate_PDP.png?v=1739416974&width=2000'/>
           </div>
           <div className=' flex px-1.5 items-center justify-center'>
             <div data-aos="fade-up" className='py-10 px-20'>
                <h1 className='text-black text-4xl font-semibold tracking-tight mb-5'>200+ Arrangements</h1>
                <p className='text-base test-black mb-5 leading-tight'>With over 200 arrangements, the GearMate storage organizer system lets you store your bike gear, your way.</p>
                <img src="https://www.steadyrack.com/cdn/shop/files/200_Arrangements_-_GearMate_PDP_2.png?v=1739417242&width=668"/>
                <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                Learn More
                </button>
             </div>
           </div>
        </div>
     </div>

<div className="my-6"> 
<div className="w-full h-full object-cover">
        <VideoOverlay
          videoSrc={VideoBody}
          title="Steadyrack Ready"
        />
      </div>
</div>
     

    <div className="my-6 relative z-10">
      <ReviewComponent/>
    </div>

    <FAQ/>
    <BrandCarousel/>
    <FeaturedProduct/>

    </div>
  );
};

export default ProductDetailPage;