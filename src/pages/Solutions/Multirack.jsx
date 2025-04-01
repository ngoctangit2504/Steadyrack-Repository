import React, { useState, useRef, useEffect } from 'react';
import CompareModel from '../../components/CompareModel/CompareModel';
import BrandsCarousel from "../../components/carousel/BrandsCarousel";
import FeatureProduct from "../../components/featured products/FeaturedProduct";


function Multirack() {

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
          question: "Where can I install my racks?",
          answer:
            "Steadyracks can be installed into any structurally sound vertical surface. Fixings are provides for installing to Timber or Masonry (brick/concrete). If you wish to install the rack to any other type of surface - such as steel you will need to purchase additional fixings.",
        },
        {
          question: "What if my studs aren't where I want to put my racks?",
          answer:
            "You can fix rails across the studs at your preferred mounting height and then you can space your racks along the rails. Another option is to fix a sheet of plywood (10-13mm, or 1/2 inch thick) across the top of your wall lining or studs and then screw your racks to the ply in the exact location you want them.",
        },
        {
          question: "How far apart do I hang each rack?",
          answer:
            "Spacing your racks depends on whether you want to save floor space, wall space, or a bit of both. We've created a handy Wall Placement Guide to help.",
        },
        {
          question: "Do you have CAD details or spec sheets?",
          answer:
            "Our design guides and spacing guides are available to download on our website.",
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
        <img src='https://www.steadyrack.com/cdn/shop/files/Multi_rack_hero.png?v=1737096218&width=3840'/>
      </div>

      <div className="relative flex justify-center items-end h-full text-center">
        <div className="">
          <h1 data-aos="fade-up" className="text-9xl text-white font-bold font-impact uppercase italic tracking-tight mb-10">Multiple Bike Rack Storage</h1>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" className='py-20'>
        <div className=' mx-96 px-5'>
           <h1 data-aos="fade-up" className='text-black text-4xl font-semibold text-center mb-7'>Steadyrack’s modular design makes it easy to install multiple racks, creating an efficient and organized storage solution for any space.</h1>
           <p data-aos="fade-up" className='text-black text-base tracking-tight text-center mb-4'>Steadyrack’s multiple bike rack storage has revolutionized the bike parking and bike storage industries by allowing cyclists from around the world to safely and effortlessly secure their bikes on virtually any wall and in almost any space. Steadyrack’s full range of products are the ideal solution for storing more bikes in less space. The unique and patented pivot action gives the option of leaving bikes in the central position or swivelling the rack to the left or right as the need arises. Each of the Steadyracks are safe to use, easy to install and utilize a roll in, roll out method. Whether you’re looking for multiple racks for your shed or garage, multiple bike rack storage for commercial bike parking (cafes, End-of-Trip, museums, schools, office buildings), at Steadyrack we’ve got the perfect bike rack storage for you and your project.</p>
        </div>
     </div>

     <div>
        <div data-aos="fade-up" className='py-0.5 px-5'>
            <h1 className=' font-impact italic text-10xl text-black tracking-tight uppercase text-center whitespace-nowrap'>Pioneers of the pivot</h1>
        </div>
     </div>

     <div>
        <div data-aos="fade-up" className=' py-24'>
            <h1 className='text-black text-4xl font-semibold text-center tracking-tight mx-44 px-5'>Steadyrack’s patented pivot action lets you store multiple bikes upright and off the floor, while efficiently saving valuable space by angling racks neatly to fit your setup.</h1>
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
           <div  className=' flex px-1.5 items-center justify-center'>
             <div data-aos="fade-up" className='py-10 px-20'>
                <h1 className='text-black text-4xl font-semibold tracking-tight mb-5'>Single, 2, 3, 4, 5 or 6 Bike Racks for your Home or Garage</h1>
                <p className='text-base test-black mb-5 leading-tight'>Whether you have a large family, are a pro cyclist or simply enjoy riding, having multiple bikes in your collection makes bike storage complicated. Steadyrack is the solution to your bike rack storage issues. Whether it’s bike racks for 4, 5 or 6 bikes, our award-winning, revolutionary design allows you to install multiple bike racks mounted on the wall next to each other, freeing up precious space in your garage, home, or apartment. The Steadyrack’s unique pivot action gives the option of leaving bikes in the central position or swivelling the rack to the left or right, as you need to, allowing bikes to fold over each other. Our multi bike racks provide an ideal storage solution where space is valuable, as they allow you to create more floor space.</p>
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

     <div className="bg-white py-10">
      <div className="px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="px-5">
            <div className="flex flex-col">
              <img
                data-aos="fade-up"
                src="https://www.steadyrack.com/cdn/shop/files/Wall_Guide_Staggered_-_Metric_1080x_ec5ca1dd-c885-44de-886c-a67640739c4e.webp?v=1736807403&width=650"
                alt="Staggered Bike Storage"
                className="w-full mb-4"
              />
              <div className="text-column">
                <p className="font-semibold mt-2">Fit More Bikes into Smaller Spaces</p>
                <p className=" leading-relaxed">
                  For limited wall space, this setup will allow you to store more bikes
                  in a smaller area. You can stagger the racks to overlap your bikes,
                  making this option perfect for apartments and small sheds. Steadyracks
                  can be placed as close as 350mm (1ft 2in) apart.
                </p>
              </div>
            </div>
          </div>

          <div className="px-5">
            <div className="flex flex-col">
              <img
                data-aos="fade-up"
                src="https://www.steadyrack.com/cdn/shop/files/Wall_Guide_Staggered_-_Metric_1080x_ec5ca1dd-c885-44de-886c-a67640739c4e.webp?v=1736807403&width=650"
                alt="Maximum Floor Space"
                className="w-full mb-2"
              />
              <div className="text-column">
                <p className="font-semibold mt-4">
                  Space Your Racks for Maximum Floor Space
                </p>
                <p className="leading-relaxed">
                  Optimise your floor space by pivoting your bikes as close to the wall
                  as possible. With more wall space, you can spread the racks out to
                  store your bikes closer to the wall, and take up less floor space.
                  This option is great for larger spaces, like garages, and gives more
                  freedom to move cars and other equipment without moving your bikes.
                  To achieve no bike overlap, the racks may need to be 1200mm (~4ft)
                  apart, or more. When mounting racks at the same height, we recommend
                  a minimum of 600mm (2ft) between racks to allow for the optimum
                  pivot range.
                </p>
              </div>
            </div>
          </div>
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

   
   <div className='py-1 bg-white'>
    <CompareModel/>
   </div>

   <div className='py-1 bg-white'>
    <BrandsCarousel/>
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

export default Multirack