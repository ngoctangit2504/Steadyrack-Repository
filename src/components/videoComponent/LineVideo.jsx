import React, { useRef, useState } from 'react';
import ModalVideo from './ModalVideo';

const Gallery = () => {
  const videos = [
    '/videos/introducing-the-new-proflex-bike-rack3.mp4',
    '/videos/Introducing-the-new-ProFlex-Bike-Rack2.mp4',
    '/videos/introducing-the-new-proflex-bike-rack.mp4',
    '/videos/Introducing the new ProFlex Bike Rack6.mp4',
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const videoRefs = useRef([]);
  const videoWidth = 256;

  const handlePrev = () => {
    setScrollPosition((prevPosition) => Math.min(prevPosition + videoWidth, 0));
  };

  const handleNext = () => {
    setScrollPosition((prevPosition) => Math.max(prevPosition - videoWidth, -videoWidth * (videos.length - 1)));
  };

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Thêm state để quản lý index video hiện tại

  const handleVideoClick = (video, index) => {
    setSelectedVideo(video);
    setCurrentVideoIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">See It In Action</h2>
      <div className="flex items-center">
        <button className="mr-4" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80px] h-[120px] mr-4 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleVideoClick(video, index)}
              >
                <video
                  src={video}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                  controls={false}
                  ref={(videoRef) => (videoRefs.current[index] = videoRef)}
                  onMouseEnter={() => {
                    videoRefs.current[index]?.play();
                  }}
                  onMouseLeave={() => {
                    videoRefs.current[index]?.pause();
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <button className="ml-4" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {selectedVideo && (
        <ModalVideo
          video={selectedVideo}
          onClose={handleCloseModal}
          videos={videos}
          currentVideoIndex={currentVideoIndex}
          setCurrentVideoIndex={setCurrentVideoIndex}
        />
      )}
    </div>
  );
};

export default Gallery;