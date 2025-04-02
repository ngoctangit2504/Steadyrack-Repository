import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Faq() {
  return (
    <div>
      <div>
        <img
          src="https://www.steadyrack.com/cdn/shop/files/Contact_us_form_banner_desktop.png?v=1737081239&width=2000"
          alt="Contact Us Banner"
          className="w-full h-auto"
        />
      </div>

      <div className="py-20 pb-18">
        <div className="flex flex-col mx-80 px-5">
          <h1
            data-aos="fade-up"
            className=" text-5xl font-semibold tracking-tight mb-3"
          >
            How Can We Help You?
          </h1>
          <p data-aos="fade-up" className=" font-semibold tracking-tight mb-10">
            Have a question about our Steadyrack products, shipping, returns,
            warranty policies or something else? You’ll most likely find the
            answer here. For all other concerns and inquiries please get in
            touch with our <span className=" underline">Support Team.</span>
          </p>
          <div className="relative mb-10">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="search"
              placeholder="Search FAQs"
              className="pl-10 pr-5 py-2 bg-gray-200 rounded-full placeholder:text-black w-full"
            />
          </div>
          <div className=" grid grid-cols-9">
            <div className="">
              <p className=" font-semibold tracking-tight">Browse:</p>
            </div>

            <div className=" col-span-8 space-x-1 space-y-1">
              <button className=" font-semibold bg-gray-200 rounded-full hover:text-white hover:bg-black focus:ring-2 focus:ring-black focus:outline-none  px-5 py-1">
                ProFlex
              </button>
              <button className=" font-semibold bg-gray-200 rounded-full hover:text-white hover:bg-black focus:ring-2 focus:ring-black focus:outline-none  px-5 py-1">
                GearMate
              </button>
              <button className=" font-semibold bg-gray-200 rounded-full hover:text-white hover:bg-black focus:ring-2 focus:ring-black focus:outline-none  px-5 py-1">
                Rack Function
              </button>
              <button className=" font-semibold bg-gray-200 rounded-full hover:text-white hover:bg-black focus:ring-2 focus:ring-black focus:outline-none  px-5 py-1">
                Product Specifications
              </button>
              <button className=" font-semibold bg-gray-200 rounded-full hover:text-white hover:bg-black focus:ring-2 focus:ring-black focus:outline-none  px-5 py-1">
                Design and Installation
              </button>
              <button className=" font-semibold bg-gray-200 rounded-full hover:text-white hover:bg-black focus:ring-2 focus:ring-black focus:outline-none  px-5 py-1">
                Warranty, Returns & Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
