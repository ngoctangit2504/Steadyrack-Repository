import React, { useEffect, useRef, useState } from 'react';
import FeaturedProduct from "../../components/featured products/FeaturedProduct";

function BehindTheScenes() {

  const videoRefs = [useRef(null), useRef(null)];
  const containerRefs = [useRef(null), useRef(null)];
  const [isExpanded, setIsExpanded] = useState([false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const newStates = isExpanded.map((state, index) => {
        if (!videoRefs[index].current || !containerRefs[index].current) return state;

        const videoTop = videoRefs[index].current.getBoundingClientRect().top;
        const triggerHeight = window.innerHeight * 0.5; // Kích hoạt khi video cách 70% chiều cao màn hình

        return videoTop < triggerHeight;
      });

      setIsExpanded(newStates);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  return (
    <div>
      <div data-aos="fade-up" className="w-full h-screen bg-[url('https://www.steadyrack.com/cdn/shop/files/Choosing_right_rack_Home_page_2160_x_1440_px_1.png?v=1740462596&width=3840')] bg-cover bg-center">
      <div data-aos="fade-up" className='py-5 px-5 w-full h-full bg-transparent flex flex-col justify-end'>
         <div data-aos="fade-up" className="text-9xl font-bold mb-7 font-zuume tracking-normal italic text-white text-center">BEHIND<span style={{ WebkitTextStroke: "0.5px white", WebkitTextFillColor: "transparent" }}> THE </span>SCENES</div>
      </div>
     </div>

     <div className=' pt-24 pb-10'>
     <div className='px-5  grid grid-flow-row-dense grid-cols-3'>
      <h1 className='text-4xl font-semibold mb-7'>Steadyrack: Chasing Perfection</h1>
      <div className='col-span-2 mt-3.5 mb-5 pl-32 pr-2.5'>
        <p data-aos="fade-up"  className='mb-4 leading-tight text-sm font-semibold'>For over 15 years, Steadyrack has been a global leader in innovative bike storage solutions.
         Recognizing the evolving needs of cyclists, we've dedicated the past two years to developing the 
         ProFlex Bike Rack and GearMate storage organizer system.
          </p>

          <p data-aos="fade-up"  className='my-4 leading-tight text-sm font-semibold'>
          The challenge? Improve on an already highly successful product while introducing 
          fresh innovations and a modern design. Through extensive prototyping and rigorous 
          testing, we've refined these products to ensure they are flawless. The ProFlex 
          features an advanced roll-in, roll-out design, seamlessly integrating with the 
          customizable GearMate system to provide the ultimate storage solution for all your cycling gear. 
          </p>

          <p data-aos="fade-up"  className='mt-1.5 leading-tight text-sm font-semibold'>
          The final result – ProFlex and GearMate. The future of bike storage. Join Steadyrack's Founder and 
          CEO, Dave Steadman, in the short film "Chasing Perfection" for an exclusive behind-the-scenes look at 
          the development of ProFlex, GearMate, and the future of Steadyrack. 
          </p>
      </div>
     </div>
    </div>

    <div className='mt-20 mb-5'>
      <div ref={containerRefs[0]} className="relative w-full flex items-center justify-center">
        <video
          ref={videoRefs[0]}
          className={`transition-all duration-700 ease-out ${
            isExpanded[0] ? "w-[96%]" : "w-3/4"
          } h-auto opacity-100 translate-y-0`}
          src="https://www.steadyrack.com/cdn/shop/videos/c/vp/1aa7ba81f5e74a958a2ebfa65ba4ca40/1aa7ba81f5e74a958a2ebfa65ba4ca40.HD-1080p-7.2Mbps-43182600.mp4?v=0"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </div>
      </div>

    <div className="bg-black py-8 md:py-28 overflow-hidden">
    <div className="container mx-auto flex flex-col md:flex-row gap-8 relative">
    <div className="w-full md:w-[60%] flex flex-col items-start text-left text-white px-6">
      <h2 className="text-[40px] md:text-[70px] lg:text-[100px] font-zuume italic font-bold tracking-tighter whitespace-normal max-w-full leading-tight uppercase">
      The <span style={{ WebkitTextStroke: "0.5px white", WebkitTextFillColor: "transparent" }}> Story Behind </span> ProFlex & GearMate
      </h2>

      <div className="leading-none text-lg md:text-xl mt-11">
        <p className="w-1/2 leading-tight italic">"It's always about improving the user experience. The ProFlex is a natural progression from our original patented Classic Steadyrack range, offering greater versatility and flexibility." - CEO and Founded, David Steadman.</p>
        <p className="w-1/2 leading-tight italic mt-10">"We aimed for a timeless design that won't become dated—something that will outlast your bike." - Product Design Manager, Dylan Morrison.</p>
      </div>

      <div className="mt-24 ">
        <p className='text-base leading-tight font-semibold'>15 years in the making, the new ProFlex rack redefines bike storage with its sleek, modern design and enhanced functionality, building upon the legacy of the pioneering Classic Rack. The ProFlex is engineered for future accessories and includes new features such as increased load capacity (holds bikes up to 55kg/121lbs), easier installation, fender/mudguard compatibility, and a 5-year warranty. ProFlex is the future of bike storage..</p>
      </div>
    </div>

    <div className="w-full md:w-[40%] relative">
  <video
    data-aos="fade-left"
    src="https://www.steadyrack.com/cdn/shop/videos/c/vp/669930ee4751436ca302dcbb52d20fe1/669930ee4751436ca302dcbb52d20fe1.HD-720p-1.6Mbps-43174898.mp4?v=0" // Thay bằng link video của bạn
    className="w-full h-auto object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
</div>
  </div>
</div>

<div className=' pt-24 pb-10 bg-black'>
     <div className='px-5  grid grid-flow-row-dense grid-cols-3'>
      <h1 className='text-4xl font-semibold mb-7 text-white'>GearMate</h1>
      <div className='col-span-2 mt-3.5 mb-5 pl-32 pr-2.5'>
        <p data-aos="fade-up"  className='mb-4 leading-tight text-sm font-semibold text-white'>
        Complementing the ProFlex is the new GearMate. Designed to integrate seamlessly 
        with both the ProFlex and Classic bike racks, the GearMate offers the ultimate 
        storage solution for your bike accessories. With over 200 possible configurations, 
        it's as unique as your ride. Dave shares, "I'm not the most organized person, but this 
        really helps me stay organized and actually enhances the riding experience. All my gear 
        is in one place, easily accessible and ready to ride."
          </p>

      </div>
     </div>
    </div>

    <div>
    <div className='px-5 bg-black'>
      <div className='grid grid-cols-2'>
       <div className='px-2.5'>
        <div className='py-2.5'>
      <div className='relative w-full h-[680px] overflow-hidden'>
        <img
          src="https://www.steadyrack.com/cdn/shop/files/GearMateWithRack_Accessories_1b29874c-f3c3-4796-affa-1e53db795747.png?v=1740109897&width=1400"
          alt="Ảnh cột 1"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
       </div>

       <div className='px-2.5'>
         <div className='py-2.5'>
      <div className='relative w-full h-[680px] overflow-hidden'>
        <img
          src="https://www.steadyrack.com/cdn/shop/files/SteadySpine_PDP.png?v=1739422159&width=3840"
          alt="Ảnh cột 1"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
       </div>
      </div>
    </div>
   </div>

   <div>
    <div className=' pt-28 pb-11'>
     <h1 className='px-5 text-4xl font-semibold text-black'>Behind The Lens</h1>
    </div>
   </div>

   <div className='px-5 grid grid-cols-3'>
  <div className='px-1 flex items-center justify-center overflow-hidden'>
    <div className="relative w-full h-[700px] overflow-hidden">
      <img
        src="https://diy.sndimg.com/content/dam/images/diy/fullset/2018/2/19/0/CI-Steadyrack_bike-rack.jpg.rend.hgtvcom.1280.1280.85.suffix/1519077946271.webp"
        alt="Ảnh cột 1"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>

  <div className='col-span-2 px-1 overflow-hidden'>
    <div className="relative w-full h-[700px] overflow-hidden">
      <img
        src='https://m.media-amazon.com/images/I/71Klk3I0QgL._AC_SL1028_.jpg'
        alt="Ảnh cột 2"
        className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
      />
    </div>
  </div>
</div>

<div>
  <FeaturedProduct/>
</div>

    </div>
  )
}

export default BehindTheScenes