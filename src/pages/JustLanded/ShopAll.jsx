import React from "react";
import ShopImg from "../../assets/Shops/hero_ecfe2fe4-374d-4149-8ac2-866a6579f6b6.png";
import ButtonA from "../../components/buttons/ButtonA";
import ButtonB from "../../components/buttons/ButtonB";
import videoHead from "../../assets/videos/Introducing-the-new-ProFlex-Bike-Rack2.mp4";
import CompareModel from "../../components/CompareModel/CompareModel";
import ProductNewList from "../../components/product/ProductNewList";

function ShopAll() {
  return (
    <div>
      <div className="relative w-full">
        <img src={ShopImg} alt="Contact Us Banner" className="w-full h-auto" />

        <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="transition-all w-full text-center">
            <span
              className="block text-white text-8xl font-bold italic tracking-tight uppercase font-impact opacity-100 animate-fade-up"
              data-aos="fade-up"
            >
              ProFlex & GearMate
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-6 py-2.5 w-full">
        <div>
          <nav className=" flex items-center font-semibold space-x-2 text-sm">
            <a href="#" title="Shop" aria-label="Shop" className="transition">
              Shop
            </a>
            <span>/</span>
            <a
              href="#"
              title="All Products"
              aria-label="All Products"
              className="transition"
            >
              All Products
            </a>
          </nav>
        </div>
      </div>

      <div className="py-5">
        <ProductNewList />
      </div>

      <div data-aos="fade-up" className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoHead} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 bg-black bg-opacity-40">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 mb-6">
            The Future of Bike Storage is Here.
          </h1>

          <div className="flex space-x-4">
            <ButtonA
              text="DISCOVER PROFLEX"
              onClick={() => alert("Clicked Proflex")}
            />
            <ButtonB
              text="DISCOVER GEARMATE"
              onClick={() => alert("Clicked GearMate")}
            />
          </div>
        </div>
      </div>

      <CompareModel />
    </div>
  );
}

export default ShopAll;
