import React, { useEffect, useRef, useState } from "react";
import BoxText from "../../components/carousel/BoxTextCarousel";
import VideoOverlay from "../../components/videoComponent/VideoOverlay";
import ProductDetailCut from "../../components/product/ProductDetailCut";
import Banner from "../../layouts/Banner";
import SubHeader from "../../layouts/SubHeader";
import Fotter from "../../layouts/Footer";

import { CartProvider } from "../../contexts/CartContext";
import Cart from "../../components/cart/Cart";

import { motion, AnimatePresence } from "framer-motion";
import TextLineIn from "../../components/videoComponent/TextLineIn";

const features = [
  {
    id: 1,
    title: "SteadyPivot™",
    content:
      "Patented Steadyrack pivot capability enabling far greater space saving, and easy bike access.",
  },
  {
    id: 2,
    title: "SteadySpine™",
    content:
      "Glass-filled nylon spine with 28 bracket positions, offering over 200 GearMate storage combinations.",
  },
  {
    id: 3,
    title: "SteadyClick™",
    content: "Simplified assembly with slide-and-click system for end caps.",
  },
  {
    id: 4,
    title: "SteadyFold™",
    content:
      "Steadyrack patented clip lock system which allows the rack to fold up out of the way when not in use.",
  },
  {
    id: 5,
    title: "SteadyHold™",
    content:
      "Patented Steadyrack ‘cradle’ which securely holds the bike in the rack, drastically minimizing the risk of fall.",
  },
  {
    id: 6,
    title: "SteadyFlex™",
    content:
      "Flexible rack ‘arms’ which move to allow clearance for bikes with fenders/mudguards.",
  },
  {
    id: 7,
    title: "SteadyLoad™",
    content:
      "Patented Steadyrack easy loading roll-in-roll-out innovation that allows user to rack their bike without lifting off the ground.",
  },
  {
    id: 8,
    title: "SteadySaddle™",
    content:
      "Flexible reinforced nylon entry point ‘saddle’ which enables bikes with fenders/mudguards to use the rack.",
  },
  {
    id: 9,
    title: "SteadyRest™",
    content:
      "Removable and innovative rear tire rest reduces wall scuffs and serves as a pivot point.",
  },
];

