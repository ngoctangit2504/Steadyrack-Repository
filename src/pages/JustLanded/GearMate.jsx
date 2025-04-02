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

// Kẻ 2 đường vuông góc hỗ trợ ảnh
const features = [
  {
    id: 1,
    title: "SteadyBracket™",
    content:
      "A 3-hook system creates a secure support to either side of the SteadySpine, Available in three sizes.",
  },
  {
    id: 2,
    title: "SteadyBin™",
    content:
      "Functional design to maximize access to your gear. Available in three sizes.",
  },
  {
    id: 3,
    title: "SteadySpine™",
    content:
      "An innovative robust glass-filled nylon spine designed to support your gear.",
  },
  {
    id: 4,
    title: "SteadyHook™",
    content: "These versatile hooks can be flipped 180° to maximize use.",
  },
  {
    id: 5,
    title: "Easy Access",
    content:
      "Obtuse exit angle allows for easy access and removal of smaller items.",
  },
  {
    id: 6,
    title: "SteadyLoop™",
    content: "A hook and loop fastener for easy attachment of your gear.",
  },
  {
    id: 7,
    title: "Grub Screws",
    content: "Allows for lockable positioning on all bins.",
  },
];

const FeatureBlock = ({ feature, isActive, toggleBlock, isRightColumn }) => {
  const [lineStage, setLineStage] = useState(0);

  useEffect(() => {
    if (isActive) {
      setLineStage(2); // Start with bottom line, then side line
    } else {
      setLineStage(0);
    }
  }, [isActive]);

  return (
    <div className="w-full max-w-[320px]">
      <div className="flex items-start mb-3.5 relative">
        <button
          className="mr-2 text-xl bg-gray-200 font-bold text-black rounded-full w-8 h-8 flex items-center justify-center"
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
          animate={{ width: lineStage >= 1 ? "100%" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        {/* Đường kẻ bên cạnh */}
        {isActive && (
          <motion.div
            className={`absolute ${
              isRightColumn ? "right-full top-0" : "left-full top-0"
            } w-[2px] bg-black`}
            initial={{ height: 0, top: "100%" }}
            animate={{ height: lineStage === 2 ? "100%" : 0, top: "0%" }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }} // Delay for the bottom line animation
          />
        )}
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

function GearMate() {
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

  const videoRefs = [useRef(null), useRef(null)];
  const containerRefs = [useRef(null), useRef(null)];
  const [isExpanded, setIsExpanded] = useState([false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const newStates = isExpanded.map((state, index) => {
        if (!videoRefs[index].current || !containerRefs[index].current)
          return state;

        const videoTop = videoRefs[index].current.getBoundingClientRect().top;
        const triggerHeight = window.innerHeight * 0.5; // Kích hoạt khi video cách 70% chiều cao màn hình

        return videoTop < triggerHeight;
      });

      setIsExpanded(newStates);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  const items = [
    {
      image:
        "//www.steadyrack.com/cdn/shop/files/steadyrack_ready.png?v=1737353296&width=34",
      title: "Steadyrack Ready",
      text: "Designed to work seamlessly with all Steadyrack bike racks.",
    },
    {
      image:
        "//www.steadyrack.com/cdn/shop/files/200_arrangements.png?v=1737353316&width=34",
      title: "200+ Arrangements",
      text: "Customize your way, with over 200 possible arrangements.",
    },
    {
      image:
        "//www.steadyrack.com/cdn/shop/files/Layer_1-2_cb99e784-a5e3-45ad-a8d7-4afed75689d4.png?v=1736845865&width=34",
      title: "Adaptable System",
      text: "Designed to allow for future products and accessories.",
    },
    {
      image:
        "//www.steadyrack.com/cdn/shop/files/Frame_371.png?v=1733762194&width=34",
      title: "Safe & Secure",
      text: "Grub screws allow for lockable positioning, keeping your GearMate safe and secure.",
    },
    {
      image:
        "//www.steadyrack.com/cdn/shop/files/Frame_369.png?v=1733762194&width=34",
      title: "Space Saver",
      text: "With three different bin sizes, hooks and hook and loop straps, store all your bike accessories neatly, ready for your next ride.",
    },
  ];

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
          className="w-full h-screen bg-[url('https://www.steadyrack.com/cdn/shop/files/GearMate_hero_banner_desktop_1.png?v=1739408483&width=3840')] bg-cover bg-center"
        >
          <div
            data-aos="fade-up"
            className="py-5 px-5 w-full h-full bg-transparent flex flex-col justify-center"
          >
            <div
              data-aos="fade-up"
              className="text-9xl mb-7 font-impact tracking-normal uppercase italic text-white text-center"
            >
              Gear
              <span
                style={{
                  WebkitTextStroke: "0.5px white",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MATE{" "}
              </span>
            </div>
            <p
              data-aos="fade-up"
              className="text-4xl text-white font-semibold mb-7 text-center"
            >
              Ready to Ride
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
              src="https://www.steadyrack.com/cdn/shop/videos/c/vp/baf9d73c104b4c199ab1d4678c5cb033/baf9d73c104b4c199ab1d4678c5cb033.HD-1080p-7.2Mbps-42040357.mp4?v=0"
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
                Meet GearMate—the ultimate solution for organizing your bike
                gear.
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
                src="https://www.steadyrack.com/cdn/shop/files/gearmate-all-2.gif?v=1737352183&width=2000"
                alt="Mô tả hình ảnh"
              />
            </div>
          </div>
        </div>

        <div className=" pt-24 pb-10">
          <div className="px-5  grid grid-flow-row-dense grid-cols-3">
            <h1 className="text-4xl font-semibold mb-7">
              About Our Innovative Storage Organizer System
            </h1>
            <div className="col-span-2 mt-3.5 mb-5 pl-32 pr-2.5">
              <p
                data-aos="fade-up"
                className="mb-4 leading-tight text-sm font-semibold"
              >
                The vision was to create a storage organizer system that could
                be used as an accessory to our original Steadyrack bike racks,
                that could store everything you need for cycling in the one
                place. We did the research, and there was nothing on the market
                and we knew this was a great opportunity as a business to
                provide a great organisation system.
              </p>

              <p
                data-aos="fade-up"
                className="mt-1.5 leading-tight text-sm font-semibold"
              >
                The Steadyrack Team have spent the last eighteen months
                perfecting our new product to ensure it was flawless. It was
                trial and error: concepts were created, prototypes tested,
                designs refined, and more concepts were created, and more
                prototypes tested - you get the idea. With a sleek combination
                of hooks, bins, and adjustable straps, GearMate lets you arrange
                your accessories your way. Fully customisable with over 200
                arrangements, it adapts to suit your setup and style. Designed
                to install seamlessly behind your Steadyrack, its sturdy spine
                supports brackets to hold all your essentials.
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 grid grid-cols-3">
          <div className="px-1 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-[700px] overflow-hidden">
              <img
                src="https://www.steadyrack.com/cdn/shop/files/GearMate_grid_categories_small_72ecb98f-ef30-4e51-9e06-a0a037abe0e5.png?v=1737352665&width=3200"
                alt="Ảnh cột 1"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="col-span-2 px-1 overflow-hidden">
            <div className="relative w-full h-[700px] overflow-hidden">
              <img
                src="https://www.steadyrack.com/cdn/shop/files/preview_images/48323b7a7aa941ebb98bad13bcd3bb30.thumbnail.0000000000_2048x.jpg?v=1738645527"
                alt="Ảnh cột 2"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 pb-8">
          <div className="px-5 mb-3">
            <div data-aos="fade-up" className="mb-4">
              <h1 className="text-4xl font-semibold text-black">
                Revolutionizing Features
              </h1>
            </div>
            <div className="mx-10 px-5">
              <div className="grid grid-cols-12 gap-3">
                {/* Cột 1 */}
                <div className="col-span-3 p-3 text-white flex flex-col justify-evenly h-full">
                  {features.slice(0, 3).map((feature) => (
                    <FeatureBlock
                      key={feature.id}
                      feature={feature}
                      isActive={activeId === feature.id}
                      toggleBlock={toggleBlock}
                    />
                  ))}
                </div>

                {/* Ảnh giữa */}
                <div className="col-span-6 p-3 text-white flex items-center justify-center">
                  <img
                    src="https://www.steadyrack.com/cdn/shop/files/image_1_3dca60f8-7ee0-4d68-97f8-fdce33ebc067.png?v=1737354642&width=2000"
                    className="w-full"
                  />
                </div>

                {/* Cột 2 */}
                <div className="col-span-3 p-3 text-white flex flex-col justify-evenly h-full">
                  {features.slice(3).map((feature) => (
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
                src="https://www.steadyrack.com/cdn/shop/files/SteadySpine_PDP.png?v=1739422159&width=3840"
                alt="Ảnh cột 1"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid grid-flow-row-dense grid-rows-2 gap-y-2.5">
            <div className="px-2.5">
              <div className="relative w-full h-[350px] overflow-hidden">
                <img
                  src="https://www.steadyrack.com/cdn/shop/files/GearMate_grid_dense_small_39eb4634-6065-4207-b9b9-e4e6de1a70d8.png?v=1737353435&width=3200"
                  alt="Ảnh cột 1"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="px-2.5">
              <div className="relative w-full h-[350px] overflow-hidden">
                <img
                  src="https://www.steadyrack.com/cdn/shop/files/GearMate_grid_dense_small_-_1.png?v=1737353452&width=3200"
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
                      src="https://www.steadyrack.com/cdn/shop/files/200_Arrangements_-_GearMate_PDP.png?v=1739416974&width=3840"
                      alt="Ảnh cột 1"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <div className="px-2.5">
                <h1 className="text-4xl font-semibold mb-11 text-white">
                  Space Saver
                </h1>
                <div className="py-2.5">
                  <div className="relative w-full h-[680px] overflow-hidden">
                    <img
                      src="https://www.steadyrack.com/cdn/shop/files/GearMate_grid_1.png?v=1737355384&width=3200"
                      alt="Ảnh cột 1"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
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
            videoSrc="https://www.steadyrack.com/cdn/shop/videos/c/vp/d028508dc6e64fea9b521c8b9232e82e/d028508dc6e64fea9b521c8b9232e82e.HD-1080p-7.2Mbps-40938829.mp4?v=0"
            title="Organise Your Gear, Your Way"
          />
        </div>

        <div>
          <div className="py-20">
            <h1 className="px-5 font-impact font-bold text-black text-5xl italic tracking-tight uppercase">
              Order GearMate Now
            </h1>
          </div>
        </div>

        <div>
          <div className="mb-20">
            <div className="px-5">
              <ProductDetailCut productId={6} />
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

export default GearMate;
