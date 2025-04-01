import React, { useState, useRef, useEffect } from 'react';
import CompareModel from '../../components/CompareModel/CompareModel';
import BrandsCarousel from "../../components/carousel/BrandsCarousel";
import FeatureProduct from "../../components/featured products/FeaturedProduct";


function HomeIndoor() {

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
          question: "Is it possible to use the Steadyrack with the rear wheel in the rack and the front wheel down?",
          answer:
            "The Steadyrack won’t work with a rear wheel because of the derailleur and gears.  One of the main features is the way you roll your bike in and out; you don’t use a lifting action so you can do away with hooks. It’s very easy to balance the bike on the back wheel and push forward until the front tire engages and then it just rolls up and drops into the 2 v shaped cradling points. The bike is then resting on a cushioned tire not hanging by a hook.",
        },
        {
          question: "How do you get your bike in the front wheel position without lifting?",
          answer:
            "Great question! The best process is to put the rear brake on and walk backwards to raise the bike up onto the rear tire. This ensures that there is minimal effort used.",
        },
        {
          question: "What rack do I need for a time trial bike?",
          answer:
            "Due to the small space between the front tire and the down tube on TT bikes you would need a Fender Rack or eBike Rack.",
        },
        {
          question: "Do you have a rack for small diameter wheels?",
          answer:
            "Unfortunately, any wheels that are less than 16' in diameter will not fit in any of our Steadyracks. If you store a bike with smaller wheels, you risk not having the tire come into contact with the two V-shaped cradling points, meaning the fork will rest on the rack before the tire.",
        },
        {
          question: "Can I mount the Steadyrack onto the side of a van?",
          answer:
            "Using Steadyracks to transport bikes is possible, however, it will void the warranty of the rack if done. If you decide to proceed with using the racks to transport bikes, the bikes must be tied to the racks using velcro straps or similar, to prevent excessive load being placed on the rack during transit. If the bikes bounce up and down when stored in the rack, this can cause the arms to bend and bike to dislodge.",
        },
        {
          question: "Can I install my Steadyrack to Drywall, Plasterboard or Gyprock?",
          answer:
            "No. Steadyracks can be installed into any structurally sound vertical surface.It is NOT recommended that you install Steadyracks into Plasterboard or Drywall (also known as Gyprock). Fixing to Drywall, Plasterboard or Gyprock alone voids our warranty.",
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
       <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src='https://au.steadyrack.com/cdn/shop/files/Personal_indoor_storage_1.png?v=1738655734&width=3840'/>
      </div>

      <div className="relative z-10 flex justify-center items-end h-full text-center">
        <div className="">
          <h1 className="text-9xl text-white font-bold font-impact uppercase italic tracking-tight mb-10">Personal Indoor Storage Solutions</h1>
        </div>
      </div>
    </div>

    <div className='py-20'>
        <div data-aos="fade-up" className=' mx-96 px-5'>
           <h1 className='text-black text-4xl font-semibold text-center mb-7'>Store Your Bike Indoors With Steadyrack</h1>
           <p className='text-black text-base tracking-tight text-center mb-4'>Whether you have one bike or multiple, an indoor bike rack storage solution is the easiest way to keep your bikes out of the way and protected when not in use. Steadyrack’s bike storage allows customers to store their bikes easily, no matter if they have a large living area or small apartment. It’s the perfect space saving solution and, because it’s so easy to use, it will help you get out on your bike faster. Who knows, you may even want to cycle more because of it!</p>
        </div>
     </div>

     <div>
        <div data-aos="fade-up" className='py-0.5 px-5'>
            <h1 className=' font-impact italic text-10xl text-black tracking-tight uppercase text-center whitespace-nowrap'>Transforming Spaces</h1>
        </div>
     </div>

     <div>
        <div data-aos="fade-up" className=' py-24'>
            <h1 className='text-black text-4xl font-semibold text-center tracking-tight mx-44 px-5'>Steadyrack is the world’s most acclaimed vertical bike rack solution, just read all the 5-star reviews from happy and satisfied customers.</h1>
        </div>
     </div>

     <div>
        <hr className=' border border-gray-300 mx-5'></hr>
     </div>

     <div className='pt-9 pb-5 sticky top-0 z-[-5]'>
        <div className='px-5 grid grid-cols-2'>
           <div className='px-1.5'>
            <img src='https://www.steadyrack.com/cdn/shop/files/classic--assistance.webm_af262f83-d875-4be4-b563-43cdc2bc6a6e.png?v=1734126431&width=2000'/>
           </div>
           <div className=' flex px-1.5 items-center justify-center'>
             <div data-aos="fade-up" className='py-10 px-20'>
                <h1 className='text-black text-4xl font-semibold tracking-tight mb-5'>Safe and Secure Indoor Vertical Bike Racks</h1>
                <p className='text-base test-black mb-5 leading-tight'>Indoor bike wall mounts are the perfect storage solution for anyone wanting to store their bikes safely and securely. Take the stress out of leaving your bike in a common bike parking space, or outside, where it could be damaged or stolen. Bike hooks and other storage solutions can often damage rims, frames and even your walls. Steadyrack’s bike rack only ever touches your tire and is safe for any type of bike, even those with hydraulic brakes. Steadyrack’s bike racks for the house allows customers to store easy in the comfort of their own living room, garage, or apartment. By using a vertical rack, you can save valuable floor space for other things that bring you joy outside of cycling. But, if a Steadyrack gets you out cycling faster, well that’s just another good thing too!</p>
                <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                  SHOP NOW
                </button>
             </div>
           </div>
        </div>
     </div>

     <div className='pt-9 pb-5 bg-black sticky top-0 z-[-4]'>
        <div className='px-5 grid grid-cols-2'>
        <div className=' flex px-1.5 items-center justify-center'>
             <div data-aos="fade-up" className='py-10 px-20'>
                <h1 className='text-white text-4xl font-semibold tracking-tight mb-5'>Save Space with a Pivot Ability</h1>
                <p className='text-base text-white mb-5 leading-tight'>Simple to install and even easier to use, our indoor bike rack is the ultimate space saving solution. It’s unique ability to pivot lets users push their bike to the side, saving precious space, especially for those living in apartments or smaller homes! Some of our customers even make their indoor bike rack storage a statement piece in their homes. Because, if we do say so ourselves, they look seriously good.</p>
                <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                  SHOP NOW
                </button>
             </div>
           </div>
           <div className='px-1.5'>
            <img src='https://www.steadyrack.com/cdn/shop/files/classic--assistance.webm_935db328-5702-4240-876e-6eb7cd5ac9a1.png?v=1735804680&width=2000'/>
           </div>
        </div>
     </div>

     <div className='pt-9 pb-5 bg-white sticky top-0 z-[-3]'>
        <div className='px-5 grid grid-cols-2'>
           <div className='px-1.5'>
            <img src='https://www.steadyrack.com/cdn/shop/files/East_Fremantle_home_MINT_Realestate_1600x_6cd792da-77ec-4016-a5f8-09a14d725a51.webp?v=1736806234&width=2000'/>
           </div>
           <div className=' flex px-1.5 items-center justify-center'>
             <div data-aos="fade-up" className='py-10 px-20'>
                <h1 className='text-black text-4xl font-semibold tracking-tight mb-5'>The Best Indoor Bike Rack for Apartments and Larger Homes</h1>
                <p className='text-base test-black mb-5 leading-tight'>The beauty of our bike rack is its versatility; it’s extremely convenient for city-dwellers or anyone who lives in an apartment or smaller house. Store your bike in a corner in your living room, in a cupboard (as some of our customers have done!) or if you have a small shed, store it in there. With your bikes safely stored vertically in our indoor bike racks, you’ll have peace of mind knowing they are secure and protected. For larger homes with garages, Steadyrack’s bike storage is the perfect solution. Store multiple bikes in your garage and pivot them closer to the wall, giving you enough space to park your car and store other belongings safely around your bikes. With Steadyrack, it’s possible to park your car AND keep your bikes organized in your garage. Think of all the extra things you can do with that space! We chose to buy more bikes…</p>
                <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                  SHOP NOW
                </button>
             </div>
           </div>
        </div>
     </div>

     <div className='pt-11 pb-20 bg-white'>
       <div className='px-5 mb-4'>
         <div data-aos="fade-up" className='mb-5'>
            <h1 className='text-4xl font-semibold text-black'>The Features You Need</h1>
         </div>
         <div className='mx-10 px-5'>
            <div className='grid grid-cols-12 gap-4 h-screen'>
              <div class="col-span-3 p-4 text-white flex flex-col items-center justify-center">
                
        
                 <div className='flex-shrink-0 w-[320px] mb-14'>
                 <div className="flex items-center mb-3.5 border-black border-b">
                    <img 
                      src={"//www.steadyrack.com/cdn/shop/files/Frame_377.png?v=1733762194&width=100"} 
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                       />
                   <h3 className="text-black text-lg font-semibold tracking-tight pb-5">Roll In, Roll Out</h3>
                  </div>
                   <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>The Steadyrack works using a pushing and pulling action to load and unload bikes making it suitable and easy for people of all ages and strength. When the rack is mounted at the recommended height, you can simply roll your bike in and out.</p>
                 </div>

                 <div className='flex-shrink-0 w-[320px] mb-14'>
                 <div className="flex items-center mb-3.5 border-black border-b">
                    <img 
                      src={"//www.steadyrack.com/cdn/shop/files/Frame_369.png?v=1733762194&width=100"} 
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                       />
                   <h3 className="text-black text-lg font-semibold tracking-tight pb-5">Space Saving</h3>
                  </div>
                   <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>Steadyrack bike racks can be mounted to virtually any wall and will conveniently swivel from side to side. Steadyrack’s can be installed as close as 350mm apart and due to the swivel action, can be overlapped. When the rack is empty, the arms fold away.</p>
                 </div>

                 <div className='flex-shrink-0 w-[320px] mb-14'>
                 <div className="flex items-center mb-3.5 border-black border-b">
                    <img 
                      src={"//www.steadyrack.com/cdn/shop/files/Frame_373.png?v=1733762194&width=100"} 
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                       />
                   <h3 className="text-black text-lg font-semibold tracking-tight pb-5">Easy to Install</h3>
                  </div>
                   <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>Even if you’re not a handy person, Steadyracks are easy to install. Each rack comes with all the fixings you’ll need for timber or masonry (brick) installations. They can be mounted to any structurally sound wall.</p>
                 </div>
                  
                  

              </div>
              <div class="col-span-6 p-4 text-white flex flex-col items-center justify-center">
               <img src='https://www.steadyrack.com/cdn/shop/files/Copy_of_2020_CLASSIC_RACK_Road_Racing_Bike_Wilier_03_2.png?v=1733754473&width=2000'/>
              </div>
              <div class="col-span-3 p-4 text-white flex flex-col items-center justify-center">

              <div className='flex-shrink-0 w-[320px] mb-14'>
                 <div className="flex items-center mb-3.5 border-black border-b">
                    <img 
                      src={"//www.steadyrack.com/cdn/shop/files/Frame_374.png?v=1733762194&width=100"} 
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                       />
                   <h3 className="text-black text-lg font-semibold tracking-tight pb-5">Built to Last</h3>
                  </div>
                   <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>Made from Chrome plated steel, our racks are strong and built to last, holding up to 35kg/77lbs.</p>
                 </div>

                 <div className='flex-shrink-0 w-[320px] mb-14'>
                 <div className="flex items-center mb-3.5 border-black border-b">
                    <img 
                      src={"//www.steadyrack.com/cdn/shop/files/Frame_372.png?v=1733762194&width=100"} 
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                       />
                   <h3 className="text-black text-lg font-semibold tracking-tight pb-5">Easy to Use</h3>
                  </div>
                   <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>The unique design of a Steadyrack means they’re extremely simple to use for everyone. Just open the support arms, balance your bike on the rear tire and then push and pull the bike in or out to use.</p>
                 </div>

                 <div className='flex-shrink-0 w-[320px] mb-14'>
                 <div className="flex items-center mb-3.5 border-black border-b">
                    <img 
                      src={"//www.steadyrack.com/cdn/shop/files/Frame_371.png?v=1733762194&width=100"} 
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                       />
                   <h3 className="text-black text-lg font-semibold tracking-tight pb-5">Safe, Secure & Lockable</h3>
                  </div>
                   <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>Bikes fit snugly into Steadyracks, so there’s virtually no risk of the bikes falling over and being damaged. Bikes can also be secured easily using conventional chain or D type locks, making them extremely secure bike storage solutions.</p>
                 </div>

              </div>
            </div>
         </div>
       </div>
     </div>

     <div className='px-5 bg-white'>
    <div className='px-5 relative w-full h-screen flex items-center justify-center text-white'>
    <iframe
        allow="autoplay; loop; muted; fullscreen"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/ke8D4GoohQc?autoplay=1&loop=1&mute=1&playlist=ke8D4GoohQc"
        title="YouTube video"
      >
      </iframe>
      <div className='absolute bottom-5 left-5 w-[20%]'>
        <img 
        src='//www.steadyrack.com/cdn/shop/files/Asset_14_2.png?v=1733697676&width=194'
        className='w-30 h-10 pb-3'
        />
        <h1 className='text-white text-3xl font-semibold mb-4'>Pivot Action</h1>
        <p className='text-white font-semibold leading-tight'>Steadyrack bike racks can be mounted vertically to almost any wall and will conveniently swivel from side to side, allowing for significant space-saving advantages.</p>
      </div>
    </div>
   </div>

   <div className='py-1 bg-white'>
     <CompareModel/>
   </div>

   <div className='py-1 bg-white'>
     <BrandsCarousel/>
     <div className=' mx-96 px-5 flex justify-center items-center'>
     <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                  SHOP NOW
                </button>
     </div>
   </div>

   <div className='py-1 bg-white'>
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

   <div className='py-1 bg-white'>
     <FeatureProduct/>
   </div>

    </div>
  )
}

export default HomeIndoor