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

// Positions for the connection points on the image
const connectionPoints = {
  1: { x: 30, y: 35 },
  2: { x: 32, y: 50 },
  3: { x: 35, y: 65 },
  4: { x: 70, y: 35 },
  5: { x: 68, y: 50 },
  6: { x: 65, y: 65 },
  7: { x: 50, y: 80 },
};

const FeatureBlock = ({ feature, isActive, toggleBlock, isRightColumn, imageDotRef }) => {
  const spanRef = useRef(null);
  const [spanPosition, setSpanPosition] = useState({ x: 0, y: 0 });
  const [imageDotPosition, setImageDotPosition] = useState({ x: 0, y: 0 });
  const featureId = feature.id;

  useEffect(() => {
    if (spanRef.current) {
      const rect = spanRef.current.getBoundingClientRect();
      setSpanPosition({
        x: isRightColumn ? rect.left : rect.right, // Đặt ở đầu nếu bên trái, cuối nếu bên phải
        y: rect.top + rect.height / 2
      });
    }
  }, [isActive, isRightColumn]);

  useEffect(() => {
    if (imageDotRef.current) {
      const dotElement = document.querySelector(`.dot-${featureId}`); // Select the dot using the class
      if (dotElement) {
        const rect = dotElement.getBoundingClientRect();
        setImageDotPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    }
  }, []);

  // Calculate the midpoint for the horizontal-to-vertical transition
  const getMidPoint = () => {
    if (!spanPosition || !imageDotPosition) {
      return { x: 0, y: 0 }; // Return a default if positions are not available.
    }
    // Increase the length of the horizontal line.
    const horizontalLengthFactor = 1.5; // Adjust this to make the line longer
    if (isRightColumn) {
      return {
        x: spanPosition.x - (spanPosition.x - imageDotPosition.x) / 2 * horizontalLengthFactor,
        y: spanPosition.y
      };
    } else {
      return {
        x: spanPosition.x + (imageDotPosition.x - spanPosition.x) / 2 * horizontalLengthFactor,
        y: spanPosition.y
      };
    }
  };

  const midPoint = getMidPoint();

  return (
    <div className='w-full max-w-md relative'>
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
        <span
          ref={spanRef}
          className="absolute w-3 h-3 bg-black rounded-full"
          style={{
            bottom: 0,
            left: isRightColumn ? 'auto' : 0, // Thay đổi left tùy thuộc vào cột
            right: isRightColumn ? 0 : 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0)'
          }}
          data-feature-id={feature.id}
        />

        {isActive && imageDotRef.current && spanRef.current && (
          <svg
            className="absolute pointer-events-none"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 5,
              overflow: 'visible'
            }}
          >
            <motion.path
              d={`M ${spanPosition.x} ${spanPosition.y} 
                  L ${midPoint.x} ${midPoint.y} 
                  L ${midPoint.x} ${imageDotPosition.y} 
                  L ${imageDotPosition.x} ${imageDotPosition.y}`}
              stroke="black"
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </svg>
        )}
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.p
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
  const imageDotRef = useRef(null);
  const featureRefs = useRef({});
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imageContainerRef = useRef(null);

  useEffect(() => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      setImageSize({
        width: rect.width,
        height: rect.height
      });
    }
  }, []);

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
              {/* Left Column */}
              <div className="col-span-3 p-3 flex flex-col justify-evenly h-full">
                {features.slice(0, 3).map((feature) => (
                  <FeatureBlock
                    key={feature.id}
                    feature={feature}
                    isActive={activeId === feature.id}
                    toggleBlock={toggleBlock}
                    imageDotRef={imageDotRef}
                    isRightColumn={false} // Đặt isRightColumn cho cột bên trái
                  />
                ))}
              </div>

              {/* Center Image */}
              <div
                ref={imageContainerRef}
                className="col-span-6 p-3 flex items-center justify-center relative"
              >
                <img
                  src='https://www.steadyrack.com/cdn/shop/files/image_1_3dca60f8-7ee0-4d68-97f8-fdce33ebc067.png?v=1737354642&width=2000'
                  alt="Product features showcase"
                  className='w-full'
                />
                {/* Central reference dot */}
                <span
                  ref={imageDotRef}
                  id="image-dot"
                  className="absolute w-3 h-3 bg-black rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Feature connection points */}
                {Object.entries(connectionPoints).map(([id, position]) => {
                  const featureId = parseInt(id);
                  return (
                    <span
                      key={id}
                      className={`absolute w-2 h-2 rounded-full dot-${featureId} ${activeId === featureId ? 'bg-red-500' : 'bg-gray-400'}`}
                      style={{
                        top: `${position.y}%`,
                        left: `${position.x}%`,
                        transform: 'translate(-50%, -50%)',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  )
                })}
              </div>

              {/* Right Column */}
              <div className="col-span-3 p-3 flex flex-col justify-evenly h-full">
                {features.slice(3).map((feature) => (
                  <FeatureBlock
                    key={feature.id}
                    feature={feature}
                    isActive={activeId === feature.id}
                    toggleBlock={toggleBlock}
                    isRightColumn={true} // Đặt isRightColumn cho cột bên phải
                    imageDotRef={imageDotRef}
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
