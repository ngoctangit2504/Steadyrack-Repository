import React, { useState, useEffect } from "react";
import ShopImg from "../../assets/Shops/hero_ecfe2fe4-374d-4149-8ac2-866a6579f6b6.png";
import CompareModel from "../../components/CompareModel/CompareModel";
import ProflexRangerList from "../../components/product/ProflexRangerList";

function ProflexRanger() {
  const [activeStep, setActiveStep] = useState(4);

  useEffect(() => {
    const handleScroll = () => {
      const step2Position = document.getElementById("step5").offsetTop;
      const scrollY = window.scrollY + window.innerHeight / 2;

      if (scrollY >= step2Position) {
        setActiveStep(5);
      } else {
        setActiveStep(4);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              ProFlex Collection
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
        <ProflexRangerList />
      </div>

      <div className="px-5 mb-28">
        <div className="grid grid-cols-3">
          <div className="col-span-1"></div>

          <div className="col-span-2">
            <h1 className=" text-6xl tracking-tight font-semibold mb-5">
              Not sure which ProFlex to choose for your bike?
            </h1>
            <p className=" text-xl tracking-tight">
              Follow the steps below to work out which size of our ProFlex Racks
              is the right fit for your bike.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="grid grid-cols-3">
          {/* Cột STEP1 & STEP2 */}
          <div className="col-span-1">
            <div className="sticky top-0 flex flex-col gap-5">
              <p
                className={`text-8xl font-zuume tracking-tight italic ${
                  activeStep === 4 ? "text-black" : "text-gray-200"
                }`}
              >
                STEP1
              </p>
              <p
                className={`text-8xl font-zuume tracking-tight italic ${
                  activeStep === 5 ? "text-black" : "text-gray-200"
                }`}
              >
                STEP2
              </p>
            </div>
          </div>

          {/* Cột Nội Dung */}
          <div className="col-span-2">
            {/* Phần trên */}
            <div id="step4" className="min-h-[50vh]">
              <h1 className="border-b border-black pb-5 mb-10 text-4xl tracking-tight font-semibold">
                Tire Size
              </h1>
              <div className="grid grid-cols-3">
                <div className="col-span-1">
                  <img src="https://www.steadyrack.com/cdn/shop/files/1_76e100d8-9c3a-47ad-84ba-0e8b3ed09024.png?v=1739879071&width=1100" />
                </div>
                <div className="col-span-2">
                  <p className="text-xl tracking-tight">
                    The width of your bike tire will determine which rack you
                    should choose. The ProFlex comes in three sizes: Narrow,
                    Wide, and Fat, each size catering for a range of different
                    bike tire sizes.
                  </p>
                  <p className="text-xl tracking-tight">
                    ProFlex Narrow is for tires up to 2.1" in width.
                  </p>
                  <p className="text-xl tracking-tight">
                    ProFlex Wide is for tires 2.1" - 2.8" in width.
                  </p>
                  <p className="text-xl tracking-tight">
                    ProFlex Fat is for tires up to 5" in width.
                  </p>
                </div>
              </div>
            </div>

            {/* Phần dưới */}
            <div id="step5" className="min-h-[50vh]">
              <h1 className="border-b border-black pb-5 mb-10 text-4xl tracking-tight font-semibold">
                Fender Stays with tight tolerance
              </h1>
              <div className="grid grid-cols-3">
                <div className="col-span-1">
                  <img src="https://www.steadyrack.com/cdn/shop/files/2_99e3e372-3490-4408-9ae5-29a8d037f4e0.png?v=1739936652&width=1100" />
                </div>
                <div className="col-span-2">
                  <p className="text-xl tracking-tight">
                    Some bikes with fenders/mudguards which fit tightly to the
                    tire will not fit our racks.
                  </p>
                  <p className="text-xl tracking-tight">
                    The ProFlex works by sliding between the fender/mudguard and
                    tire when rolling the bike onto the rack. Before you
                    purchase, take a moment to make sure your bike will fit
                    safely and securely.
                  </p>
                  <p className="text-xl tracking-tight">
                    If the stays on your bike are very close to the tire or
                    rigid with no flexibility, there may not be room to fit the
                    rack arms in between.
                  </p>
                  <p className="text-xl tracking-tight">
                    We recommend a minimum 20mm or 3/4 inch clearance between
                    the tire and stays to enable the bike rack to flex and fit
                    between.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompareModel />
    </div>
  );
}

export default ProflexRanger;
