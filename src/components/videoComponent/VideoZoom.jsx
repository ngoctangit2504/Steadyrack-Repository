import React, { useState, useEffect, useRef } from "react";

const VideoZoomComponent = ({
  videoSrc,
  defaultWidth = "w-64",
  defaultHeight = "h-36",
  zoomedWidth = "w-full",
  zoomedHeight = "h-96",
  alt = "Video",
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);

        setIsZoomed(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={videoRef}
      className={`
        transition-all 
        duration-500 
        ease-in-out 
        overflow-hidden 
        ${isZoomed ? zoomedWidth : defaultWidth} 
        ${isZoomed ? zoomedHeight : defaultHeight}
        mx-auto
      `}
    >
      <video src={videoSrc} className="w-full h-full object-cover" controls />
    </div>
  );
};

export default VideoZoomComponent;
