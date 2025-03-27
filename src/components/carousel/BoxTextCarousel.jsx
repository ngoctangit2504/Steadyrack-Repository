import React, { useRef, useState, useEffect } from 'react';

const BoxText = ({ items }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft;
    }
  }, [scrollLeft]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Điều chỉnh tốc độ kéo
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={carouselRef}
      className="relative overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="flex space-x-7">
  {items.map((item, index) => (
    <div key={index} className="flex-shrink-0 w-[320px]">
      <div className="flex items-center mb-3.5 border-white border-b">
        {item.image && (
          <img 
            src={item.image} 
            alt={item.title} 
            className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
          />
        )}
        <h3 className="text-white text-lg font-semibold pb-5">{item.title}</h3>
      </div>
      <p data-aos="fade-left" className='text-white leading-tight text-sm font-semibold'>{item.text}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default BoxText;