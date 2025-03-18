import React, { useEffect, useState } from "react";
import BackRoundIntroComponent from "../../components/backround Intro/BackRoundIntro";
import BgIntroImage from "../../assets/press_desktop.webp";
import pressData from "../../press.json"; // Import file JSON

function Press() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    if (pressData && Array.isArray(pressData)) {
      const formattedLogos = pressData.map((item, index) => ({
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

  return (
    <div>
      <BackRoundIntroComponent imageSrc={BgIntroImage} text={"PRESS"} />

      <section className="pt-16 pb-32 md:py-20">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold" data-aos="fade-up" data-aos-delay="50">
              Other Mentions
            </h2>
          </div>

          <div className="relative overflow-hidden">
            {/* Mobile và tablet view - lưới co giãn */}
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

            {/* Desktop view - luôn có 7 cột nhưng không kéo giãn logo */}
            <div className="hidden lg:block">
              {logoRows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-7 gap-4 mb-4">
                  {row.map((logo) => (
                    <div
                      key={logo.id}
                      className="flex items-center justify-center p-4"
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
                  {/* Thêm ô trống nếu hàng có ít hơn 7 logo nhưng không làm giãn logo */}
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