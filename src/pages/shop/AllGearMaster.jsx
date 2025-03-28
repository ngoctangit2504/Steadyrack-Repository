import React from 'react';
import ShopImg from "../../assets/Shops/hero_ecfe2fe4-374d-4149-8ac2-866a6579f6b6.png";
import GearMasterList from "../../components/product/ProductGearmateList";
import CompareModel from '../../components/CompareModel/CompareModel';

function AllGearMaster() {
  return (
    <div>
    <div className="relative w-full">
      <img src={ShopImg} alt="Contact Us Banner" className="w-full h-auto" />

      <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-black/60 to-transparent p-4">
        <div className="transition-all w-full text-center">
          <span
            className="block text-white text-8xl font-bold italic font-impact tracking-tight opacity-100 animate-fade-up"
            data-aos="fade-up"
          >
            GearMate Collection
          </span>
        </div>
      </div>
    </div>

    <div className='my-10'>
    <GearMasterList/>
    </div>
    
    <CompareModel/>
    </div>
  )
}

export default AllGearMaster