import React, { useState } from 'react'

function TermsConditions() {
    const [isLineVisible, setIsLineVisible] = useState(false);

  const startPosition = { x: 50, y: 50 }; // Vị trí bắt đầu
  const endPosition = { x: 300, y: 300 }; // Vị trí kết thúc

  const toggleLine = () => {
    setIsLineVisible(!isLineVisible);
  };
  return (

    <div className='h-screen'>
      <div className=" relative top-96">
      {/* Button */}
      <button
        onClick={toggleLine}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Vẽ đường
      </button>

      {/* Vẽ đường */}
      <svg className="absolute top-0 left-0 w-full h-full">
        {isLineVisible && (
          <path
            d={`M${startPosition.x},${startPosition.y} L${endPosition.x},${endPosition.y}`}
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4"
            className="transition-all duration-1000"
          />
        )}
      </svg>
    </div>
    </div>
    
  )
}

export default TermsConditions