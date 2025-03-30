import React, { useEffect, useState, useRef } from 'react';

const FullWidthCarousel = () => {
  const brands = [
    {
      "id": 1,
      "name": "Brand 1",
      "title": "Canuck Place Children'sHospice",
      "text": "A place of comfort and compassion where children can receive expert clinical care while experiencing the simple joys of being a child with their families at their side savouring their time together.",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png.png?v=1734203423&width=400" // Thay đổi URL
    },
    {
      "id": 2,
      "name": "Brand 2",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_2_png.png?v=1734203460&width=400"  // Thay đổi URL
    },
    {
      "id": 3,
      "name": "Brand 3",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_224bf075-5512-43cc-b930-b66cd2bdbc5e.png?v=1734203502&width=400"  // Thay đổi URL
    },
     {
      "id": 4,
      "name": "Brand 4",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png_c9984852-0a97-42f8-a4fa-0ba89509d7e3.png?v=1734203548&width=400"  // Thay đổi URL
    },
     {
      "id": 5,
      "name": "Brand 5",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_2_png_17440c7f-01bc-4a06-95b1-46166e996a21.png?v=1734203582&width=400"  // Thay đổi URL
    },
     {
      "id": 6,
      "name": "Brand 6",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_37fa358a-037b-45ae-baab-ee59d8720b3e.png?v=1734203643&width=400"  // Thay đổi URL
    },
     {
      "id": 7,
      "name": "Brand 7",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png_1bf23ac7-77de-47ba-94ee-b061c5742bb5.png?v=1734203643&width=400"  // Thay đổi URL
    },
     {
      "id": 8,
      "name": "Brand 8",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_9348430c-9d2c-4dd6-b736-19c2f8ec5228.png?v=1734203762&width=400"  // Thay đổi URL
    },
     {
      "id": 9,
      "name": "Brand 9",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_3_png.png?v=1734203762&width=400"  // Thay đổi URL
    },
     {
      "id": 10,
      "name": "Brand 10",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_4_png.png?v=1734203932&width=400"  // Thay đổi URL
    },
     {
      "id": 11,
      "name": "Brand 11",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png_47046a45-9d59-427f-b518-ff92270dfc07.png?v=1734203932&width=400"  // Thay đổi URL
    },
     {
      "id": 12,
      "name": "Brand 12",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_a236e2c6-6690-4d33-a133-2067d354fdff.png?v=1734203932&width=400"  // Thay đổi URL
    },
     {
      "id": 13,
      "name": "Brand 13",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_2_png_cdbc89a5-805f-4c4f-a35e-b4f3661419ad.png?v=1734203932&width=400"  // Thay đổi URL
    },
     {
      "id": 14,
      "name": "Brand 14",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_3_png_95df75a3-1f59-4aac-b478-b2cc1362d408.png?v=1734203933&width=400"  // Thay đổi URL
    },
     {
      "id": 15,
      "name": "Brand 15",
      "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_png_153a1a79-a7d4-42e0-b2f1-0c0c22837148.png?v=1734206657&width=400"  // Thay đổi URL
    },
    {
     "id": 16,
     "name": "Brand 16",
     "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_4_png_c172a85d-9ffb-42e7-b018-f41ddd790191.png?v=1734206657&width=400"  // Thay đổi URL
   },
   {
    "id": 17,
    "name": "Brand 17",
    "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_3_png_3224f82b-5666-4017-b41c-9d5d5e71d579.png?v=1734206657&width=400"  // Thay đổi URL
  },
  {
   "id": 18,
   "name": "Brand 18",
   "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_2_png_874a46a3-d5c9-41e4-966f-e9dcec2e79b1.png?v=1734206657&width=400"  // Thay đổi URL
 },
 {
  "id": 19,
  "name": "Brand 19",
  "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png_178e7a44-3860-40d1-b5a2-e816d44d2529.png?v=1734206657&width=400"  // Thay đổi URL
},
{
 "id": 20,
 "name": "Brand 20",
 "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_copy_5_png.png?v=1734206657&width=400"  // Thay đổi URL
},
{
 "id": 21,
 "name": "Brand 21",
 "image": "https://www.steadyrack.com/cdn/shop/files/dwellingup_100_360x_png.png?v=1734202173&width=400"  // Thay đổi URL
}
  ];

  const duplicatedBrands = [...brands, ...brands];
  
  const brandWidth = 200; 
  const totalWidth = brands.length * brandWidth;
  
  // Bắt đầu từ giá trị âm để các logo xuất hiện từ bên trái
  const [position, setPosition] = useState(-totalWidth);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  
  const animate = () => {
    setPosition(prevPosition => {
      if (prevPosition >= 0) {
        return -totalWidth;
      }
      return prevPosition + 0.1; 
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);


  const handleClick = () => {
    setIsPaused(prevState => !prevState);
  };

  useEffect(() => {
    if (isPaused) {
      cancelAnimationFrame(animationRef.current);
    } else {
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div className="w-full">
      <div 
        className="w-full overflow-hidden cursor-pointer"
        onClick={handleClick}
        ref={carouselRef}
      >
        <div 
          className="flex items-center"
          style={{ 
            transform: `translateX(${position}px)`,
            width: `${duplicatedBrands.length * brandWidth}px`,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 px-2"
              style={{ width: `${brandWidth}px` }}
            >
              <div className="bg-white p-8 shadow-sm h-32 flex items-center justify-center">
                <img 
                  src={brand.image} // Sử dụng trực tiếp link ảnh
                  alt={brand.name}
                  className="max-w-full max-h-28 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullWidthCarousel;