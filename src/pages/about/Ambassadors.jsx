import React from 'react';
import BackRoundIntro from '../../components/backround Intro/BackRoundIntro';
import imageTop from '../../assets/ambassadors_hero_desktop.webp';
import SteadyrackAmbassador from '../../components/steadyrack ambassadors/SteadyrackAmbassadors';

function Ambassadors() {
  return (
    <div>
    <BackRoundIntro
      imageSrc={imageTop} 
      text="STEADYRACK AMBASSADORS"
    />

    <SteadyrackAmbassador/>

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
          className="block font-semibold text-2xl md:text-5xl mb-3 md:mb-6" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          Join The Steadyrack Team And Level Up Your Space
        </span>
        
        <div 
          className="font-medium text-base mb-4 md:mb-4" 
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