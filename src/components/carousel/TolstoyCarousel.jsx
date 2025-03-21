


import React, { useState, useRef, useEffect, useMemo } from 'react';

const VideoCarousel = ({ videos, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);
  const videoRefs = useRef([]);

  const extendedVideos = useMemo(() => {
    return [
      videos[videos.length - 1],
      ...videos,
      videos[0],
    ];
  }, [videos]);

  useEffect(() => {
    videoRefs.current = extendedVideos.map(() => React.createRef());
  }, [extendedVideos]);

  const handleVideoClick = (index) => {
    if (index === 0) {
      setSelectedIndex(videos.length - 1);
    } else if (index === extendedVideos.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(index - 1);
    }
  };

  useEffect(() => {
    scrollToVideo(selectedIndex + 1);
  }, [selectedIndex]);

  const scrollToVideo = (index) => {
    if (carouselRef.current && videoRefs.current[index] && videoRefs.current[index].current) {
      const videoElement = videoRefs.current[index].current.parentElement;
      const carouselElement = carouselRef.current;
      const carouselWidth = carouselElement.offsetWidth;
      const videoWidth = videoElement.offsetWidth;
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

  return (
    <div className="tolstoy-carousel-container p-0 my-12 ltr">
      {title && (
        <div className="tolstoy-carousel-title text-center text-black text-3xl font-bold font-sans leading-none">
          {title}
        </div>
      )}
      <div
        ref={carouselRef}
        className="tolstoy-carousel-videos-container relative mx-auto mt-4 h-[450px] w-[1006px] max-w-full overflow-hidden"
      >
        <div className="relative flex h-full w-full">
          {extendedVideos.map((video, index) => (
            <div
              key={video.id}
              className={`tolstoy-carousel-tile-container absolute flex items-center justify-center w-[266px] h-full p-2 flex-shrink-0 transition-transform duration-500`}
              style={{
                transform: `translateX(${
                  (index - selectedIndex - 1) * 266 + (266 - 250) / 2
                }px)`,
              }}
              onClick={() => handleVideoClick(index)}
              role="button"
              tabIndex="0"
            >
              <div
                className={`tolstoy-carousel-tile relative flex flex-col items-center transition-all duration-500 gap-3 rounded-lg ${
                  index === selectedIndex + 1 ? 'w-[350px] h-[450px]' : 'w-[250px] h-[350px]'
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
                      <svg
                      width="45"
                      height="31"
                      viewBox="0 0 45 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        opacity="0.8"
                        filter="url(#filter0_bd_29326_18227)"
                      >
                        <path
                          d="M13.558 9.86234V6C9.78648 7.18109 7.02519 10.2952 6.23198 14.0418C6.08044 14.638 6 15.2621 6 15.9049V17.8986H6.01403C6.2563 21.8607 9.5545 25 13.5888 25C17.7803 25 21.1777 21.6116 21.1777 17.4312C21.1777 13.2507 17.7794 9.86234 13.5888 9.86234H13.558Z"
                          fill="white"
                          fillOpacity="0.75"
                          shapeRendering="crispEdges"
                        />
                        <path
                          d="M31.4111 21.1377H31.442V25C35.2135 23.8189 37.9738 20.7048 38.7671 16.9572C38.9186 16.362 39 15.7379 39 15.0951V13.1015H38.986C38.7437 9.13931 35.4445 6 31.4111 6C27.2196 6 23.8223 9.38841 23.8223 13.5688C23.8223 17.7484 27.2196 21.1377 31.4111 21.1377Z"
                          fill="white"
                          fillOpacity="0.75"
                          shapeRendering="crispEdges"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_bd_29326_18227"
                          x="-74"
                          y="-74"
                          width="193"
                          height="179"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="40"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_29326_18227"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="3" />
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_29326_18227"
                            result="effect2_dropShadow_29326_18227"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_29326_18227"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
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