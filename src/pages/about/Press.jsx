import React, { useEffect, useState } from "react";
import BackRoundIntroComponent from "../../components/backround Intro/BackRoundIntro";
import BgIntroImage from "../../assets/press_desktop.webp";
import pressLogoData from "../../data/pressLogo.json";
import pressInforData from "../../data/pressInfor.json";
import ButtonD from "../../components/buttons/ButtonD";

function Press() {
  const [logos, setLogos] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (pressLogoData && Array.isArray(pressLogoData)) {
      const formattedLogos = pressLogoData.map((item, index) => ({
        id: index + 1,
        src: item.image, // Lấy ảnh từ JSON
        alt: `Logo ${index + 1}`,
        delay: (index + 2) * 50,
      }));
      setLogos(formattedLogos);
    }
  }, []);

  // Chia danh sách logo thành từng hàng tối đa 7 phần tử
  const logoRows = [];
  for (let i = 0; i < logos.length; i += 7) {
    logoRows.push(logos.slice(i, i + 7));
  }

  useEffect(() => {
    setData(pressInforData);
  }, []);

  return (
    <div>
      <BackRoundIntroComponent imageSrc={BgIntroImage} text={"PRESS"} />

      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="relative shadow-lg h-96 overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out will-change-transform" 
              style={{ backgroundImage: `url(${item.image})`, transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
            ></div>
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full h-full relative"
              onMouseEnter={(e) => e.currentTarget.previousSibling.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.currentTarget.previousSibling.style.transform = "scale(1)"}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
                <ButtonD></ButtonD>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>

    <section className="pt-16 pb-32 md:py-20">
  <div className="container mx-auto px-4 md:px-6">
    <div className="mb-8">
      <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="50">
        Other Mentions
      </h2>
    </div>

    <div className="relative overflow-hidden">
      
      <div className="flex flex-wrap lg:hidden">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="w-1/2 md:w-1/4 flex items-center justify-center p-4"
            data-aos="fade-up"
            data-aos-delay={logo.delay}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain w-full h-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        {logoRows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 gap-4 mb-4">
            {row.map((logo) => (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain w-full h-auto"
                  loading="lazy"
                />
            ))}
            
            {Array.from({ length: 7 - row.length }).map((_, i) => (
              <div key={`empty-${rowIndex}-${i}`} className="p-4" />
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Press;