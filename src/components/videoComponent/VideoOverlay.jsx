import { useRef, useState } from "react";
import ButtonA from "../buttons/ButtonA";

const VideoOverlay = ({ videoSrc, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowOverlay(true);
      } else {
        videoRef.current.play();
        setShowOverlay(false);
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
    <div className="relative w-full h-screen flex justify-center items-center">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
        src={videoSrc}
        muted
        loop
        onClick={togglePlay}
        onTimeUpdate={handleProgress}
      />

      {showOverlay && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white transition-opacity duration-300">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">{title}</h1>
          <ButtonA text="PLAY VIDEO" onClick={togglePlay} className="mt-4" />
        </div>
      )}

      {isPlaying && (
        <div className="absolute bottom-4 left-0 w-full flex items-center px-4">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={seekVideo}
            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
          <button onClick={toggleFullScreen} className="ml-4 text-white text-lg">🔲</button>
        </div>
      )}
    </div>
  );
};

export default VideoOverlay;