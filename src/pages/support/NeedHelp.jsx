import React, { useState, useEffect } from "react";
import YouTubeBackground from "../../components/videoComponent/YouTubeBackground";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

function NeedHelp() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const trackScrollPosition = () => {
      const stepMarkers = ["step1", "step2", "step3"].map(
        (id) => document.getElementById(id).offsetTop
      );
      const scrollY = window.scrollY + window.innerHeight / 2;

      if (scrollY >= stepMarkers[2]) {
        setCurrentStep(3);
      } else if (scrollY >= stepMarkers[1]) {
        setCurrentStep(2);
      } else {
        setCurrentStep(1);
      }
    };

    window.addEventListener("scroll", trackScrollPosition);
    return () => window.removeEventListener("scroll", trackScrollPosition);
  }, []);

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

  const videoId = "hqwJF28N-D0";
  const textContent = {
    heading: "FINDING THE PERFECT FIT",
  };

  return (
    <div>
      <div>
        <YouTubeBackground videoId={videoId} text={textContent} />
      </div>

      <div className="py-20">
        <div data-aos="fade-up" className=" mx-96 px-5">
          <h1 className=" text-black text-4xl font-semibold text-center mb-7">
            Need Some Help?
          </h1>
          <p className="text-black text-base tracking-tight text-center mb-4">
            With so many bike racks available, where should you start? Are you
            after a universal rack or one tailored to your specific bike? The
            best choice is often one that suits your bike's unique features.
          </p>
          <p className="text-black text-base tracking-tight text-center mb-4">
            When selecting from our ranges, consider a few key factors: tire
            width, wheel diameter, and whether your bike has fenders
            (mudguards). To make it easy, we’ve created the perfect guide to
            help you choose the right rack!
          </p>
        </div>
      </div>

      <div className="px-5 pb-8">
        <div className=" grid grid-cols-12 space-x-1">
          <div className="">
            <p className=" font-semibold tracking-tight">Browse:</p>
          </div>

          <div className="col-span-11 flex items-center space-x-1">
            <button className="font-semibold bg-gray-200 rounded-full hover:text-white hover:bg-red-600 focus:ring-2 focus:ring-black focus:outline-none px-5 py-1">
              Classic Range
            </button>
            <button className="font-semibold bg-gray-200 rounded-full hover:text-white hover:bg-red-600 focus:ring-2 focus:ring-black focus:outline-none px-5 py-1">
              ProFlex Range
            </button>

            <div className="flex-grow"></div>

            <button className="flex items-center justify-center h-12 font-semibold border-2 border-black rounded-full hover:text-white hover:bg-black focus:ring-2 focus:ring-black focus:outline-none px-6">
              <span className="mr-2">CLASSIC RANGE INSTALLATION</span>
              <ArrowDownIcon className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center h-12 font-semibold border-2 border-black rounded-full hover:text-white hover:bg-black focus:ring-2 focus:ring-black focus:outline-none px-6">
              <span className="mr-2">PROFLEX RANGE INSTALLATION</span>
              <ArrowDownIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-5">
        <img src="https://www.steadyrack.com/cdn/shop/files/Frame_470.png?v=1733678473&width=3840" />
      </div>

      <div className="pt-12">
        {/* Tiêu đề */}
        <div className="px-5 mb-7">
          <h1 className="font-impact tracking-tight text-7xl italic uppercase">
            Classic Range
          </h1>
        </div>

        <div className="px-5">
          <div className="grid grid-cols-3">
            {/* Cột hiển thị STEP */}
            <div className="col-span-1">
              <div className="sticky top-16 flex flex-col">
                {["STEP1", "STEP2", "STEP3"].map((step, index) => (
                  <p
                    key={index}
                    className={`mb-2.5 text-8xl font-zuume tracking-tight italic ${
                      currentStep === index + 1 ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {step}
                  </p>
                ))}
              </div>
            </div>
            {/* Cột nội dung */}
            <div className="col-span-2">
              {/* STEP 1 */}
              <div id="step1" className="mb-16 min-h-[33vh]">
                <h1 className="border-b border-black pb-5 mb-10 text-4xl tracking-tight font-semibold">
                  Narrow space between the downtube and wheel
                </h1>
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <img src="https://www.steadyrack.com/cdn/shop/files/2_99e3e372-3490-4408-9ae5-29a8d037f4e0.png?v=1739936652&width=1100" />
                  </div>
                  <div className="col-span-2">
                    <p className="text-xl tracking-tight">
                      Some bikes, such as time trial bikes, have a narrow
                      spacing between the downtube and the tire...
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 2 */}
              <div id="step2" className="mb-16 min-h-[33vh]">
                <h1 className="border-b border-black pb-5 mb-10 text-4xl tracking-tight font-semibold">
                  Does your bike have fixed fenders or mudguards attached to the
                  front forks?
                </h1>
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <img src="https://www.steadyrack.com/cdn/shop/files/3_000e81f7-f84a-4f55-b7cb-2c22a3430a81.png?v=1739936958&width=1100" />
                  </div>
                  <div className="col-span-2">
                    <p className="text-xl tracking-tight">
                      If your bike has fenders or mudguards, you will still need
                      to match the tire and wheel size...
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 3 */}
              <div id="step3" className="mb-16 min-h-[33vh]">
                <h1 className="border-b border-black pb-5 mb-10 text-4xl tracking-tight font-semibold">
                  Tire Size
                </h1>
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <img src="https://www.steadyrack.com/cdn/shop/files/1_76e100d8-9c3a-47ad-84ba-0e8b3ed09024.png?v=1739879071&width=1100" />
                  </div>
                  <div className="col-span-2">
                    <p className="text-xl tracking-tight">
                      Wheel size is the diameter of your wheel from edge to edge
                      (A). Tire width is the width of the tire on the wheel (B).
                    </p>
                    <p className="text-xl tracking-tight">
                      The tire width will determine which size rack to
                      purchase...
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End cột nội dung */}
          </div>
        </div>
      </div>

      <div className="pt-12">
        <div className="px-5 mb-7">
          <h1 className=" font-impact tracking-tight text-7xl italic uppercase">
            ProFlex Range
          </h1>
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
                Fender Stays With Tight Tolerance
              </h1>
              <div className="grid grid-cols-3">
                <div className="col-span-1">
                  <img src="https://www.steadyrack.com/cdn/shop/files/4_8f759941-9368-4a8d-9571-13f92a7ef8e1.png?v=1739879136&width=1100" />
                </div>
                <div className="col-span-2">
                  <p className="text-xl tracking-tight">
                    Some bikes with fenders/mudguards which fit tightly to the
                    tire will not fit our racks.
                  </p>
                  <p className="text-xl tracking-tight">
                    The ProFlex works by sliding between the fender/mudguard and
                    tire when rolling the bike onto the rack.
                  </p>
                </div>
              </div>
            </div>

            {/* Phần dưới */}
            <div id="step5" className="min-h-[50vh]">
              <h1 className="border-b border-black pb-5 mb-10 text-4xl tracking-tight font-semibold">
                Tire Size
              </h1>
              <div className="grid grid-cols-3">
                <div className="col-span-1">
                  <img src="https://www.steadyrack.com/cdn/shop/files/1_76e100d8-9c3a-47ad-84ba-0e8b3ed09024.png?v=1739879071&width=1100" />
                </div>
                <div className="col-span-2">
                  <p className="text-xl tracking-tight">
                    Wheel size is the diameter of your wheel from edge to edge
                    (A). Tire width is the width of the tire on the wheel (B).
                  </p>
                  <p className="text-xl tracking-tight">
                    Tires up to 2.1": The Classic Rack will be the best fit.
                  </p>
                  <p className="text-xl tracking-tight">
                    Tires 2.1" - 2.8": The MTB Rack will be the best fit.
                  </p>
                  <p className="text-xl tracking-tight">
                    Tires 2.8" - 5": The Fat Rack will be the best fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeedHelp;
