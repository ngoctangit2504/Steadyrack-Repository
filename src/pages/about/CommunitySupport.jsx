import React from 'react';
import BackRoundIntroComponent from "../../components/backround Intro/BackRoundIntro";
import BgIntroImage from "../../assets/Community_support_hero.webp";
import CommunitySupportCarouselB from "../../components/carousel/CommunitySupportLogoA";
import CommunitySupportCarouselA from "../../components/carousel/CommunitySupportLogoB";

import communityData from "../../data/communityData.json";

function CommunitySupport() {
  const extraImages = [
    "/asset/Dwellingup-100-starting-line.jpg",
    "/asset/Dwellingup-100-starting-line.jpg",
    "/asset/Dwellingup-100-starting-line.jpg",
  ];

  let dataWithExtraImages = [];
  let extraImageIndex = 0;

  communityData.brands.forEach((brand, index) => {
    // Cứ mỗi 4 record, chèn một ảnh ngoài
    if (index % 4 === 0 && extraImages[extraImageIndex]) {
      dataWithExtraImages.push({ type: "extra", src: extraImages[extraImageIndex] });
      extraImageIndex++;
    }

    // Thêm record từ JSON
    dataWithExtraImages.push({ type: "brand", ...brand });
  });

  return (
    <div>
      <BackRoundIntroComponent imageSrc={BgIntroImage} text={"we’re into giving back"} />

      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Charities We Support</h2>
        <p className="max-w-2xl text-black font-medium mb-4">
          Since 2009, we have continually provided support to charities, non-profits and community organizations, 
          locally, nationally and internationally. Over the years we’ve arranged for our racks to be used in silent auctions, 
          as raffle prizes, in sporting competitions and countless organizations seeking assistance.
        </p>
      </div>

      <CommunitySupportCarouselA />
      <CommunitySupportCarouselB />

      <div className="container mx-auto px-4 py-8 bg-black">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {dataWithExtraImages.map((item, index) => (
      <div
        key={index}
        className={`bg-white shadow-lg p-4 flex items-center justify-center ${
          item.type === "extra" ? "md:col-span-2" : "aspect-square"
        }`}
        style={
          item.type === "extra"
            ? { 
                backgroundImage: `url(${item.src})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }
            : {}
        }
      >
        {/* Nếu là record thường */}
        {item.type !== "extra" && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            {/* Ảnh brand */}
            <div className="w-3/4 h-3/4 flex items-center justify-center">
              <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
            </div>

            {/* Tiêu đề */}
            <h3 className="text-lg font-bold text-center mt-4 text-blue-600">
              {item.title}
            </h3>

            {/* Mô tả */}
            <p className="text-sm mt-2">{item.text}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default CommunitySupport;