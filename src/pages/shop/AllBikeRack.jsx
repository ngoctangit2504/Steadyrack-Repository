import React from 'react';
import ShopImg from "../../assets/Shops/hero_ecfe2fe4-374d-4149-8ac2-866a6579f6b6.png";
import ProductRackList from "../../components/product/ProductRackList";
import CompareModel from '../../components/CompareModel/CompareModel';

function AllBikeRack() {
  return (
    <div>
    <div className="relative w-full">
      <img src={ShopImg} alt="Contact Us Banner" className="w-full h-auto" />

      <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-black/60 to-transparent p-4">
        <div className="transition-all w-full text-center">
          <span
            className="block text-white text-8xl font-bold italic tracking-wide opacity-100 animate-fade-up"
            data-aos="fade-up"
          >
            ALL PRODUCTS
          </span>
        </div>
      </div>
    </div>

    <nav className="flex items-center space-x-2 text-sm">
      <a to="/collections/proflex-range" title="Shop" aria-label="Shop" className=" transition">
        Shop
      </a>
      <span>/</span>
      <a to="/collections/proflex-range" title="All Products" aria-label="All Products" className="transition">
        All Products
      </a>
    </nav>

    <ProductRackList/>
    <CompareModel/>

    </div>
  )
}

export default AllBikeRack