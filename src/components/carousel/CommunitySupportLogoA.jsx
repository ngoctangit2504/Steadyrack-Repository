import React, { useEffect, useState, useRef } from 'react';
import brandData from '../../data/communityData.json';

const FullWidthCarousel = () => {
  const { brands } = brandData;

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
                  src={brand.image} 
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