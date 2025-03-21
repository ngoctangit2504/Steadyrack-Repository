import React from 'react';

const VideoBannerContent = ({
  videoUrl,
  videoType,
  title,
  text,
  autoplay = false,
  loop = false,
  muted = true,
}) => {
  const iconUrl = "//www.steadyrack.com/cdn/shop/files/Icons_7.png?v=1739349524&width=194"; // Đường dẫn icon

  return (
    <div className="relative l-image-banner__content mx-2 sm:mx-4">
      <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[528px] overflow-hidden">
        <video
          src={videoUrl}
          type={videoType}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 p-2 sm:p-4">
        <img
          src={iconUrl}
          alt="Icon"
          className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2"
        />
        <span className="block text-white text-sm sm:text-xl font-bold">
          {title}
        </span>
        <p className="text-white text-xs sm:text-base">{text}</p>
      </div>
    </div>
  );
};

export default VideoBannerContent;