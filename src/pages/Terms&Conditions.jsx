import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const features = [
  { id: 1, title: "SteadyBracket™", content: "A 3-hook system creates a secure support to either side of the SteadySpine, Available in three sizes." },
  { id: 2, title: "SteadyBin™", content: "Functional design to maximize access to your gear. Available in three sizes." },
  { id: 3, title: "SteadySpine™", content: "An innovative robust glass-filled nylon spine designed to support your gear." },
  { id: 4, title: "SteadyHook™", content: "These versatile hooks can be flipped 180° to maximize use." },
  { id: 5, title: "Easy Access", content: "Obtuse exit angle allows for easy access and removal of smaller items." },
  { id: 6, title: "SteadyLoop™", content: "A hook and loop fastener for easy attachment of your gear." },
  { id: 7, title: "Grub Screws", content: "Allows for lockable positioning on all bins." }
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
    <div className='w-full max-w-[320px]'>
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
          initial={{ width: 0, right: isRightColumn ? 0 : "auto", left: isRightColumn ? "auto" : 0 }}
          animate={{ width: lineStage >= 1 ? "100%" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        {/* Đường kẻ bên cạnh */}
        {isActive && (
          <motion.div
            className={`absolute ${isRightColumn ? 'right-full top-0' : 'left-full top-0'} w-[2px] bg-black`}
            initial={{ height: 0, top: "100%" }}
            animate={{ height: lineStage === 2 ? "100%" : 0 , top: "0%" }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }} // Delay for the bottom line animation
          />
        )}
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.p
            data-aos="fade-left"
            className='text-black leading-tight text-sm font-semibold'
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

function TermsConditions() {
  const [activeId, setActiveId] = useState(null);
  const toggleBlock = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div>
      <div className='pt-4 pb-8'>
        <div className='px-5 mb-3'>
          <div data-aos="fade-up" className='mb-4'>
            <h1 className='text-4xl font-semibold text-black'>Revolutionizing Features</h1>
          </div>
          <div className='mx-10 px-5'>
            <div className='grid grid-cols-12 gap-3'>
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
                  src='https://www.steadyrack.com/cdn/shop/files/image_1_3dca60f8-7ee0-4d68-97f8-fdce33ebc067.png?v=1737354642&width=2000'
                  className='w-full'
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
    </div>
  );
}

export default TermsConditions;