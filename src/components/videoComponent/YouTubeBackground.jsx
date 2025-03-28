import React, { useState, useEffect, useRef } from 'react';

const YouTubeBackground = ({ videoId, text }) => {
  const [videoHeight, setVideoHeight] = useState('100%');
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        const videoWidth = videoRef.current.offsetWidth;
        // Tỷ lệ khung hình 16:9
        setVideoHeight(`${(videoWidth * 9) / 16}px`);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div data-aos="fade-up" className="relative h-screen overflow-hidden">
      {/* Video YouTube nền */}
      <div className="absolute inset-0">
        <iframe
          ref={videoRef}
          style={{ height: videoHeight }}
          className="w-full object-cover"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Nội dung văn bản */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className=" absolute bottom-20">
          <h1 className="text-9xl text-white font-bold font-impact uppercase italic tracking-tight">{text.heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default YouTubeBackground;