const FeatureBlock = ({ feature, isActive, toggleBlock, isRightColumn }) => {
  return (
    <div className="w-full max-w-[320px]">
      <div className="flex items-start mb-3.5 relative">
        <button
          className="mr-2 text-lg bg-gray-200 font-bold text-black rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => toggleBlock(feature.id)}
        >
          {isActive ? "-" : "+"}
        </button>
        <h3 className="text-black text-lg font-semibold tracking-tight pb-5 relative z-10">
          {feature.title}
        </h3>
        {/* Đường kẻ chạy có điều kiện */}
        <motion.div
          className="absolute bottom-0 h-[2px] bg-black"
          initial={{
            width: 0,
            right: isRightColumn ? 0 : "auto",
            left: isRightColumn ? "auto" : 0,
          }}
          animate={isActive ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.p
            data-aos="fade-left"
            className="text-black leading-tight text-sm font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {feature.content}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

function ProflexRanger() {
  const [activeId, setActiveId] = useState(null);

  const toggleBlock = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const contentRef = useRef(null);
  const imageRefs = [useRef(null)];
  const containerImgRefs = [useRef(null)];
  const [isExpandedImg, setIsExpandedImg] = useState([false]);
  const [textHidden, setTextHidden] = useState(false); // Thêm state để theo dõi trạng thái ẩn/hiện text

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !containerImgRefs[0].current) return;

      const contentTop = contentRef.current.getBoundingClientRect().top;
      const imageTop = containerImgRefs[0].current.getBoundingClientRect().top;
      const imageHeight = containerImgRefs[0].current.offsetHeight;
      const triggerHeight = imageTop + imageHeight * 0.01; //ngưỡng kết thúc text

      // Tính toán vị trí tương đối của text so với hình ảnh
      const contentRect = contentRef.current.getBoundingClientRect();
      const imageRect = containerImgRefs[0].current.getBoundingClientRect();

      // Xác định mức độ chồng lấp giữa text và hình ảnh
      const overlapStart = Math.max(contentRect.top, imageRect.top);
      const overlapEnd = Math.min(contentRect.bottom, imageRect.bottom);
      const isOverlapping = overlapEnd > overlapStart;

      if (contentTop <= triggerHeight) {
        contentRef.current.style.position = "sticky";
        contentRef.current.style.top = "20px";
        contentRef.current.style.zIndex = "40";
        contentRef.current.style.width = "100%";
        setTextHidden(false); // Hiển thị text

        // Nếu text đang chồng lên hình ảnh, đổi thành màu trắng
        if (isOverlapping) {
          contentRef.current.style.color = "white";
        } else {
          contentRef.current.style.color = "black";
        }
      } else {
        contentRef.current.style.position = "static";
        contentRef.current.style.top = "auto";
        contentRef.current.style.zIndex = "auto";
        contentRef.current.style.width = "auto";
        setTextHidden(true); // Ẩn text
        contentRef.current.style.color = "black"; // Reset về màu đen
      }

      // Xử lý hình ảnh
      const newStates = isExpandedImg.map((state, index) => {
        if (!imageRefs[index].current || !containerImgRefs[index].current)
          return state;

        const imageTop = imageRefs[index].current.getBoundingClientRect().top;
        const triggerHeightImg = window.innerHeight * 0.5;

        return imageTop < triggerHeightImg;
      });

      setIsExpandedImg(newStates);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpandedImg]);

  const items = [
    {
      title: "Narrow, Wide & Fat",
      text: "ProFlex is available in three sizes: Narrow, for road, city, gravel, commuter and BMX bikes; Wide, for eBikes, mountain bikes, and gravel bikes; and Fat, for plus, cruiser or fat bikes. All sizes are compatible with fenders and mudguards.",
    },
    {
      title: "New Modern Finish",
      text: "Enhanced with a black nickel finish, ProFlex showcases a bold and premium aesthetic.",
    },
    {
      title: "Adaptable System",
      text: "Allows for the Rear Tyre Rest to slide on and off and be replaced with different sizes and designed to allow for future products and accessories.",
    },
    {
      title: "GearMate Ready",
      text: "Featuring an integrated spine, ProFlex is GearMate ready, offering a seamless solution to store both your cycling gear and bike in one organized space.",
    },
    {
      title: "Stronger",
      text: "ProFlex has been designed with an increased load capacity of 121lbs, compared to 77lbs.",
    },
  ];

  //  Xử lý video
  const videoRefs = [useRef(null), useRef(null)];
  const containerRefs = [useRef(null), useRef(null)];
  const [isExpanded, setIsExpanded] = useState([false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const newStates = isExpanded.map((state, index) => {
        if (!videoRefs[index].current || !containerRefs[index].current)
          return state;

        const videoTop = videoRefs[index].current.getBoundingClientRect().top;
        const triggerHeight = window.innerHeight * 0.5; // Kích hoạt khi video cách 50% chiều cao màn hình

        return videoTop < triggerHeight;
      });

      setIsExpanded(newStates);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  return (
    <CartProvider>
      <div>
        <div>
          <Banner />
        </div>

        <div>
          <SubHeader />
        </div>
        <Cart />

        <div
          data-aos="fade-up"
          className="w-full h-screen bg-[url('https://www.steadyrack.com/cdn/shop/files/1_f095e61b-a447-4f48-92a9-e7c8a0f728e8.png?v=1737101291&width=3840')] bg-cover bg-center"
        >
          <div
            data-aos="fade-up"
            className="py-5 px-5 w-full h-full bg-transparent flex flex-col justify-end"
          >
            <div
              data-aos="fade-up"
              className="text-8xl font-bold mb-7 font-zuume tracking-normal italic text-white text-center"
            >
              READY
              <span
                style={{
                  WebkitTextStroke: "0.5px white",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                STEADY{" "}
              </span>
              PRO
            </div>
            <p
              data-aos="fade-up"
              className="text-4xl text-white font-semibold mb-7 text-center"
            >
              The New Generation of Steadyrack
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div
            ref={containerRefs[0]}
            className="relative w-full flex items-center justify-center"
          >
            <video
              ref={videoRefs[0]}
              className={`transition-all duration-700 ease-out ${
                isExpanded[0] ? "w-[96%]" : "w-3/4"
              } h-auto opacity-100 translate-y-0`}
              src="https://www.steadyrack.com/cdn/shop/videos/c/vp/aa0e99ecd6a24d229e0aee5e03072eda/aa0e99ecd6a24d229e0aee5e03072eda.HD-1080p-7.2Mbps-41127795.mp4?v=0" // Thay bằng link video 1 của bạn
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>

        <div>
          <div
            ref={contentRef}
            className="px-5"
            style={{
              display: textHidden ? "none" : "block",
              transition: "color 0.3s ease", // Thêm transition cho hiệu ứng mượt mà
            }}
          >
            <div className="pt-28 pb-10 px-5 text-center">
              <h1 className="font-impact tracking-tight text-6xl uppercase italic w-[80%] mx-auto">
                Introducing ProFlex — The Perfect Fusion of Innovative
                Engineering and Modern Design.
              </h1>
            </div>
          </div>

          <div className="mt-10">
            <div
              ref={containerImgRefs[0]}
              className="relative w-full flex items-center justify-center"
            >
              <img
                ref={imageRefs[0]}
                className={`transition-all duration-700 ease-out ${
                  isExpandedImg[0] ? "w-[96%]" : "w-3/4"
                } h-auto opacity-100 translate-y-0`}
                src="https://www.steadyrack.com/cdn/shop/files/2_8_bb4e48c9-bdad-4c27-ae07-8f1dc725e78a.png?v=1739939732&width=2000"
                alt="Mô tả hình ảnh"
              />
            </div>
          </div>
        </div>

        <div className=" pt-24 pb-10">
          <div className="px-5  grid grid-flow-row-dense grid-cols-3">
            <h1 className="text-4xl font-semibold mb-7">
              The Future of Bike Storage is Here
            </h1>
            <div className="col-span-2 mt-3.5 mb-5 pl-32 pr-2.5">
              <p
                data-aos="fade-up"
                className="mb-4 leading-tight text-sm font-semibold"
              >
                Since 2009, Steadyrack have been manufacturing a globally
                recognized bike storage solution and we have without a doubt
                made our mark. However, as we all know, market demands are
                always evolving, and we knew that after 15 years, it was time to
                take the leap and produce a new, cutting-edge product. The
                question was: How do we create a new and improved Steadyrack
                that is going to stand out from our already successful product?
              </p>

              <p
                data-aos="fade-up"
                className="mt-1.5 leading-tight text-sm font-semibold"
              >
                We understood the importance of recognizing what works, as well
                as maintaining the exceptional functionality that has made our
                current Steadyrack range a leading choice in the bike storage
                market. After two years of brainstorming, testing prototypes,
                and meticulously perfecting every tiny detail, we are thrilled
                to unveil the newest member to the Steadyrack collection.
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 grid grid-cols-3">
          <div className="px-1 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-[700px] overflow-hidden">
              <img
                src="https://www.steadyrack.com/cdn/shop/files/SteadySpine_PDP.png?v=1739422159&width=3840"
                alt="Ảnh cột 1"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="col-span-2 px-1 overflow-hidden">
            <div className="relative w-full h-[700px] overflow-hidden">
              <img
                src="https://www.steadyrack.com/cdn/shop/files/Solutions_2.png?v=1739934421&width=600"
                alt="Ảnh cột 2"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="pt-11 pb-20">
          <div className="px-5 mb-4">
            <div data-aos="fade-up" className="mb-5">
              <h1 className="text-4xl font-semibold text-black">
                Revolutionizing Features
              </h1>
            </div>
            <div className="mx-10 px-5">
              <div className="grid grid-cols-12 gap-4">
                {/* Cột 1 */}
                <div className="col-span-3 p-4 text-white flex flex-col justify-between h-full">
                  {features.slice(0, 4).map((feature) => (
                    <FeatureBlock
                      key={feature.id}
                      feature={feature}
                      isActive={activeId === feature.id}
                      toggleBlock={toggleBlock}
                    />
                  ))}
                </div>

                {/* Ảnh giữa */}
                <div className="col-span-6 p-4 text-white flex items-center justify-center">
                  <img
                    src="https://www.steadyrack.com/cdn/shop/files/PROFLEX_-_Wide_-_Open_-_Complete_Rack_1.png?v=1733839074&width=2000"
                    className="w-full"
                  />
                </div>

                {/* Cột 2 */}
                <div className="col-span-3 p-4 text-white flex flex-col justify-between h-full">
                  {features.slice(4).map((feature) => (
                    <FeatureBlock
                      key={feature.id}
                      feature={feature}
                      isActive={activeId === feature.id}
                      toggleBlock={toggleBlock}
                      isRightColumn={true}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 grid grid-cols-2 bg-black">
          <div className="px-2.5">
            <div
              className="relative overflow-hidden"
              style={{ height: "calc(700px + 20px)" }}
            >
              <img
                src="https://www.steadyrack.com/cdn/shop/files/ProFlex_grid_dense_large_-_3_sizes.png?v=1737345273&width=3200"
                alt="Ảnh cột 1"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid grid-flow-row-dense grid-rows-2 gap-y-2.5">
            <div className="px-2.5">
              <div className="relative w-full h-[350px] overflow-hidden">
                <img
                  src="https://www.steadyrack.com/cdn/shop/files/ProFlex_grid_dense_small_-_black_chrome_finish.png?v=1737345298&width=3200"
                  alt="Ảnh cột 1"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="px-2.5">
              <div className="relative w-full h-[350px] overflow-hidden">
                <img
                  src="https://www.steadyrack.com/cdn/shop/files/ProFlex_grid_dense_small_-_rear_mounting_plate.png?v=1737345321&width=3200"
                  alt="Ảnh cột 1"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="pt-16 pb-28 bg-black">
            <div className="px-5">
              <BoxText items={items} />
            </div>
          </div>
        </div>

        <div>
          <div className="px-5 bg-black">
            <div className="grid grid-cols-2">
              <div className="px-2.5">
                <h1 className="text-4xl font-semibold mb-11 text-white">
                  Built To Last
                </h1>
                <div className="py-2.5">
                  <div className="relative w-full h-[680px] overflow-hidden">
                    <img
                      src="https://www.steadyrack.com/cdn/shop/files/Just_Landed.png?v=1739934386&width=600"
                      alt="Ảnh cột 1"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <div className="px-2.5">
                <h1 className="text-4xl font-semibold mb-11 text-white">
                  Pivoting Pioneers
                </h1>
                <div className="py-2.5">
                  <div className="relative w-full h-[680px] overflow-hidden">
                    <img
                      src="https://www.steadyrack.com/cdn/shop/files/ProFlex_grid_dense_small_-_rear_mounting_plate.png?v=1737345321&width=3200"
                      alt="Ảnh cột 1"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <TextLineIn />
        </div>

        <div>
          <div className=" pt-28 pb-11">
            <h1 className="px-5 text-4xl font-semibold text-black">
              Fits Almost Any Bike
            </h1>
          </div>
        </div>

        <div className="px-5 pb-24">
          <div className="px-5 relative w-full h-screen flex items-center justify-center text-white">
            <iframe
              allow="autoplay; loop; muted; fullscreen"
              className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
              src="https://www.youtube.com/embed/t91L9sdRGok?autoplay=1&loop=1&mute=1&playlist=t91L9sdRGok"
              title="YouTube video"
            ></iframe>
            <div className="absolute bottom-5 left-5 w-[20%]">
              <img
                src="//www.steadyrack.com/cdn/shop/files/STEADYRACK_ICON_PROTECT_YOUR_BIKE_RED_RGB.png?v=1737349171&width=84"
                className="w-10 h-10 pb-3"
              />
              <h1 className="text-white text-3xl font-semibold mb-4">
                Protect Your Bike
              </h1>
              <p className="text-white font-semibold leading-tight">
                Bikes are precisely positioned in the rack with the front tire
                providing support, safeguarding the frame and rims from any risk
                of damage.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className=" pt-24 pb-12">
            <h1 className=" font-impact text-white italic text-5xl uppercase tracking-tight px-5">
              easy to install
            </h1>
          </div>
        </div>

        <div className="">
          <VideoOverlay
            videoSrc="https://www.steadyrack.com/cdn/shop/videos/c/vp/0bd38e7aa1314b34910d6382acd98c9e/0bd38e7aa1314b34910d6382acd98c9e.HD-1080p-7.2Mbps-41242159.mp4?v=0"
            title="Innovation, Redefined."
          />
        </div>

        <div>
          <div className="py-20">
            <h1 className="px-5 font-impact font-bold text-black text-5xl italic tracking-tight uppercase">
              Order ProFlex Now
            </h1>
          </div>
        </div>

        <div>
          <div className="mb-20">
            <div className="px-5">
              <ProductDetailCut productId={17} />
            </div>
          </div>
        </div>

        <div>
          <Fotter />
        </div>
      </div>
    </CartProvider>
  );
}

export default ProflexRanger;
