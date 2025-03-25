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
      className="relative w-full h-[900px] overflow-hidden pb-10"
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-[900px] object-cover cursor-pointer"
        src={videoSrc}
        muted
        playsInline
        loop
        onClick={togglePlay}
        onTimeUpdate={handleProgress}
      />

      {/* Thêm một khối bao bọc nội dung */}
      <div className="absolute inset-0 flex items-center justify-center py-10 px-5">
        <div className="text-center"> {/* Căn giữa nội dung bên trong */}
          {showOverlay && (
            <div data-aos="fade-up" className="text-white">
              <h1 className="text-3xl font-semibold pb-7">{title}</h1>
              <button 
               className="bg-white text-black py-3.5 px-5 border-2 border-black rounded-full font-semibold hover:bg-red-700 hover:text-white transition" 
               onClick={togglePlay}
               >
                PLAY VIDEO
               </button>
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
                
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoOverlay;