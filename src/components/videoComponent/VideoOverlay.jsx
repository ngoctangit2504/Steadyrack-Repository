import { useRef, useState, useEffect } from "react";
import ButtonA from "../buttons/ButtonA";

const VideoOverlay = ({ videoSrc, title }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowOverlay(true);
      } else {
        videoRef.current.play()
          .then(() => {
            setShowOverlay(false);
          })
          .catch(error => {
            console.error("Video play failed:", error);
            // Handle autoplay restrictions
            setShowOverlay(true);
          });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const seekVideo = (e) => {
    if (videoRef.current) {
      const newTime = (e.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      data-aos="fade-up" 
      className="relative w-full h-[50vh] md:h-screen flex justify-center items-center overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
        src={videoSrc}
        muted
        playsInline
        loop
        onClick={togglePlay}
        onTimeUpdate={handleProgress}
      />

      {showOverlay && (
        <div data-aos="fade-up" className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white transition-opacity duration-300 p-4">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold mb-3 md:mb-6 text-center">{title}</h1>
          <ButtonA text="PLAY VIDEO" onClick={togglePlay} className="mt-2 md:mt-4 text-sm md:text-base" />
        </div>
      )}

      {isPlaying && (
        <div className="absolute bottom-2 md:bottom-4 left-0 w-full flex items-center px-2 md:px-4">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={seekVideo}
            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
          <button 
            onClick={toggleFullScreen} 
            className="ml-2 md:ml-4 text-white text-base md:text-lg p-1"
            aria-label="Toggle fullscreen"
          >
            🔲
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoOverlay;