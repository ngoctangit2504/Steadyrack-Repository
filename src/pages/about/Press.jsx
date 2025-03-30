import React, { useEffect, useState } from "react";
import BackRoundIntroComponent from "../../components/backround Intro/BackRoundIntro";
import BgIntroImage from "../../assets/press_desktop.webp";
import pressInforData from "../../data/pressInfor.json";
import ButtonD from "../../components/buttons/ButtonD";

function Press() {

  const logos = [
    { image: "https://www.steadyrack.com/cdn/shop/files/logo-1.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--2.png?v=1733685260&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--3.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--4.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--5.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--6.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--7.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--8.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--9.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--10.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--11.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--12.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--13.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--14.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--15.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--16.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--17.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--18.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--19.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--20.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--21.png?v=1733685261&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/mudblood_360x_jpg.png?v=1733686772&width=400" },
    { image: "https://www.steadyrack.com/cdn/shop/files/logo--22.png?v=1733685261&width=400" },

  ];
  const [data, setData] = useState([]);


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
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-1/2 md:w-1/4 flex items-center justify-center p-4"
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 50} // Adjust delay as needed
          >
            <img
              src={logo.image} // Sử dụng logo.image trực tiếp
              alt={`Logo ${index + 1}`} // Tạo alt text mặc định
              className="object-contain w-full h-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        {logoRows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 gap-4 mb-4">
            {row.map((logo, logoIndex) => (
              <img
                key={logoIndex}
                src={logo.image} // Sử dụng logo.image trực tiếp
                alt={`Logo ${rowIndex * 7 + logoIndex + 1}`} // Tạo alt text mặc định
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