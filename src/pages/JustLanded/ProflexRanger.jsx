import React from 'react';
import VideoZoomComponent from '../../components/videoComponent/VideoZoom';
import BoxText from '../../components/carousel/BoxTextCarousel';
import VideoOverlay from '../../components/videoComponent/VideoOverlay';
import VideoBody from "../../assets/videos/Bike Storage_ Steadyrack s Journey with Founder Dave _ Hang Your.mp4";
import ProductDetailCut from '../../components/product/ProductDetailCut';

function ProflexRanger() {
  const items = [
    { title: 'Narrow, Wide & Fat', text: 'ProFlex is available in three sizes: Narrow, for road, city, gravel, commuter and BMX bikes; Wide, for eBikes, mountain bikes, and gravel bikes; and Fat, for plus, cruiser or fat bikes. All sizes are compatible with fenders and mudguards.' },
    { title: 'New Modern Finish', text: 'Enhanced with a black nickel finish, ProFlex showcases a bold and premium aesthetic.' },
    { title: 'Adaptable System', text: 'Allows for the Rear Tyre Rest to slide on and off and be replaced with different sizes and designed to allow for future products and accessories.' },
    { title: 'GearMate Ready', text: 'Featuring an integrated spine, ProFlex is GearMate ready, offering a seamless solution to store both your cycling gear and bike in one organized space.' },
    { title: 'Stronger', text: 'ProFlex has been designed with an increased load capacity of 121lbs, compared to 77lbs.' },
  ];

  return (
    <div>
     <div data-aos="fade-up" className="w-full h-screen bg-[url('https://www.steadyrack.com/cdn/shop/files/1_f095e61b-a447-4f48-92a9-e7c8a0f728e8.png?v=1737101291&width=3840')] bg-cover bg-center">
      <div data-aos="fade-up" className='py-5 px-5 w-full h-full bg-transparent flex flex-col justify-end'>
         <div data-aos="fade-up" className="text-8xl font-bold mb-7 font-zuume tracking-normal italic text-white text-center">READY<span style={{ WebkitTextStroke: "0.5px white", WebkitTextFillColor: "transparent" }}> STEADY </span>PRO</div>
         <p data-aos="fade-up" className="text-4xl text-white font-semibold mb-7 text-center">The New Generation of Steadyrack</p>
      </div>
     </div>

    <div className=''>
    <div>
     <VideoZoomComponent 
        videoSrc="/path/to/your/video.mp4"
        defaultWidth="w-64"
        defaultHeight="h-36"
        zoomedWidth="w-full"
        zoomedHeight="h-full"
      />
     </div>
    </div>

    <div className=' pt-24 pb-10'>
     <div className='px-5  grid grid-flow-row-dense grid-cols-3'>
      <h1 className='text-4xl font-semibold mb-7'>The Future of Bike Storage is Here</h1>
      <div className='col-span-2 mt-3.5 mb-5 pl-32 pr-2.5'>
        <p data-aos="fade-up"  className='mb-4 leading-tight text-sm font-semibold'>Since 2009, Steadyrack have been manufacturing a globally recognized bike storage solution and we have without a doubt made our mark.
         However, as we all know, market demands are always evolving, and we knew that after 15 years, it was time to take the leap and produce a new, cutting-edge product.
          The question was: How do we create a new and improved Steadyrack that is going to stand out from our already successful product?
          </p>

          <p data-aos="fade-up"  className='mt-1.5 leading-tight text-sm font-semibold'>
          We understood the importance of recognizing what works, as well as maintaining the exceptional functionality that has made our current Steadyrack range a leading choice in the bike storage market.
           After two years of brainstorming, testing prototypes, and meticulously perfecting every tiny detail, we are thrilled to unveil the newest member to the Steadyrack collection.
          </p>
      </div>
     </div>
    </div>

    <div className='px-5 grid grid-cols-3'>
  <div className='px-1 flex items-center justify-center overflow-hidden'>
    <div className="relative w-full h-[700px] overflow-hidden">
      <img
        src="https://www.steadyrack.com/cdn/shop/files/SteadySpine_PDP.png?v=1739422159&width=3840"
        alt="Ảnh cột 1"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>

  <div className='col-span-2 px-1 overflow-hidden'>
    <div className="relative w-full h-[700px] overflow-hidden">
      <img
        src='https://www.steadyrack.com/cdn/shop/files/Solutions_2.png?v=1739934421&width=600'
        alt="Ảnh cột 2"
        className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
      />
    </div>
  </div>
</div>

<div className='px-5 grid grid-cols-2 bg-black'>
  <div className='px-2.5'>
    <div className='relative overflow-hidden' style={{height: 'calc(700px + 20px)'}}>
      <img
        src="https://www.steadyrack.com/cdn/shop/files/ProFlex_grid_dense_large_-_3_sizes.png?v=1737345273&width=3200"
        alt="Ảnh cột 1"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
      />
    </div>
  </div>
  
  <div className='grid grid-flow-row-dense grid-rows-2 gap-y-2.5'>
    <div className='px-2.5'>
      <div className='relative w-full h-[350px] overflow-hidden'>
        <img
          src="https://www.steadyrack.com/cdn/shop/files/ProFlex_grid_dense_small_-_black_chrome_finish.png?v=1737345298&width=3200"
          alt="Ảnh cột 1"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

    <div className='px-2.5'>
      <div className='relative w-full h-[350px] overflow-hidden'>
        <img
          src="https://www.steadyrack.com/cdn/shop/files/ProFlex_grid_dense_small_-_rear_mounting_plate.png?v=1737345321&width=3200"
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
          src="https://www.steadyrack.com/cdn/shop/files/Just_Landed.png?v=1739934386&width=600"
          alt="Ảnh cột 1"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
       </div>

       <div className='px-2.5'>
         <h1 className='text-4xl font-semibold mb-11 text-white'>Pivoting Pioneers</h1>
         <div className='py-2.5'>
      <div className='relative w-full h-[680px] overflow-hidden'>
        <img
          src="https://www.steadyrack.com/cdn/shop/files/ProFlex_grid_dense_small_-_rear_mounting_plate.png?v=1737345321&width=3200"
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
     <h1 className='px-5 text-4xl font-semibold text-black'>Fits Almost Any Bike</h1>
    </div>
   </div>

   <div className='px-5 pb-24'>
    <div className='px-5 relative w-full h-screen flex items-center justify-center text-white'>
    <iframe
        allow="autoplay; loop; muted; fullscreen"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="https://www.youtube.com/embed/t91L9sdRGok?autoplay=1&loop=1&mute=1&playlist=t91L9sdRGok"
        title="YouTube video"
      >
      </iframe>
      <div className='absolute bottom-5 left-5 w-[20%]'>
        <img 
        src='//www.steadyrack.com/cdn/shop/files/STEADYRACK_ICON_PROTECT_YOUR_BIKE_RED_RGB.png?v=1737349171&width=84'
        className='w-10 h-10 pb-3'
        />
        <h1 className='text-white text-3xl font-semibold mb-4'>Protect Your Bike</h1>
        <p className='text-white font-semibold leading-tight'>Bikes are precisely positioned in the rack with the front tire providing support, safeguarding the frame and rims from any risk of damage.</p>
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
          title="Innovation, Redefined."
        />
      </div>

      <div>
        <div className='py-20'>
          <h1 className='px-5 font-impact font-bold text-black text-5xl italic tracking-tight uppercase'>Order ProFlex Now</h1>
        </div>
      </div>

      <div>
        <div className='mb-20'>
          <div className='px-5'>
          <ProductDetailCut productId={17}/>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default ProflexRanger