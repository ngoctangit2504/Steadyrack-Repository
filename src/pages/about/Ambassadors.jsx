import React from 'react';
import BackRoundIntro from '../../components/backround Intro/BackRoundIntro';
import imageTop from '../../assets/ambassadors_hero_desktop.webp';
import ButtonD from "../../components/buttons/ButtonD";

function Ambassadors() {
  return (
    <div>

    <div>
    <BackRoundIntro
      imageSrc={imageTop} 
      text="STEADYRACK AMBASSADORS"
    />
    </div>
    
    <div className=''>
      <div className='pt-5 pb-13 bg-black'>
        <div className='px-5 grid grid-cols-2 grid-rows-3'>
           <div className='p-2.5 bg-black'>
             <div className='p-2.5 bg-white flex flex-col justify-center items-center h-full'>
                <p className='font-semibold text-2xl w-[50%]'>Bringing together top-tier talent from MTB, gravity,
                 BMX and ultra-cycling disciplines, our athlete ambassadors 
                 are leaders in their field who push limits and ride hard. 
                 They’ll show you how they give it their all on the track 
                 and rely on Steadyrack for effortless bike storage.
                 </p>
             </div>
           </div>

            <div className='relative p-2.5 overflow-hidden'>
              <img 
              className='object-cover transition-transform duration-300 hover:scale-110'
              src='https://www.steadyrack.com/cdn/shop/files/Frame_453.png?v=1733655720&width=2000'/>
              <div className='absolute left-10 bottom-10 space-y-2'>
                <h1 className='text-white text-4xl tracking-tight font-semibold'>Jack Thompson</h1>
                <p className='text-white text-2xl tracking-tight font-semibold'>Australia Ultra-Cycling</p>
                <ButtonD/>
              </div>
            </div>

            <div className='relative p-2.5 overflow-hidden'>
              <img 
              className='object-cover transition-transform duration-300 hover:scale-110'
              src='https://www.steadyrack.com/cdn/shop/files/3-desktop.png?v=1733655719&width=2000'/>
              <div className='absolute left-10 bottom-10 space-y-2'>
                <h1 className='text-white text-4xl tracking-tight font-semibold'>Jack Thompson</h1>
                <p className='text-white text-2xl tracking-tight font-semibold'>Australia Ultra-Cycling</p>
                <ButtonD/>
              </div>
            </div>

            <div className='relative p-2.5 overflow-hidden'>
              <img 
              className='object-cover transition-transform duration-300 hover:scale-110'
              src='https://www.steadyrack.com/cdn/shop/files/Remy_desktop.png?v=1737434533&width=2000'/>
              <div className='absolute left-10 bottom-10 space-y-2'>
                <h1 className='text-white text-4xl tracking-tight font-semibold'>Jack Thompson</h1>
                <p className='text-white text-2xl tracking-tight font-semibold'>Australia Ultra-Cycling</p>
                <ButtonD/>
              </div>
            </div>

            <div className='relative p-2.5 overflow-hidden'>
              <img 
              className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' 
              src='https://www.steadyrack.com/cdn/shop/files/5_9.png?v=1736293399&width=2000'/>
              <div className='absolute left-10 bottom-10 space-y-2'>
                <h1 className='text-white text-4xl tracking-tight font-semibold'>Jack Thompson</h1>
                <p className='text-white text-2xl tracking-tight font-semibold'>Australia Ultra-Cycling</p>
                <ButtonD/>
              </div>
            </div>

            <div className='p-2.5 '>
            <div className="relative flex mx-auto text-center py-12 md:py-20 md:pb-24 h-full flex-col justify-center bg-white">
      <div 
        id="Richtext" 
        className="relative mx-auto max-w-xl"
        data-parallax="zoom-on-scroll"
      >
        <div 
          className="font-bold text-base mb-3 md:mb-3" 
          data-aos="fade-up" 
          data-aos-delay="150"
        >
          <p>Into Riding?</p>
        </div>
        
        <span 
          className="block font-semibold text-2xl md:text-5xl mb-3 md:mb-6 tracking-tight" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          Join The Steadyrack Team And Level Up Your Space
        </span>
        
        <div 
          className="font-medium text-base mb-4 md:mb-4 tracking-tight" 
          data-aos="fade-up" 
          data-aos-delay="450"
        >
          <p>Get in touch with our team to discuss partnership opportunities.</p>
        </div>
        
        <a 
          href="/pages/customer-support" 
          title="CONTACT US" 
          aria-label="CONTACT US" 
          className="inline-flex px-6 py-2 border border-black rounded-full hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300"
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          CONTACT US
        </a>
      </div>
    </div>
            </div>

        </div>
      </div>
    </div>

<div className="relative mx-auto text-center py-12 md:py-20 md:pb-24">
      <div 
        id="Richtext" 
        className="relative mx-auto max-w-xl"
        data-parallax="zoom-on-scroll"
      >
        <div 
          className="font-bold text-base mb-3 md:mb-3" 
          data-aos="fade-up" 
          data-aos-delay="150"
        >
          <p>Into Riding?</p>
        </div>
        
        <span 
          className="block font-semibold text-2xl md:text-5xl mb-3 md:mb-6 tracking-tight" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          Join The Steadyrack Team And Level Up Your Space
        </span>
        
        <div 
          className="font-medium text-base mb-4 md:mb-4 tracking-tight" 
          data-aos="fade-up" 
          data-aos-delay="450"
        >
          <p>Get in touch with our team to discuss partnership opportunities.</p>
        </div>
        
        <a 
          href="/pages/customer-support" 
          title="CONTACT US" 
          aria-label="CONTACT US" 
          className="inline-flex px-6 py-2 border border-black rounded-full hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300"
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          CONTACT US
        </a>
      </div>
    </div>

    </div>
  )
}

export default Ambassadors