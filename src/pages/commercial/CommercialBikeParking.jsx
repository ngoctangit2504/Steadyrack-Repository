import React, { useState, useRef, useEffect } from 'react';
import BrandsCarousel from "../../components/carousel/BrandsCarousel";

function CommercialBikeParking() {

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
      question: "Will hanging my bike damage the bike frame or forks?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Are Steadyrack bike racks safe to use for bikes with hydraulic brakes/forks/suspensions?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Can I lock my bike to a Steadyrack?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Do the racks swing freely?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Can I lock my Steadyrack into one position or any angle?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Are Steadyracks suitable for apartments?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "What's the difference between a Fender Rack and a Classic Rack?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        <img src='https://cdn.yournet.space/good-design.org/2020/Product%20Design/Sport%20and%20Lifestyle/2532-Steadyrack%20Vertical%20Bike%20Storage%20Solutions/Steadyrack%20Vertical%20Bike%20Storage%20Solutions-8.jpg'/>
      </div>

      <div className="relative z-10 flex justify-center items-end h-full text-center">
        <div className="">
          <h1 className="text-9xl text-white font-bold font-impact uppercase italic tracking-tight mb-10">COMMERCIAL BIKE PARKING</h1>
        </div>
      </div>
    </div>

    <div className='py-20'>
        <div data-aos="fade-up" className=' mx-96 px-5'>
           <h1 className='text-black text-4xl font-semibold text-center mb-7'>From Architectural Companies to Global Brands – Our Commercial Bike Racks are the Preferred Choice Around the World</h1>
           <p className='text-black text-base tracking-tight text-center mb-4'>Our Steadyrack commercial wall mounted bike racks make efficient use of your space allowing people to easily load and unload their bikes. Featuring an award-winning design, our racks pivot, fold towards the wall and protect bikes from damaging other bikes, cars, and items in the vicinity. As the original innovators and leaders in bike parking solutions, no other commercial rack on the market matches our unique combination of features.</p>
        </div>
     </div>

    <BrandsCarousel/>
      
    <div className='pt-9 pb-5'>
        <div className='px-5 grid grid-cols-2'>
           <div className='px-1.5'>
            <img src='https://www.steadyrack.com/cdn/shop/files/classic--assistance.webm_fc7c1a74-c1e6-4811-aca0-6aad445472a1.png?v=1734072894&width=2000'/>
           </div>
           <div className=' flex px-1.5 items-center justify-center'>
             <div data-aos="fade-up" className='py-10 px-20'>
                <h1 className='text-black text-4xl font-semibold tracking-tight mb-5'>Our Commercial Bike Racks Save Significant Space and Are Easy to Use</h1>
                <p className='text-base test-black mb-5 leading-tight'>When designing End-of-Trip (EoT) parking for bikes, the most space efficient option is a frame mounted system or vertical wall mounted bike racks which is suitable for a commercial space.</p>
                <p className='text-base test-black mb-5 leading-tight'>In a commercial or industrial space, our Steadyrack bike racks are ideal as they use a pushing and pulling action, as opposed to lifting vertically. When combined with the patented pivot design, this enables designers to park more bikes in much less space.</p>
                <p className='text-base test-black mb-5 leading-tight'>Architects, designers, and planners from all over the world are acknowledging the benefits and features of Steadyrack as a commercial bike rack system. They know building owners and managers, along with their tenants are seeking commercial bike rack solutions that provide space efficient and user-friendly bike parking. Steadyrack provides more bike parking per square metre of space than any other system and the bike riding community is happy because they’re easy to use and it protects their bikes.</p>

                <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                GET A QUOTE
                </button>
             </div>
           </div>
        </div>
     </div>

     <div className='pt-9 pb-5 bg-black'>
        <div className='px-5 grid grid-cols-2'>
        <div className=' flex px-1.5 items-center justify-center'>
             <div data-aos="fade-up" className='py-10 px-20'>
                <h1 className='text-white text-4xl font-semibold tracking-tight mb-5'>Commercial Bike Parking Standards and Regulations</h1>
                <p className='text-base text-white mb-5 leading-tight'>Our suggested spacing guides and mounting heights within our contain Design Guidelines information and recommendations that help to optimize the available space for your installation. Every country and city has specific commercial bike rack requirements that may differ from the recommendations.</p>
                <p className='text-base text-white mb-5 leading-tight'>We recommend you check the standards or regulations for commercial bike parking in your country and location to ensure your designs comply.</p>

                <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                GET A QUOTE
                </button>
             </div>
           </div>
           <div className='px-1.5'>
            <img src='https://www.steadyrack.com/cdn/shop/files/classic--assistance_copy.webm.png?v=1734073162&width=2000'/>
           </div>
        </div>
     </div>

     <div className='pt-11 pb-20'>
       <div className='px-5 mb-4'>
         <div data-aos="fade-up" className='mb-5'>
            <h1 className='text-4xl font-semibold text-black'>Packed With Features</h1>
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
               <img src='https://www.steadyrack.com/cdn/shop/files/About_page.png?v=1737073780&width=2000'/>
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

     <div className='px-5'>
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
        src='//www.steadyrack.com/cdn/shop/files/Asset_14_2.png?v=1733697676&width=194'
        className='w-30 h-10 pb-3'
        />
        <h1 className='text-white text-3xl font-semibold mb-4'>Pivot Action</h1>
        <p className='text-white font-semibold leading-tight'>Steadyrack bike racks can be mounted vertically to almost any wall and will conveniently swivel from side to side, allowing for significant space-saving advantages.</p>
      </div>
    </div>
   </div>

   <div className='pt-9 pb-5'>
        <div className='px-5 grid grid-cols-2'>
           <div className='px-1.5'>
            <img src='https://www.steadyrack.com/cdn/shop/files/Packed_with_features_commercial_page_922_x_694_px_1398_x_1401_px.png?v=1737076399&width=2000'/>
           </div>
           <div className=' flex px-1.5 items-center justify-center'>
             <div data-aos="fade-up" className='py-10 px-20'>
                <h1 className='text-black text-4xl font-semibold tracking-tight mb-5'>Our Commercial Bike Racks Save Significant Space and Are Easy to Use</h1>
                <p className='text-base test-black mb-5 leading-tight'>Offering a safe, secure, accessible, and easy-to-use architecturalbike parking solution to cyclists will ensure a bike friendly destination for those in the office or community who use their bikes as a preferred method of transport.</p>
                <p className='text-base test-black mb-5 leading-tight'>There are Steadyrack bike parking facilities around the globe in commercial spaces as varied as; offices, museums, End-of-Trip (EoT) facilities, cafes, apartment buildings, Government buildings, hospitals, Airbnb's, superyachts, and globally recognised businesses that choose Steadyrack as their preferred bike parking solution.</p>
                <p className='text-base test-black mb-5 leading-tight'>Check out our Steadyrack Gallery , featuring commercial and personal installations from all over the world.</p>

                <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                GET A QUOTE
                </button>
             </div>
           </div>
        </div>
     </div>

     <div className='pt-9 pb-5 bg-black'>
        <div className='px-5 grid grid-cols-2'>
        <div className=' flex px-1.5 items-center justify-center'>
             <div data-aos="fade-up" className='py-10 px-20'>
                <h1 className='text-white text-4xl font-semibold tracking-tight mb-5'>Outdoor Bike Parking for Commercial Spaces</h1>
                <p className='text-base text-white mb-5 leading-tight'>Renown for being one of the leading commercial bike rack manufacturers globally, our Steadyrack bike racks are manufactured from high grade materials that are robust, vandal resistant and secure. Our racks can be used for outdoor use if not directly exposed directly to the elements.</p>
                <p className='text-base text-white mb-5 leading-tight'>If Steadyrack bike racks are installed where they are exposed to the elements, we recommend following a set of maintenance checks to ensure the rack continues to operate effectively. You can view the care and maintenance instructions</p>
                <p className='text-base text-white mb-5 leading-tight'>Disclaimer: The warranty of the racks will be voided if they are installed where they are directly exposed to the elements.</p>
                <p className='text-base text-white mb-5 leading-tight'>Interested in learning more about our outdoor bike parking options? Contact our sales department to find out.</p>


                <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                GET A QUOTE
                </button>
             </div>
           </div>
           <div className='px-1.5'>
            <img src='https://www.steadyrack.com/cdn/shop/files/outdoor.png?v=1737077009&width=2000'/>
           </div>
        </div>
     </div>

     <div>
    <div className='mx-10 mb-10'>
        <div className='mt-20 flex flex-col justify-center items-center'>
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
        <button 
        className="mx-20 flex-start bg-white text-black py-3.5 px-5 border-2 border-black rounded-full font-semibold hover:bg-red-700 hover:text-white transition" >
       COMMERCIAL CARE AND MAINTENANCE INSTRUCTIONS
      </button>
    </div>
   </div>


    </div>
  )
}

export default CommercialBikeParking