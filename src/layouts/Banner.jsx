import React, { useState, useEffect } from "react";

const AnnouncementBar = ({ className }) => {
  const announcements = [
    {
      text: "Free Shipping to Select Locations.",
      link: "#",
      linkText: "Learn More"
    },
    {
      text: "Subscribe & Save 10%",
      link: "#",
      linkText: "Learn More"
    },
    {
      text: "Our Newest Innovations Have Landed. Discover",
      links: [
        { text: "Pro Flex", link: "#" },
        { text: "Gear Mate", link: "#" }
      ]
    }
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

  const renderAnnouncement = (announcement) => {
    if (announcement.links) {
      return (
        <div className="flex items-center justify-center space-x-1">
          <span>{announcement.text}</span>
          {announcement.links.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span>and</span>}
              <a 
                href={link.link} 
                className="relative group inline-flex items-center"
              >
                <span className="relative">
                  {link.text}
                  <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-white transition-transform duration-300 ease-out scale-x-100 group-hover:scale-x-0"></span>
                </span>
              </a>
            </React.Fragment>
          ))}
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center space-x-1">
        <span>{announcement.text}</span>
        <a 
          href={announcement.link} 
          className="relative group inline-flex items-center"
        >
          <span className="relative">
            {announcement.linkText}
            <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-white transition-transform duration-300 ease-out scale-x-100 group-hover:scale-x-0"></span>
          </span>
        </a>
      </div>
    );
  };

  return (
    <div className={`bg-black text-white text-center flex items-center justify-center text-sm font-semibold overflow-hidden h-[30px] ${className}`}>
      <div
        className={`transition-all duration-500 ${
          animationState === 'slideOut' ? 'transform -translate-x-full opacity-0' :
          animationState === 'slideIn' ? 'transform translate-x-full opacity-0' :
          'transform translate-x-0 opacity-100'
        }`}
      >
        {renderAnnouncement(announcements[currentIndex])}
      </div>
    </div>
  );
};

export default AnnouncementBar;