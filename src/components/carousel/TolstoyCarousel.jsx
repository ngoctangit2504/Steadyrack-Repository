import React, { useState, useRef, useEffect, useMemo } from 'react';

const VideoCarousel = ({ videos, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const carouselRef = useRef(null);
  const videoRefs = useRef([]);
  const videosToDisplay = 5;

  const extendedVideos = useMemo(() => {
    if (!videos || videos.length === 0) {
      return [];
    }

    const head = videos[videos.length - 1];
    const tail = videos[0];

    const extended = [head, ...videos, tail];

    while (extended.length < videosToDisplay + 2) {
      extended.push(...videos);
    }
    return extended;
  }, [videos, videosToDisplay]);

  useEffect(() => {
    videoRefs.current = extendedVideos.map(() => React.createRef());
  }, [extendedVideos]);

  const handleVideoClick = (index) => {
    if (index === 0) {
      setSelectedIndex(videos.length);
    } else if (index === extendedVideos.length - 1) {
      setSelectedIndex(1);
    } else {
      setSelectedIndex(index);
    }
  };

  useEffect(() => {
    scrollToVideo(selectedIndex);
  }, [selectedIndex]);

  const scrollToVideo = (index) => {
    if (carouselRef.current && videoRefs.current[index] && videoRefs.current[index].current) {
      const videoElement = videoRefs.current[index].current.parentElement;
      const carouselElement = carouselRef.current;
      const carouselWidth = carouselElement.offsetWidth;
      const videoWidth = 266;
      const scrollPosition = videoElement.offsetLeft - (carouselWidth - videoWidth) / 2;

      carouselElement.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });

      videoRefs.current.forEach((videoRef, i) => {
        if (videoRef.current) {
          if (i === index) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      });
    }
  };

  const carouselWidth = useMemo(() => {
    const baseVideoWidth = 266;
    const expandedVideoWidth = 350;
    return (videosToDisplay - 1) * baseVideoWidth + expandedVideoWidth;
  }, [videosToDisplay]);

  return (
    <div className="tolstoy-carousel-container mt-16 px-8 sm:px-12 md:px-16 lg:px-24 ltr">
      {title && (
        <div className="tolstoy-carousel-title text-center text-black text-3xl font-bold font-sans leading-none mb-10">
          {title}
        </div>
      )}
      <div
        ref={carouselRef}
        className="tolstoy-carousel-videos-container relative mx-auto mt-4 h-[450px] max-w-full overflow-hidden"
        style={{ 
          width: carouselWidth,
          overscrollBehaviorX: 'contain' 
        }}
      >
        <div 
          className="relative flex h-full w-full"
          style={{ 
            width: carouselWidth 
          }}
        >
          {extendedVideos.map((video, index) => (
            <div
              key={video.id}
              className={`tolstoy-carousel-tile-container absolute flex items-center justify-center w-[266px] h-full p-2 flex-shrink-0 transition-transform duration-500`}
              style={{
                transform: `translateX(${
                  (index - selectedIndex) * 266 + (266 - 250) / 2
                }px)`,
              }}
              onClick={() => handleVideoClick(index)}
              role="button"
              tabIndex="0"
            >
              <div
                className={`tolstoy-carousel-tile relative flex flex-col items-center transition-all duration-500 gap-3 rounded-lg ${
                  index === selectedIndex ? 'w-[350px] h-[450px]' : 'w-[250px] h-[350px]'
                }`}
              >
                <div className="tolstoy-carousel-video-container relative w-full h-full">
                  <a
                    href="https://www.gotolstoy.com/"
                    target="_blank"
                    className="absolute top-2 left-2 z-10"
                    aria-label="Powered by Tolstoy"
                  >
                    <svg
                      width="45"
                      height="31"
                      viewBox="0 0 45 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG content remains the same */}
                    </svg>
                  </a>
                  <video
                    ref={videoRefs.current[index]}
                    poster={video.poster}
                    src={video.src}
                    className="w-full h-full object-cover rounded-lg"
                    preload="none"
                    loop
                    muted
                    playsInline
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;