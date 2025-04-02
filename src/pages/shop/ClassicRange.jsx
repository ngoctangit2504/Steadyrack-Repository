import React from "react";
import ShopImg from "../../assets/Shops/hero_ecfe2fe4-374d-4149-8ac2-866a6579f6b6.png";
import TextStep from "../../components/TextTitle/TextStep";
import CompareModel from "../../components/CompareModel/CompareModel";
import ProductRackLIst from "../../components/product/ProductRackList";

function ClassicRange() {
  const stepsData = [
    {
      title: "Tire Size",
      image:
        "//www.steadyrack.com/cdn/shop/files/1_76e100d8-9c3a-47ad-84ba-0e8b3ed09024.png?v=1739879071&width=1200",
      description: `The width of your bike tire will determine which rack you should choose. The ProFlex comes in three sizes: Narrow, Wide, and Fat, each size catering for a range of different bike tire sizes. 
          ProFlex Narrow is for tires up to 2.1" in width.
          ProFlex Wide is for tires 2.1" - 2.8" in width. 
          ProFlex Fat is for tires up to 5" in width.`,
    },
    {
      title: "Fender Stays with tight tolerance",
      image:
        "//www.steadyrack.com/cdn/shop/files/2_99e3e372-3490-4408-9ae5-29a8d037f4e0.png?v=1739936652&width=1200",
      description: `Some bikes with fenders/mudguards which fit tightly to the tire will not fit our racks.
          The ProFlex works by sliding between the fender/mudguard and tire when rolling the bike onto the rack. Before you purchase, take a moment to make sure your bike will fit safely and securely.
          If the stays on your bike are very close to the tire or rigid with no flexibility, there may not be room to fit the rack arms in between.
          We recommend a minimum 20mm or 3/4 inch clearance between the tire and stays to enable the bike rack to flex and fit between.`,
    },
    {
      title:
        "Does your bike have fixed fenders or mudguards attached to the front forks?",
      image:
        "https://www.steadyrack.com/cdn/shop/files/3_000e81f7-f84a-4f55-b7cb-2c22a3430a81.png?v=1739936958&width=1100",
      description: `If your bike has fenders or mudguards, you will still need to match the tire and wheel size - see step 1 above. However, your bike will be suited to our ProFlex range which is fender compatible. 
            You will also need to confirm the space between your fender stays and tire is suitable - see step 4 below
            MTB mudguards - Please note many mountain bikes with small fenders or mudguards will not require the 
            ProFlex range - being much smaller they will not interfere with the function of our Classic Rack or Mountain Bike Rack.`,
    },
    {
      title: "Fender stays with tight tolerance",
      image:
        "https://www.steadyrack.com/cdn/shop/files/4_8f759941-9368-4a8d-9571-13f92a7ef8e1.png?v=1739879136&width=1100",
      description: `Some bikes with fenders or mudguards which fit tightly to the wheel/tire will not fit our racks. 
            Before you purchase, make sure you determine if your bike needs the Classic Range,
             or the ProFlex that is fender compatible.`,
    },
  ];
  return (
    <div>
      <div className="relative w-full">
        <img src={ShopImg} alt="Contact Us Banner" className="w-full h-auto" />

        <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="transition-all w-full text-center">
            <span
              className="block text-white font-impact italic tracking-tight opacity-100 animate-fade-up uppercase 
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              data-aos="fade-up"
            >
              Classic Range
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

      <div className="my-10">
        <ProductRackLIst />
      </div>

      <div className="l-section-header__content p-4 md:pl-[10.5cm] md:pr-4 mb-28">
        <div className="text-center md:text-left">
          <h2 className="l-section-title text-2xl md:text-5xl font-semibold mb-4">
            Not sure which ProFlex to choose for your bike?
          </h2>
          <div className="l-section-content rte text-base md:text-lg">
            <p>
              Follow the steps below to work out which size of our ProFlex Racks
              is the right fit for your bike.
            </p>
          </div>
        </div>
      </div>

      <TextStep steps={stepsData} />

      <CompareModel />
    </div>
  );
}

export default ClassicRange;
