import React from "react";
import ShopImg from "../../assets/Shops/hero_ecfe2fe4-374d-4149-8ac2-866a6579f6b6.png";
import ProductList from "../../components/product/ProductSparePartList";
import CompareModel from "../../components/CompareModel/CompareModel";

function AllSpareParts() {
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
              SPARE PARTS
            </span>
          </div>
        </div>
      </div>

      <ProductList />
      <CompareModel />
    </div>
  );
}

export default AllSpareParts;
