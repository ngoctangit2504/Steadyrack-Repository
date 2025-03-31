import React from 'react';
import { useEffect, useRef, useState } from "react";
import videoIntro from "../../assets/videos/introducing-the-new-proflex-bike-rack-5.mp4";
import VideoOverlay from '../../components/videoComponent/VideoOverlay';
import VideoFounder from '../../assets/videos/Bike Storage_ Steadyrack s Journey with Founder Dave _ Hang Your.mp4';
import Timeline from '../../components/timeLine/TimeLine';
import TextCarouselImages from '../../components/carousel/TextCarouselImages';


function AboutUs() {
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


  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  let clickTimeout = null;

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleClick = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      clickTimeout = null;
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    } else {
      clickTimeout = setTimeout(() => {
        togglePlay();
        clickTimeout = null;
      }, 300);
    }
  };


  return (
    <div>
    <div data-aos="fade-up" className="relative w-full h-screen mb-32">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={videoIntro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 bg-black bg-opacity-40">
        <h1 data-aos="fade-up" className="text-white text-[10rem] leading-none uppercase italic tracking-[-0.1em] skew-x-10 font-zuume whitespace-nowrap">Original Innovators.</h1>
        </div>
    </div>

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
          <h1 className='font-impact tracking-tight text-6xl uppercase italic w-[80%] mx-auto'>
          Steadyrack is for Space Savers and Adventure Seekers. Our clever, innovative solutions maximize space and make room for your next great adventure.
          </h1>
        </div>
      </div>

      <div className='mt-10'>
        <div ref={containerVideoRefs[0]} className="relative w-full flex items-center justify-center">
          <video
            ref={videoRefs[0]}
            className={`transition-all duration-700 ease-out ${
              isExpandedVideo[0] ? "w-[96%]" : "w-3/4"
            } h-auto opacity-100 translate-y-0`}
            src="https://www.steadyrack.com/cdn/shop/videos/c/vp/30365179802742bc9be79b3a98a7f409/30365179802742bc9be79b3a98a7f409.HD-1080p-7.2Mbps-41064419.mp4?v=0" // Thay thế bằng URL video của bạn
            controls
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>

    <div className="bg-black py-8 md:py-28 overflow-hidden">
    <div className="container mx-auto flex flex-col md:flex-row gap-8 relative">
    <div className="w-full md:w-[60%] flex flex-col items-start text-left text-white px-6">
      <h2 className="text-[40px] md:text-[70px] lg:text-[100px] font-impact italic tracking-tight whitespace-normal max-w-full leading-tight">
        A <span style={{ WebkitTextStroke: "0.5px white", WebkitTextFillColor: "transparent" }}> GLOBAL LEADER </span> IN BIKE RACKS.
      </h2>

      <div className="leading-none text-lg md:text-xl mt-11">
        <p className="w-1/2 leading-tight tracking-tight">Since 2009, Steadyrack has led the way in bike storage globally as the pivoting pioneers. Born in an Australian garage, our journey started with a cyclist's simple need for smarter storage.</p>
        <p className="w-1/2 leading-tight mt-10 tracking-tight">Steadyrack is a family-owned and operated business that has grown into a global brand, proudly headquartered in our hometown of Perth, Western Australia.</p>
        <p className="w-1/2 leading-tight mt-10 tracking-tight">Now, for the first time in history, we're redefining bike storage once again. Welcome to the next era of Steadyrack.</p>
      </div>

      <div className="text-base mt-24">
        <p className='leading-tight tracking-tight'>Fueled by innovation and passion, Steadyrack has set the global standard in bike storage. Our commitment to cutting-edge, reliable solutions makes us the top choice now and in the future.</p>
        <p className='leading-tight tracking-tight mt-5'>Today, we've earned the trust of cyclists and organizers worldwide, including some of the most iconic brands and largest organizations including offices, museums, End-of-Trip (EoT) facilities, cafes, apartment buildings, government buildings, hospitals, Airbnb's, and superyachts.</p>
      </div>
    </div>

    <div className="w-full md:w-[40%] relative">
      <img
        data-aos="fade-left"
        src="https://www.steadyrack.com/cdn/shop/files/About_Page_Global_Leader.png?v=1739935706&width=3840"
        alt="Global Leader in Bike Racks"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</div>

<div>
 <VideoOverlay videoSrc="https://www.steadyrack.com/cdn/shop/videos/c/vp/4981503b09b64f0a9a711c2743874fd3/4981503b09b64f0a9a711c2743874fd3.HD-1080p-7.2Mbps-41063554.mp4?v=0" title={"From Our Founder"}/>
</div>

<TextCarouselImages/>
<Timeline/>

<div className='py-20 bg-black'>
  <div className='px-5 mb-10'>
    <h1 className='text-4xl text-white tracking-tight font-semibold'>Ambassadors</h1>
  </div>
  <div className="px-5">
  <div className="grid grid-cols-2 gap-6">
    {/* Ảnh 1 */}
    <div className="relative w-full aspect-square overflow-hidden group">
      <img
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        src="https://www.steadyrack.com/cdn/shop/files/Copy_of_JUC-EverestQuincy-6.jpg?v=1736460261&width=3200"
      />
      {/* Nội dung */}
      <div className="absolute bottom-4 left-4 text-white p-4 rounded-lg">
        <h2 className="text-4xl font-semibold tracking-tight">JACK THOMPSON</h2>
        <p className="text-xl tracking-tight">AUSTRALIA</p>
        <p className="text-xl tracking-tight">Ultra Cyclist</p>
        <button 
        className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full font-semibold group-hover:bg-red-700 group-hover:text-white transition" 
        >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      </button>
      </div>
    </div>

    {/* Ảnh 2 */}
    <div className="relative w-full aspect-square overflow-hidden group">
      <img
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        src="https://www.steadyrack.com/cdn/shop/files/Remy_instagram_4.jpg?v=1706839049&width=3200"
      />
      {/* Nội dung */}
      <div className="absolute bottom-4 left-4 text-white p-4 rounded-lg">
        <h2 className="text-4xl font-semibold tracking-tight">RÉMY MÉTAILLER</h2>
        <p className="text-xl tracking-tight">Canada</p>
        <p className="text-xl tracking-tight">MTB</p>
        <button 
        className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full font-semibold group-hover:bg-red-700 group-hover:text-white transition duration-300" 
        >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      </button>
      </div>
    </div>

  </div>
</div>
</div>

<div data-aos="fade-up" className="w-full h-screen bg-[url('https://eu.steadyrack.com/cdn/shop/files/Solutions_2.png?v=1739873754&width=600')] bg-cover bg-center">
  <div data-aos="fade-up" className="py-5 px-5 w-full h-full bg-transparent flex flex-col justify-center items-center">
    <div data-aos="fade-up" className="text-9xl font-bold mb-7 font-impact tracking-tight uppercase italic text-white text-center">
      READY<span style={{WebkitTextStroke: "0.5px white",WebkitTextFillColor: "transparent",}}>{" "}STEADY{" "}</span>PRO
    </div>
    <p data-aos="fade-up" className="text-4xl text-white font-semibold tracking-tight mb-7 text-center">New Era of Steadyrack.</p>
    <button className="relative group py-3.5 px-5 rounded-full font-semibold text-white transition-all">
      <span className="relative z-10 border-2 border-white rounded-full px-5 py-3.5">
        DISCOVER PROFLEX
      </span>
    </button>
  </div>
</div>

    </div>
  )
}

export default AboutUs