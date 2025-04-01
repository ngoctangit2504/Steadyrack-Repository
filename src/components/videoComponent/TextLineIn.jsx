import React,{ useEffect, useRef, useState } from 'react'

function TextLineIn() {
    const contentRef = useRef(null);
  const videoRefs = [useRef(null)];
  const containerVideoRefs = [useRef(null)];
  const [isExpandedVideo, setIsExpandedVideo] = useState([false]);
  const [textHidden, setTextHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !containerVideoRefs[0].current) return;

      const contentTop = contentRef.current.getBoundingClientRect().top;
      const videoTop = containerVideoRefs[0].current.getBoundingClientRect().top;
      const videoHeight = containerVideoRefs[0].current.offsetHeight;
      const triggerHeight = videoTop + videoHeight * 0.01;

      const contentRect = contentRef.current.getBoundingClientRect();
      const videoRect = containerVideoRefs[0].current.getBoundingClientRect();

      const overlapStart = Math.max(contentRect.top, videoRect.top);
      const overlapEnd = Math.min(contentRect.bottom, videoRect.bottom);
      const isOverlapping = overlapEnd > overlapStart;

      if (contentTop <= triggerHeight) {
        contentRef.current.style.position = 'sticky';
        contentRef.current.style.top = '20px';
        contentRef.current.style.zIndex = '40';
        contentRef.current.style.width = '100%';
        setTextHidden(false);

        if (isOverlapping) {
          contentRef.current.style.color = 'white';
        } else {
          contentRef.current.style.color = 'black';
        }
      } else {
        contentRef.current.style.position = 'static';
        contentRef.current.style.top = 'auto';
        contentRef.current.style.zIndex = 'auto';
        contentRef.current.style.width = 'auto';
        setTextHidden(true);
        contentRef.current.style.color = 'black';
      }

      const newStates = isExpandedVideo.map((state, index) => {
        if (!videoRefs[index].current || !containerVideoRefs[index].current) return state;

        const videoTop = videoRefs[index].current.getBoundingClientRect().top;
        const triggerHeightVideo = window.innerHeight * 0.5;

        return videoTop < triggerHeightVideo;
      });

      setIsExpandedVideo(newStates);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpandedVideo]);
  return (
    <div>
        <div>
      <div
        ref={contentRef}
        className='px-5'
        style={{
          display: textHidden ? 'none' : 'block',
          transition: 'color 0.3s ease',
        }}
      >
        <div className='pt-28 pb-10 px-5 text-center'>
          <h1 className='font-impact tracking-tight text-6xl uppercase italic w-[80%] mx-auto'>New and Improved SteadyClick™ end caps for simplified assembly. </h1>
        </div>
      </div>

      <div className='mt-10'>
        <div ref={containerVideoRefs[0]} className="relative w-full flex items-center justify-center">
          <video
            ref={videoRefs[0]}
            className={`transition-all duration-700 ease-out ${
              isExpandedVideo[0] ? "w-[96%]" : "w-3/4"
            } h-auto opacity-100 translate-y-0`}
            src="https://www.steadyrack.com/cdn/shop/videos/c/vp/81a42ccc77034c1c80d14c2165c5a042/81a42ccc77034c1c80d14c2165c5a042.HD-1080p-7.2Mbps-41241536.mp4?v=0" // Thay thế bằng URL video của bạn
            controls
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default TextLineIn