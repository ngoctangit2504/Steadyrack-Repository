import React, { useEffect, useRef, useState } from 'react';
import BoxText from '../../components/carousel/BoxTextCarousel';
import VideoOverlay from '../../components/videoComponent/VideoOverlay';
import VideoBody from "../../assets/videos/Bike Storage_ Steadyrack s Journey with Founder Dave _ Hang Your.mp4";
import ProductDetailCut from '../../components/product/ProductDetailCut';


function GearMate() {
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


    const items = [
        { 
            image: '//www.steadyrack.com/cdn/shop/files/steadyrack_ready.png?v=1737353296&width=34',
            title: 'Steadyrack Ready', 
            text: 'Designed to work seamlessly with all Steadyrack bike racks.' },
        { 
            image: '//www.steadyrack.com/cdn/shop/files/200_arrangements.png?v=1737353316&width=34',
            title: '200+ Arrangements', 
            text: 'Customize your way, with over 200 possible arrangements.' },
        { 
            image: '//www.steadyrack.com/cdn/shop/files/Layer_1-2_cb99e784-a5e3-45ad-a8d7-4afed75689d4.png?v=1736845865&width=34',
            title: 'Adaptable System', 
            text: 'Designed to allow for future products and accessories.' },
        { 
            image: '//www.steadyrack.com/cdn/shop/files/Frame_371.png?v=1733762194&width=34',
            title: 'Safe & Secure', 
            text: 'Grub screws allow for lockable positioning, keeping your GearMate safe and secure.' },
        { 
            image: '//www.steadyrack.com/cdn/shop/files/Frame_369.png?v=1733762194&width=34',
            title: 'Space Saver',
             text: 'With three different bin sizes, hooks and hook and loop straps, store all your bike accessories neatly, ready for your next ride.' },
      ];


  return (
    <div>
      <div data-aos="fade-up" className="w-full h-screen bg-[url('https://www.steadyrack.com/cdn/shop/files/GearMate_hero_banner_desktop_1.png?v=1739408483&width=3840')] bg-cover bg-center">
      <div data-aos="fade-up" className='py-5 px-5 w-full h-full bg-transparent flex flex-col justify-center'>
         <div data-aos="fade-up" className="text-9xl font-bold mb-7 font-zuume tracking-normal uppercase italic text-white text-center">Gear<span style={{ WebkitTextStroke: "0.5px white", WebkitTextFillColor: "transparent" }}>MATE </span></div>
         <p data-aos="fade-up" className="text-4xl text-white font-semibold mb-7 text-center">Ready to Ride</p>
      </div>
     </div>

     <div className='mt-20'>
      <div ref={containerRefs[0]} className="relative w-full flex items-center justify-center">
        <video
          ref={videoRefs[0]}
          className={`transition-all duration-700 ease-out ${
            isExpanded[0] ? "w-[96%]" : "w-3/4"
          } h-auto opacity-100 translate-y-0`}
          src="https://www.steadyrack.com/cdn/shop/videos/c/vp/baf9d73c104b4c199ab1d4678c5cb033/baf9d73c104b4c199ab1d4678c5cb033.HD-1080p-7.2Mbps-42040357.mp4?v=0"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </div>
      </div>


     <div className=' pt-24 pb-10'>
     <div className='px-5  grid grid-flow-row-dense grid-cols-3'>
      <h1 className='text-4xl font-semibold mb-7'>About Our Innovative Storage Organizer System</h1>
      <div className='col-span-2 mt-3.5 mb-5 pl-32 pr-2.5'>
        <p data-aos="fade-up"  className='mb-4 leading-tight text-sm font-semibold'>
        The vision was to create a storage organizer 
        system that could be used as an accessory to our original Steadyrack bike racks,
         that could store everything you need for cycling in the one place. We did the 
         research, and there was nothing on the market and we knew this was a great 
         opportunity as a business to provide a great organisation system.
          </p>

          <p data-aos="fade-up"  className='mt-1.5 leading-tight text-sm font-semibold'>
          The Steadyrack Team have spent the last eighteen months perfecting our new product to ensure it was flawless.
           It was trial and error: concepts were created, prototypes tested, designs refined, and more concepts were 
           created, and more prototypes tested - you get the idea. With a sleek combination of hooks, bins, and 
           adjustable straps, GearMate lets you arrange your accessories your way. Fully customisable with over 200 arrangements,
            it adapts to suit your setup and style. Designed to install seamlessly behind your Steadyrack, its sturdy spine 
            supports brackets to hold all your essentials.
          </p>
      </div>
     </div>
    </div>

    <div className='px-5 grid grid-cols-3'>
  <div className='px-1 flex items-center justify-center overflow-hidden'>
    <div className="relative w-full h-[700px] overflow-hidden">
      <img
        src="https://www.steadyrack.com/cdn/shop/files/GearMate_grid_categories_small_72ecb98f-ef30-4e51-9e06-a0a037abe0e5.png?v=1737352665&width=3200"
        alt="Ảnh cột 1"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>

  <div className='col-span-2 px-1 overflow-hidden'>
    <div className="relative w-full h-[700px] overflow-hidden">
      <img
        src='https://www.steadyrack.com/cdn/shop/files/preview_images/48323b7a7aa941ebb98bad13bcd3bb30.thumbnail.0000000000_2048x.jpg?v=1738645527'
        alt="Ảnh cột 2"
        className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
      />
    </div>
  </div>
</div>

<div className='pt-11 pb-20'>
    <div className='px-5 mb-4'>
        <div data-aos="fade-up" className='mb-5'>
            <h1 className='text-4xl font-semibold text-black'>The Ultimate Features</h1>
        </div>
        <div className='mx-10 px-5'>
            <div className='grid grid-cols-12 gap-4'> {/* Loại bỏ h-screen, để nội dung tự điều chỉnh */}
                <div className="col-span-3 p-4 text-white flex flex-col"> {/* Loại bỏ items-center và justify-center từ đây */}
                    
                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">SteadyBracket™</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>A 3-hook system creates a secure support to either side of the SteadySpine, Available in three sizes.</p>
                    </div>

                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">SteadyBin™</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>Functional design to maximize access to your gear. Available in three sizes.</p>
                    </div>

                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">SteadySpine™</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>An innovative robust glass-filled nylon spine designed to support your gear.</p>
                    </div>


                </div>
                <div class="col-span-6 p-4 text-white flex items-center justify-center"> {/* Thêm items-center và justify-center vào đây */}
                    <img src='https://www.steadyrack.com/cdn/shop/files/image_1_3dca60f8-7ee0-4d68-97f8-fdce33ebc067.png?v=1737354642&width=2000'
                         className='w-full'/>  {/* Make image responsive */}
                </div>
                <div class="col-span-3 p-4 text-white flex flex-col"> {/* Loại bỏ items-center và justify-center từ đây */}
                <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">SteadyHook™</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>These versatile hooks can be flipped 180° to maximize use.</p>
                    </div>

                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">Easy Access</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>Obtuse exit angle allows for easy access and removal of smaller items.</p>
                    </div>

                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">SteadyLoop™</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>A hook and loop fastener for easy attachment of your gear.</p>
                    </div>
                    <div className='flex-shrink-0 w-full max-w-[320px] mb-14'>
                        <div className="flex items-center mb-3.5 border-black border-b">
                            <h3 className="text-black text-lg font-semibold tracking-tight pb-5">Grub Screws</h3>
                        </div>
                        <p data-aos="fade-left" className='text-black leading-tight text-sm font-semibold'>Allows for lockable positioning on all bins.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>


<div className='px-5 grid grid-cols-2 bg-black'>
  <div className='px-2.5'>
    <div className='relative overflow-hidden' style={{height: 'calc(700px + 20px)'}}>
      <img
        src="https://www.steadyrack.com/cdn/shop/files/SteadySpine_PDP.png?v=1739422159&width=3840"
        alt="Ảnh cột 1"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
      />
    </div>
  </div>
  
  <div className='grid grid-flow-row-dense grid-rows-2 gap-y-2.5'>
    <div className='px-2.5'>
      <div className='relative w-full h-[350px] overflow-hidden'>
        <img
          src="https://www.steadyrack.com/cdn/shop/files/GearMate_grid_dense_small_39eb4634-6065-4207-b9b9-e4e6de1a70d8.png?v=1737353435&width=3200"
          alt="Ảnh cột 1"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

    <div className='px-2.5'>
      <div className='relative w-full h-[350px] overflow-hidden'>
        <img
          src="https://www.steadyrack.com/cdn/shop/files/GearMate_grid_dense_small_-_1.png?v=1737353452&width=3200"
          alt="Ảnh cột 1"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  </div>
</div>

<div>
    <div className='pt-16 pb-28 bg-black'>
      <div className='px-5'>
        <BoxText items={items}/>
      </div>
    </div>
   </div>


   <div>
    <div className='px-5 bg-black'>
      <div className='grid grid-cols-2'>
       <div className='px-2.5'>
        <h1 className='text-4xl font-semibold mb-11 text-white'>Built To Last</h1>
        <div className='py-2.5'>
      <div className='relative w-full h-[680px] overflow-hidden'>
        <img
          src="https://www.steadyrack.com/cdn/shop/files/200_Arrangements_-_GearMate_PDP.png?v=1739416974&width=3840"
          alt="Ảnh cột 1"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
       </div>

       <div className='px-2.5'>
         <h1 className='text-4xl font-semibold mb-11 text-white'>Space Saver</h1>
         <div className='py-2.5'>
      <div className='relative w-full h-[680px] overflow-hidden'>
        <img
          src="https://www.steadyrack.com/cdn/shop/files/GearMate_grid_1.png?v=1737355384&width=3200"
          alt="Ảnh cột 1"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
       </div>
      </div>
    </div>
   </div>

   <div className='bg-black'>
     <div className=' pt-24 pb-12'>
      <h1 className=' font-impact text-white italic text-5xl uppercase tracking-tight px-5'>easy to install</h1>
     </div>
   </div>

   <div className="h-[540px]">
        <VideoOverlay
          videoSrc={VideoBody}
          title="Organise Your Gear, Your Way"
        />
      </div>

      <div>
        <div className='py-20'>
          <h1 className='px-5 font-impact font-bold text-black text-5xl italic tracking-tight uppercase'>Order GearMate Now</h1>
        </div>
      </div>

      <div>
        <div className='mb-20'>
          <div className='px-5'>
          <ProductDetailCut productId={6}/>
          </div>
        </div>
      </div>


    </div>
  )
}

export default GearMate