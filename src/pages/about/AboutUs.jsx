import React from 'react';
import { useEffect, useRef, useState } from "react";
import videoIntro from "../../assets/videos/introducing-the-new-proflex-bike-rack-5.mp4";
import VideoOverlay from '../../components/videoComponent/VideoOverlay';
import VideoFounder from '../../assets/videos/Bike Storage_ Steadyrack s Journey with Founder Dave _ Hang Your.mp4';
import SteadyrackAmbassador from '../../components/steadyrack ambassadors/SteadyrackAmbassadors';
import NewEraSteadyrackImg from '../../assets/Header/Shop_6.png';
import ButtonA from '../../components/buttons/ButtonA';
import Timeline from '../../components/timeLine/TimeLine';
import TextCarouselImages from '../../components/carousel/TextCarouselImages';


function AboutUs() {
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

    <div className="px-8 md:px-16 lg:px-24 xl:px-32 mb-10">
  <p data-aos="fade-up" className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] 
                leading-tight uppercase italic tracking-[-0.05em] skew-x-10 
                font-zuume break-words whitespace-normal text-center">
    Steadyrack is for Space Savers and Adventure Seekers. 
    Our clever, innovative solutions maximize space and make room for your next great adventure.
  </p>
</div>

<div
      className="relative w-full h-screen bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >

      <video
        data-aos="zoom-in"
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        controls={showControls}
        onClick={handleClick}
      >
        <source src={videoIntro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="bg-black py-8 md:py-28 overflow-hidden">
    <div className="container mx-auto flex flex-col md:flex-row gap-8 relative">
    <div className="w-full md:w-[60%] flex flex-col items-start text-left text-white px-6">
      <h2 className="text-[40px] md:text-[70px] lg:text-[100px] font-zuume italic font-bold tracking-tight whitespace-normal max-w-full leading-tight">
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
 <VideoOverlay videoSrc={VideoFounder} title={"From Our Founder"}/>
</div>

<TextCarouselImages/>
<Timeline/>
<SteadyrackAmbassador records={2}/>

<div data-aos="fade-up" className="w-full h-screen bg-[url('https://eu.steadyrack.com/cdn/shop/files/Solutions_2.png?v=1739873754&width=600')] bg-cover bg-center">
      <div data-aos="fade-up" className='py-5 px-5 w-full h-full bg-transparent flex flex-col justify-center'>
         <div data-aos="fade-up" className="text-9xl font-bold mb-7 font-zuume tracking-normal uppercase italic text-white text-center">READY<span style={{ WebkitTextStroke: "0.5px white", WebkitTextFillColor: "transparent" }}> STEADY </span>PRO</div>
         <p data-aos="fade-up" className="text-4xl text-white font-semibold mb-7 text-center">New Era of Steadyrack.</p>
           <button className="bg-transparent border border-white text-white py-3.5 px-5 rounded-full font-semibold hover:bg-red-700 hover:text-white transition">
             Alo
           </button>
      </div>
     </div>

    </div>
  )
}

export default AboutUs