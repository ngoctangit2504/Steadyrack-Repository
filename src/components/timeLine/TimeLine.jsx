import React, { useRef, useEffect, useState } from "react";

const timelineData = [
  {
    year: "2004",
    description:
      "CEO and Founder David Steadman with his father-in-law, developed the initial concept that has become what we now know as the Classic Rack, in three colors: Light Gray, Yellow, and Charcoal.",
    image: "//www.steadyrack.com/cdn/shop/files/2004_1.png?v=1737009144&width=3200",
  },
  {
    year: "2009",
    description:
      "After five years of crafting homemade prototypes, the patented Steadyrack was born. In 2009, we sold our first rack to local bike enthusiast Nick Sima—straight from the trunk of David Steadman's car.",
    image: "//www.steadyrack.com/cdn/shop/files/2009.png?v=1737010082&width=3200",
  },
  {
    year: "2009 - 2016",
    description:
      "As Steadyrack continued to grow, so did the need for employees to support the business. Our first employee came on board in 2016, selling Steadyrack bike racks from under the staircase in our very first office.",
    image: "//www.steadyrack.com/cdn/shop/files/2009-2016.png?v=1737010698&width=3200",
  },
  {
    year: "2021",
    description:
      "With business booming, we needed more room! In 2021, we moved to a larger space to support our expanding product lineup. This new location became our current Steadyrack HQ in Perth, Western Australia.",
    image: "//www.steadyrack.com/cdn/shop/files/2021.png?v=1737011609&width=3200",
  },
  {
    year: "2022",
    description:
      "The release of our eBike Rack (now discontinued), a valuable member of the collection. The launch of our eBike Rack was a game-changer, as it allowed for larger tire capacities and weights, compared to our original Fender Rack (discontinued).",
    image: "//www.steadyrack.com/cdn/shop/files/2022.png?v=1737011698&width=3200",
  },
  {
    year: "2023",
    description:
      "The release of our eBike Rack (now discontinued), a valuable member of the collection. The launch of our eBike Rack was a game-changer, as it allowed for larger tire capacities and weights, compared to our original Fender Rack (discontinued).",
    image: "https://www.steadyrack.com/cdn/shop/files/2023_72bbf6d9-4357-4228-a811-147fdb5f165f.png?v=1737013162&width=2000",
  },
  {
    year: "2024",
    description:
      "The release of our eBike Rack (now discontinued), a valuable member of the collection. The launch of our eBike Rack was a game-changer, as it allowed for larger tire capacities and weights, compared to our original Fender Rack (discontinued).",
    image: "https://www.steadyrack.com/cdn/shop/files/2024.png?v=1737014860&width=2000",
  },
  {
    year: "2025",
    description:
      "The release of our eBike Rack (now discontinued), a valuable member of the collection. The launch of our eBike Rack was a game-changer, as it allowed for larger tire capacities and weights, compared to our original Fender Rack (discontinued).",
    image: "https://www.steadyrack.com/cdn/shop/files/2025.png?v=1739935878&width=2000",
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [totalScrolled, setTotalScrolled] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    setMaxScroll(container.scrollWidth - container.clientWidth);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleGlobalWheel = (event) => {
      if (!isVisible) return;
      
      const container = containerRef.current;
      if (!container) return;

      // Calculate how much we've scrolled within the container
      const currentScrollPosition = container.scrollLeft;

      // Handle scrolling based on direction
      if (event.deltaY > 0) { // Scrolling down/right
        if (!isAtEnd) {
          event.preventDefault();
          container.scrollLeft += event.deltaY;
          setTotalScrolled(container.scrollLeft);
          
          // Check if we've reached the end
          if (Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 2) {
            setIsAtEnd(true);
          }
          
          setIsAtStart(false);
        }
      } else { // Scrolling up/left
        if (!isAtStart) {
          event.preventDefault();
          container.scrollLeft += event.deltaY;
          setTotalScrolled(container.scrollLeft);
          
          // Check if we've reached the start
          if (container.scrollLeft <= 0) {
            setIsAtStart(true);
          }
          
          setIsAtEnd(false);
        }
      }
    };

    window.addEventListener("wheel", handleGlobalWheel, { passive: false });
    
    return () => {
      window.removeEventListener("wheel", handleGlobalWheel);
    };
  }, [isVisible, isAtStart, isAtEnd]);

  // Monitor scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const atEnd = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 2;
      const atStart = container.scrollLeft <= 0;
      
      setIsAtEnd(atEnd);
      setIsAtStart(atStart);
      setTotalScrolled(container.scrollLeft);
    };
    
    container.addEventListener("scroll", handleScroll);
    
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="flex p-5 space-x-1 scroll-smooth w-full overflow-x-scroll scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style jsx>{`
          ::-webkit-scrollbar {
            display: none;
          }
          
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-sm bg-white overflow-hidden flex flex-col relative"
          >
            <div className="p-4 pb-3">
              <h2 className="text-xl font-bold mb-2 pb-1 border-black border-b-2">{item.year}</h2>
              <p className="mb-3 text-sm leading-tight">{item.description}</p>
            </div>
            <div className="mt-auto">
              <img
                src={item.image}
                alt={item.year}
                className="w-full h-66 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;