import React from "react";
import TextStep from "../../components/TextTitle/TextStep";
import ShopImg from "../../assets/Shops/hero_ecfe2fe4-374d-4149-8ac2-866a6579f6b6.png";
import CompareModel from "../../components/CompareModel/CompareModel";
import ProflexRangerList from "../../components/product/ProflexRangerList";

function ProflexRanger() {
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
  ];
  return (
    <div>
      <div className="relative w-full">
        <img src={ShopImg} alt="Contact Us Banner" className="w-full h-auto" />

        <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="transition-all w-full text-center">
            <span
              className="block text-white font-bold italic tracking-wide opacity-100 animate-fade-up 
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              data-aos="fade-up"
            >
              ProFlex Collection
            </span>
          </div>
        </div>
      </div>

      <div className="m-6">
        <nav className="flex items-center space-x-2 text-sm">
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

      <ProflexRangerList />

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

export default ProflexRanger;
