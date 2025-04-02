import React, { useEffect, useState, useRef } from "react";

import Logo001 from "../../assets/BrandLogo/RideWrap-Z-Logo-Black_180x_png_ed9d5f53-cb82-4832-a8c2-bcc27ff17364.png";
import Logo002 from "../../assets/BrandLogo/arcteryx_180x_png_084912ce-067b-4057-b8b8-7bb95c20b29b.png";
import Logo003 from "../../assets/BrandLogo/cox_180x_png.png";
import Logo004 from "../../assets/BrandLogo/enve_180x_png.png";
import Logo005 from "../../assets/BrandLogo/fezzari_858f52f1-4001-4f42-896c-996c39a5f39b_180x_png.png";
import Logo006 from "../../assets/BrandLogo/fox_5b13646d-79f7-459b-b362-af074976c8bd_180x_png.png";
import Logo007 from "../../assets/BrandLogo/giant_180x_png.png";
import Logo008 from "../../assets/BrandLogo/hames_180x_png.png";
import Logo009 from "../../assets/BrandLogo/hassell_180x_png.png";
import Logo010 from "../../assets/BrandLogo/scott_180x_png.png";
import Logo011 from "../../assets/BrandLogo/specialized_180x_png.png";
import Logo012 from "../../assets/BrandLogo/zwift_180x_png.png";
import Logo013 from "../../assets/BrandLogo/sram_180x_png.png";
import Logo014 from "../../assets/BrandLogo/vintage_electric_180x_png_5cb289a0-5a05-4a1e-827b-d927f9b46a0d.png";
import Logo015 from "../../assets/BrandLogo/woods_180x_png.png";

const FullWidthBrandCarousel = () => {
  const brands = [
    { id: 1, name: "Brand 1", image: Logo001 },
    { id: 2, name: "Brand 2", image: Logo002 },
    { id: 3, name: "Brand 3", image: Logo003 },
    { id: 4, name: "Brand 4", image: Logo004 },
    { id: 5, name: "Brand 5", image: Logo005 },
    { id: 6, name: "Brand 6", image: Logo006 },
    { id: 7, name: "Brand 7", image: Logo007 },
    { id: 8, name: "Brand 8", image: Logo008 },
    { id: 9, name: "Brand 9", image: Logo009 },
    { id: 10, name: "Brand 10", image: Logo010 },
    { id: 11, name: "Brand 11", image: Logo011 },
    { id: 12, name: "Brand 12", image: Logo012 },
    { id: 13, name: "Brand 13", image: Logo013 },
    { id: 14, name: "Brand 14", image: Logo014 },
    { id: 15, name: "Brand 15", image: Logo015 },
  ];

  const duplicatedBrands = [...brands, ...brands];

  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  const brandWidth = 260;
  const totalWidth = brands.length * brandWidth;

  const animate = () => {
    setPosition((prevPosition) => {
      if (prevPosition <= -totalWidth) {
        return 0;
      }
      return prevPosition - 0.5;
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    setIsPaused((prevState) => !prevState);
  };

  useEffect(() => {
    if (isPaused) {
      cancelAnimationFrame(animationRef.current);
    } else {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div data-aos="fade-up" className="w-full pt-16 pb-11">
      <h2
        data-aos="fade-up"
        className="text-4xl font-semibold text-center mb-8"
      >
        Trusted By World Leading Brands
      </h2>

      <div
        className="w-full overflow-hidden cursor-pointer"
        onClick={handleClick}
        ref={carouselRef}
      >
        <div
          className="flex items-center"
          style={{
            transform: `translateX(${position}px)`,
            width: `${duplicatedBrands.length * brandWidth}px`,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 px-4"
              style={{ width: `${brandWidth}px` }}
            >
              <div className="bg-white p-8 rounded-lg shadow-sm h-48 flex items-center justify-center">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-w-full max-h-40 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullWidthBrandCarousel;
