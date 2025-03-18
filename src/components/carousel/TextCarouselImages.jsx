import React, { useState, useEffect } from 'react';
import Pic1 from "../../assets/Rectangle_13.webp";
import Pic2 from "../../assets/Dedicated_to_quality_2.webp";
import Pic3 from "../../assets/HERO_copy.webp";
import Pic4 from "../../assets/TESTING_STUFF.webp";

const TextCarouselImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  
  const carouselData = [
    {
      image: Pic1,
      heading: "PIONEERING INNOVATORS",
      text: "We are trailblazers and explorers, always seeking opportunities to improve and innovate."
    },
    {
      image: Pic2,
      heading: "ICONICALLY AUSTRALIAN",
      text: "We're an Australian company, with larrikin charm, straight-talking honesty, and a global reach."
    },
    {
      image: Pic3,
      heading: "WE VALUE FAMILY",
      text: "Born from a family BBQ, we take good-old fashioned customer service personally."
    },
    {
      image: Pic4,
      heading: "BUILT TO LAST",
      text: "We design and craft our products to endure, minimizing waste and reducing landfill."
    }
  ];
  
  // Auto-rotate slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [activeIndex, carouselData.length]);
  
  return (
    <div className="overflow-hidden py-5 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side: Text content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            {carouselData.map((item, index) => (
            <div 
            key={`text-${index}`}
            className={`transition-all duration-500 flex flex-col justify-between h-full ${
             activeIndex === index ? 'opacity-100 flex' : 'opacity-0 hidden'
            }`}
            style={{ minHeight: "400px" }}
             >
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-black leading-tight italic">
             {item.heading}
            </h2>
            <p className="text-lg md:text-xl font-medium text-black max-w-md">
           {item.text}
           </p>
          </div>
           ))}
         </div>
          
          {/* Right side: Images */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 relative overflow-hidden">
            <div className="aspect-square w-full relative">
              {carouselData.map((item, index) => (
                <div 
                  key={`image-${index}`}
                  className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'top-0' : index === prevIndex ? '-top-full' : 'top-full'
                  }`}
                >
                  <img 
                    src={item.image} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute text-white bottom-4 left-4 text-8xl font-medium">
                    /0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCarouselImages;