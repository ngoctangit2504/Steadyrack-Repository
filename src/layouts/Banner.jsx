import React, { useState, useEffect } from "react";

const AnnouncementBar = () => {
  const announcements = [
    'Free Shipping to Select Locations. <a href="#" className="underline">Learn More</a>',
    'Subscribe & Save 10% <a href="#" className="underline">Learn More</a>',
    'Our Newest Innovations HaveLanded. Discover<a href="#" className="underline">Pro Flex</a> and <a href="#" className="underline">Gear Mate</a>'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState('visible');

  useEffect(() => {
    const intervalId = setInterval(() => {
    
      setAnimationState('slideOut');
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        setAnimationState('slideIn');
      }, 500);
      
      setTimeout(() => {
        setAnimationState('visible');
      }, 1000); 
      
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-black text-white text-center py-2 text-sm overflow-hidden ">
      <div 
        className={`transition-all duration-500 ${
          animationState === 'slideOut' ? 'transform -translate-x-full opacity-0' : 
          animationState === 'slideIn' ? 'transform translate-x-0 opacity-100' : 
          'transform translate-x-0'
        }`}
        dangerouslySetInnerHTML={{ __html: announcements[currentIndex] }}
      />
    </div>
  );
};

export default AnnouncementBar;