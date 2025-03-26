import React , { useState } from 'react';
import { X } from 'lucide-react';
import { useSidebar } from '../../hooks/useSidebar.js';
import { motion } from 'framer-motion';

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  const [expandedSections, setExpandedSections] = useState({
    type: false,
    bikeType: false,
    fenders: false,
    tyreWidth: false,
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  return (
    <div className={`
      fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg 
      transform transition-transform duration-300 ease-in-out p-5
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      z-50
    `}>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-semibold">Filters</h2>
        <button 
          onClick={toggleSidebar} 
          className="text-black bg-gray-200 rounded-full"
        >
          <X size={24} />
        </button>
      </div>
      <hr className='border-black'></hr>


      <nav className="">
      <ul>
        <li className="py-5 text-xl">
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleSection('type')}
          >
            <p className="block">Type</p>
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-black">
              {expandedSections.type ? '➖' : '➕'}
            </span>
          </button>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: expandedSections.type ? 1 : 0,
              height: expandedSections.type ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Nội dung xổ xuống cho Type */}
            <div className="py-4 space-y-2">
            <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"
            />
             <span className='text-sm'>Racks</span>
            </label>
           {/* Add more checkbox options as needed */}
           </div>

          </motion.div>
        </li>
        <hr className="border-black" />

        <li className="py-5 text-xl">
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleSection('bikeType')}
          >
            <p className="block">Bike Type</p>
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-black">
              {expandedSections.bikeType ? '➖' : '➕'}
            </span>
          </button>
          <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{
        opacity: expandedSections.bikeType ? 1 : 0,
        height: expandedSections.bikeType ? 'auto' : 0,
    }}
    transition={{ duration: 0.3 }}
    className="overflow-hidden"
>
    {/* Nội dung xổ xuống cho Bike Type */}
    <div className="py-4 grid grid-cols-2 gap-x-4 gap-y-2">
        <label className="flex items-start space-x-2"> {/* Thay đổi items-center thành items-start */}
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Mountain</span> {/* Thêm flex-1 break-words */}
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Fat Bike</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Road</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>BMX</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Gravel</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Hybrid</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>eBikes</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Time Trial</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Designed to install seamlessly behind all Steadyrack bike racks.</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Fat: Cruisers, Plus, and Fat Bikes</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Integrated behind all ProFlex racks and can be seamlessly installed behind existing Classic Range bike racks.</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Narrow: Road, Gravel, BMX, Fender, and City Bikes</span>
        </label>

        <label className="flex items-start space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
            <span className='text-sm flex-1 break-words'>Wide: MTB, eMTB, and Gravel Bikes</span>
        </label>
        {/* Add more checkbox options as needed */}
    </div>
</motion.div>
        </li>
        <hr className="border-black" />

        <li className="py-5 text-xl">
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleSection('fenders')}
          >
            <p className="block">Fenders, Mudguards</p>
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-black">
              {expandedSections.fenders ? '➖' : '➕'}
            </span>
          </button>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: expandedSections.fenders ? 1 : 0,
              height: expandedSections.fenders ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Nội dung xổ xuống cho Fenders, Mudguards */}
            <div className="py-4 grid grid-cols-2 gap-x-4 gap-y-2">
            <label className="flex items-center space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
             <span className='text-sm'>No</span>
            </label>

            <label className="flex items-center space-x-2">
            <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
             <span className='text-sm'>Yes</span>
            </label>
           {/* Add more checkbox options as needed */}
           </div>
          </motion.div>
        </li>
        <hr className="border-black" />

        <li className="py-5 text-xl">
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleSection('tyreWidth')}
          >
            <p className="block">Tyre Width</p>
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-black">
              {expandedSections.tyreWidth ? '➖' : '➕'}
            </span>
          </button>

          <motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{
    opacity: expandedSections.tyreWidth ? 1 : 0,
    height: expandedSections.tyreWidth ? 'auto' : 0,
  }}
  transition={{ duration: 0.3 }}
  className="overflow-hidden"
>
  <div className="py-4 grid grid-cols-2 gap-x-4 gap-y-2">
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
      <span className='text-sm'>Up to 2.1in</span>
    </label>

    <label className="flex items-center space-x-2">
      <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
      <span className='text-sm'>2.8in - 5.0in</span>
    </label>

    <label className="flex items-center space-x-2">
      <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
      <span className='text-sm'>Narrow: Up to 2.1"</span>
    </label>

    <label className="flex items-center space-x-2">
      <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
      <span className='text-sm'>2.1in - 2.8in</span>
    </label>

    <label className="flex items-center space-x-2">
      <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
      <span className='text-sm'>Fat: 2.8"- 5"</span>
    </label>

    <label className="flex items-center space-x-2">
      <input type="checkbox" className="appearance-none h-4 w-4 border border-black bg-white checked:bg-black checked:border-black checked:before:content-['✓'] checked:before:text-white checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full checked:before:leading-4"/>
      <span className='text-sm'>Wide: 2.1"- 2.8"</span>
    </label>
  </div>
</motion.div>
        </li>
        <hr className="border-black" />
      </ul>
    </nav>


    </div>
  );
}