import React, { useState, useRef, useEffect } from 'react';
import CompareModel from '../../components/CompareModel/CompareModel';
import BrandsCarousel from "../../components/carousel/BrandsCarousel";
import FeaturedProducts from '../../components/featured products/FeaturedProduct';

function SmallSpace() {

    const FAQItem = ({ question, answer, isOpen, onToggle }) => {
        const contentRef = useRef(null);
        const [contentHeight, setContentHeight] = useState("0px");
      
        useEffect(() => {
          if (isOpen && contentRef.current) {
            setContentHeight(`${contentRef.current.scrollHeight}px`);
          } else {
            setContentHeight("0px");
          }
        }, [isOpen]);
      
        return (
          <div className="py-2 px-4 sm:px-6 md:px-8 lg:px-10">
            <div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer"
              onClick={onToggle}
            >
              <p className="text-base font-medium flex-grow mb-1 sm:mb-0">{question}</p>
              <button className="focus:outline-none bg-gray-300 border font-bold rounded-full text-2xl w-12 h-12 flex items-center justify-center">
                {isOpen ? "-" : "+"}
              </button>
            </div>
            <div
              ref={contentRef}
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{ height: contentHeight }}
            >
              <div className="mt-1">
                <p className="">{answer}</p>
              </div>
            </div>
            <div className="w-full h-px bg-gray-200 my-2"></div>
          </div>
        );
      };
    
      const faqs = [
        {
          question: "Can the back wheel touch the ground when stowed in the rack?",
          answer:
            "Ideally no. The bike should be suspended above the floor to allow it to freely pivot. Bikes will come in different lengths and therefore different mounting heights which is why we suggest measuring your bikes first by following our installation guide. Refer to our installation instructions for how to work out your optimum mounting height.",
        },
        {
          question: "What height can I mount my racks at?",
          answer:
            "All bikes will vary in their ideal mounting height. Refer to ourinstallation guide for how to work out your optimum mounting height.",
        },
        {
          question: "Can I install them outside?",
          answer:
            "If you install your racks where they will be directly exposed to the elements, it will void our warranty. They will show signs of rusting and the metal will become dull over time; however, the functionality won’t be affected provided our regular care and maintenance instructions are followed.",
        },
        {
          question: "Can I mount a tandem bike in a Steadyrack?",
          answer:
            "It is possible to install a tandem bike in a Steadyrack. However, the rack will need to be mounted higher to allow for the length of the tandem bike. You also need to ensure that the tandem bike doesn't exceed the maximum weight limit of the rack you have chosen. Please note, it can be more difficult to mount a tandem rack in a Steadyrack due to the length of the bike.",
        },
        {
          question: "What are the racks made from?",
          answer:
            "Our racks are made from high quality coated carbon steel, while our plastic housing is made from a tough, impact resilient plastic.",
        },
        {
          question: "Is there a warranty on the Steadyrack?",
          answer:
            "Yes – the warranty lasts for a period of five years effective from the purchasing date. Please read ourwarranty pageon our website for full information.",
        },
      ];
    
      const [openIndex, setOpenIndex] = useState(null);
    
      const handleToggle = (index) => {
        if (openIndex === index) {
          setOpenIndex(null); // Đóng nếu đang mở
        } else {
          setOpenIndex(index); // Mở và đóng các cái khác
        }
      };



  return (
    <div>

    <div data-aos="fade-up" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src='https://eu.steadyrack.com/cdn/shop/files/Small_space_hero.png?v=1738571760&width=3840'/>
      </div>

      <div className="relative flex justify-center items-end h-full text-center">
        <div className="">
          <h1 data-aos="fade-up" className="text-9xl text-white font-bold font-impact uppercase italic tracking-tight mb-10">Small Space Bike Storage</h1>
        </div>
      </div>
    </div>

    <div className='py-20'>
        <div data-aos="fade-up" className=' mx-96 px-5'>
           <h1 className='text-black text-4xl font-semibold text-center mb-7'>Smart Solutions for Storing Bikes in Small Spaces</h1>
           <p className='text-black text-base tracking-tight text-center mb-4'>When space is short, creativity is needed to find the best spot to store your bikes! There are a few ways you can store bikes in small spaces. Our customers have been creative over the years with storing them in cupboards, creating bike storage cabinets specifically around their bikes, and finding nooks and crannies around their home where they can install a Steadyrack. Bike storage for small spaces is easy with quality storage that’s designed specifically to save space.</p>
        </div>
     </div>

     <div>
        <hr className=' border border-gray-300 mx-5'></hr>
     </div>

     <div className='pt-9 pb-5'>
  <div className='px-5 grid grid-cols-2'>
    <div className='px-1.5'>
      <video 
        src="https://www.steadyrack.com/cdn/shop/videos/c/vp/c450838fb30646fb895840a5869a2d46/c450838fb30646fb895840a5869a2d46.HD-720p-4.5Mbps-41296044.mp4?v=0"
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>

    <div className='flex px-1.5 items-center justify-center'>
      <div data-aos="fade-up" className='py-10 px-20'>
        <h1 className='text-black text-4xl font-semibold tracking-tight mb-5'>Have You Ever Seen A Bike Shed?</h1>
        <p className='text-base text-black mb-5 leading-tight'>If you don’t have a dedicated bike storage space, creating a bike shed can be a practical and efficient solution. A well-organized bike shed helps free up space inside your home while keeping your bikes protected. Steadyrack Ambassador, Tom Cardy, uses Steadyrack bike racks in his bike shed set up. This has allowed him to store more of his bike collection securely without overcrowding his workshop. Check out Tom's bike shed creation here.</p>
        <p className='text-base text-black mb-5 leading-tight'>Steadyrack bike racks are the ideal storage fix, so long as your balcony is closed in, or protected from the elements. To learn more about our warranty guidelines, head to our Standard Warranty page here!</p>
        <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
          SHOP NOW
        </button>
      </div>
    </div>
  </div>
</div>

<div className='pt-9 pb-5 bg-black'>
        <div className='px-5 grid grid-cols-2'>
        <div className=' flex px-1.5 items-center justify-center'>
             <div data-aos="fade-up" className='py-10 px-20'>
                <h1 className='text-white text-4xl font-semibold tracking-tight mb-5'>Installation Hacks for Small Spaces</h1>
                <p className='text-base text-white mb-5 leading-tight'>Finding creative storage solutions is essential for apartment living and small spaces. Luckily, Steadyrack is the ultimate bike storage solution! You can install you Steadyrack behind doors or into cupboards to utilize your space. With the ability to pivot left and right, Steadyrack allows you to position bikes neatly out of the way, maximizing every inch of available room. Once you've identified the perfect spot, it's time to install! For detailed installation tips in small spaces,, head to our Installation page here.</p>
                <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                  SHOP NOW
                </button>
             </div>
           </div>
           <div className='px-1.5'>
            <img src='https://www.steadyrack.com/cdn/shop/files/Image_and_text_2.png?v=1737432213&width=2000'/>
           </div>
        </div>
     </div>

     <div className=''>
    <div className='px-5 relative w-full h-screen flex items-center justify-center text-white'>
    <iframe
        allow="autoplay; loop; muted; fullscreen"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="https://www.youtube.com/embed/ke8D4GoohQc?autoplay=1&loop=1&mute=1&playlist=ke8D4GoohQc"
        title="YouTube video"
      >
      </iframe>
      <div className='absolute bottom-5 left-5 w-[20%]'>
        <img 
        src='//www.steadyrack.com/cdn/shop/files/Icons_6.png?v=1737683813&width=194'
        className='w-30 h-10 pb-3'
        />
        <h1 className='text-white text-3xl font-semibold mb-4'>5 Year Warranty</h1>
        <p className='text-white font-semibold leading-tight'>Steadyrack bike racks come with a comprehensive five-year warranty, providing you with peace of mind knowing that your investment is protected.</p>
      </div>
    </div>
   </div>

   <div>
     <CompareModel/>
   </div>

   <div>
     <BrandsCarousel/>
     <div className=' mx-96 px-5 flex justify-center items-center'>
     <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                  SHOP NOW
                </button>
     </div>
   </div>

   <div>
    <div className='mx-10'>
        <div className='my-20 flex flex-col justify-center items-center'>
           <h1 data-aos="fade-up" className='text-4xl text-black font-semibold mb-10'>Common Questions</h1>
           <div className="w-full max-w-9xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
             {faqs.map((faq, index) => (
             <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
             />
           ))}
          </div>
        </div>
    </div>
   </div>

    <div>
        <FeaturedProducts/>
    </div>

    </div>
  )
}

export default SmallSpace