import React from 'react';
import YouTubeBackground from "../../components/videoComponent/YouTubeBackground";
import { ArrowDownIcon } from "@heroicons/react/24/outline";


function NeedHelp() {

  const videoId = 'hqwJF28N-D0'; 
  const textContent = {
    heading: 'FINDING THE PERFECT FIT',
  };

  return (
    <div>
    
    <div>
      <YouTubeBackground videoId={videoId} text={textContent}/>
     </div>

     <div className='py-20'>
        <div data-aos="fade-up" className=' mx-96 px-5'>
           <h1 className=' text-black text-4xl font-semibold text-center mb-7'>Need Some Help?</h1>
           <p className='text-black text-base tracking-tight text-center mb-4'>With so many bike racks available, where should you start? Are you after a universal rack or one tailored to your specific bike? The best choice is often one that suits your bike's unique features.</p>
           <p className='text-black text-base tracking-tight text-center mb-4'>When selecting from our ranges, consider a few key factors: tire width, wheel diameter, and whether your bike has fenders (mudguards). To make it easy, we’ve created the perfect guide to help you choose the right rack!</p>
           
        </div>
     </div>

     <div className='px-5 pb-8'>
     <div className=' grid grid-cols-12 space-x-1'>
       <div className=''>
         <p className=' font-semibold tracking-tight'>Browse:</p>
       </div>

       <div className="col-span-11 flex items-center space-x-1">
  <button className="font-semibold bg-gray-200 rounded-full hover:text-white hover:bg-red-600 focus:ring-2 focus:ring-black focus:outline-none px-5 py-1">
    Classic Range
  </button>
  <button className="font-semibold bg-gray-200 rounded-full hover:text-white hover:bg-red-600 focus:ring-2 focus:ring-black focus:outline-none px-5 py-1">
    ProFlex Range
  </button>
  
  <div className="flex-grow"></div>
  
  <button className="flex h-12 font-semibold border-2 border-black p-5 rounded-full hover:text-white hover:bg-black focus:ring-2 focus:ring-black focus:outline-none px-5 py-1">
  CLASSIC RANGE INSTALLATION<ArrowDownIcon className="w-6 h-6" />
  </button>
  <button className="flex h-12 font-semibold border-2 border-black rounded-full hover:text-white hover:bg-black focus:ring-2 focus:ring-black focus:outline-none px-5 py-1">
  PROFLEX RANGE INSTALLATION<ArrowDownIcon className="w-6 h-6" />
  </button>
</div>
      </div>
     </div>

    </div>
  )
}

export default NeedHelp