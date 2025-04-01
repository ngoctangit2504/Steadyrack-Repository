import React, { useEffect, useRef, useState } from 'react'

function GearMateClassicRange() {
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

      <div data-aos="fade-up" className="w-full h-screen bg-[url('https://eu.steadyrack.com/cdn/shop/files/Classic_GearMate_1.png?v=1742889266&width=3840')] bg-cover bg-center">
        <div data-aos="fade-up" className='py-5 px-5 w-full h-full bg-transparent flex flex-col justify-end'>
         <div data-aos="fade-up" className="text-8xl font-bold mb-7 font-zuume tracking-normal italic text-white text-center">GEARMATE<span style={{ WebkitTextStroke: "0.5px white", WebkitTextFillColor: "transparent" }}> ON </span>CLASSIC RANGE</div>
      </div>
     </div>   

     <div className=' pt-24 pb-10'>
     <div className='px-5  grid grid-flow-row-dense grid-cols-3'>
      <h1 className='text-4xl font-semibold mb-7'>The Ultimate Adaptable System</h1>
      <div className='col-span-2 mt-3.5 mb-5 pl-32 pr-2.5'>
        <p data-aos="fade-up"  className='mb-4 leading-tight text-sm font-semibold'>Following the launch of our newest innovations, ProFlex and GearMate, the question has been: Can I use GearMate with my existing Classic Range Steadyracks? The answer is YES. Our Classic Range includes the Classic, MTB, eBike, Fender, and Fat Rack. The GearMate is an adaptable storage organizer system that is compatible with both the Classic Range and the ProFlex Range.
          </p>
      </div>
     </div>
    </div>

    <div className='grid grid-cols-3 mx-3'>
  <div className='px-2 relative overflow-hidden group'>
   <div className='h-auto w-auto overflow-hidden group mb-6'>
   <img 
      className='transition-transform duration-300 ease-in-out transform group-hover:scale-110'
      src='https://eu.steadyrack.com/cdn/shop/files/Classic_GearMate_Features.png?v=1742890123&width=3200'
      alt="GearMate SteadySpine"
    />
   </div>
    <h1 className='text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3'>GearMate SteadySpine</h1>
    <p className='text-sm font-semibold tracking-tight'>The GearMate SteadySpine is made from teflon coated aluminium and is the base of the GearMate system. Designed to seamlessly integrate behind the Classic Range racks and store your gear with ease.</p>
  </div>

  <div className='px-2 relative overflow-hidden group'>
   <div className='h-auto w-auto overflow-hidden group mb-6'>
   <img 
      className='transition-transform duration-300 ease-in-out transform group-hover:scale-110'
      src='https://eu.steadyrack.com/cdn/shop/files/Classic_GearMate_Features_1.png?v=1742890173&width=3200'
      alt="GearMate Brackets"
    />
   </div>
    <h1 className='text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3'>GearMate Brackets</h1>
    <p className='text-sm font-semibold tracking-tight'>The GearMate brackets come in three lengths: small, medium, and large, and are designed to slide & drop into the notches of the SteadySpine. This enables users to slide on their bins, hooks, and loop fasteners.</p>
  </div>

  <div className='px-2 relative overflow-hidden group'>
    <div className='h-auto w-auto overflow-hidden group mb-6'>
    <img 
      className='transition-transform duration-300 ease-in-out transform group-hover:scale-110'
      src='https://eu.steadyrack.com/cdn/shop/files/Classic_GearMate_Features_2.png?v=1742890223&width=3200'
      alt="200+ Arrangements"
    />
    </div>
    <h1 className='text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3'>200 + Arrangements</h1>
    <p className='text-sm font-semibold tracking-tight'>The SteadySpine and brackets allow over 200 arrangements, meaning you can store your gear, your way. Move the brackets around to utilize your space and store your helmet, shows, tools, and more.</p>
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
          <h1 className='font-impact tracking-tight text-6xl uppercase italic w-[80%] mx-auto'>Store Your Gear, Your Way</h1>
        </div>
      </div>

      <div className='mt-10'>
        <div ref={containerVideoRefs[0]} className="relative w-full flex items-center justify-center">
          <video
            ref={videoRefs[0]}
            className={`transition-all duration-700 ease-out ${
              isExpandedVideo[0] ? "w-[96%]" : "w-3/4"
            } h-auto opacity-100 translate-y-0`}
            src="https://www.steadyrack.com/cdn/shop/videos/c/vp/da8bd91e15824f03ae0017399951b761/da8bd91e15824f03ae0017399951b761.HD-1080p-2.5Mbps-44780084.mp4?v=0" // Thay thế bằng URL video của bạn
            controls
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>

    <div className='pt-20'>
       <div className='px-5 grid grid-cols-2'>
         <div className='bg-black p-5'>
           <h1 className='text-7xl text-white font-impact italic tracking-tight uppercase'>GearMate Installation With Classic Range</h1>
         </div>
         <div>
          <video 
            autoPlay
            muted 
            loop
            playsInline 
            className="w-full h-auto"
            src='https://www.steadyrack.com/cdn/shop/videos/c/vp/82a17a1a28f24ea09b431311aa4a9297/82a17a1a28f24ea09b431311aa4a9297.HD-1080p-7.2Mbps-42855580.mp4?v=0'/>
         </div>
       </div>
     </div>

     <div className='pt-4'>
       <div className='px-5 grid grid-cols-2 border-b border-gray-600 pb-2 '>
         <div className=''>
           <h1 className='text-2xl tracking-tight font-semibold'>Installing Your GearMate & Classic Range Rack</h1>
           <p className=' tracking-tight font-semibold'>Your GearMate is installed by attaching all components to the SteadySpine. The SteadySpine is an additional purchase required when installing behind a Classic Range rack. Download the installation manual or watch the tutorial on how to install your new Gearmate with an existing Classic Range rack.</p>
           <h1 className='text-2xl tracking-tight font-semibold mt-5'>Tips</h1>
           <p className=' tracking-tight font-semibold'>Mark the two vertical mounting holes on the top and bottom mounting plate to determine where to line up your SteadySpine before removing your rack from the wall.</p>
           
           <button 
             className="bg-white text-black py-3.5 px-5 mt-4 border-2 border-black rounded-full font-semibold hover:bg-red-700 hover:text-white transition block" 
            >GEARMATE + CLASSIC RANGE VIDEO
          </button>
          <button 
            className="bg-white text-black py-3.5 px-5 mt-2 border-2 border-black rounded-full font-semibold hover:bg-red-700 hover:text-white transition block" 
           >DOWNLOAD MANUAL
          </button>
          
         </div>
       </div>
     </div>
    
    </div>
  )
}

export default GearMateClassicRange