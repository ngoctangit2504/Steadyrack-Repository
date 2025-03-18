import React from "react";

const timelineData = [
  {
    year: "2004",
    description:
      "CEO and Founder David Steadman with his father-in-law, developed the initial concept that has become what we now know as the Classic Rack, in three colors: Light Gray, Yellow, and Charcoal.",
    image: "//www.steadyrack.com/cdn/shop/files/2004_1.png?v=1737009144&width=3200",
  },
  {
    year: "2009",
    description:
      "After five years of crafting homemade prototypes, the patented Steadyrack was born. In 2009, we sold our first rack to local bike enthusiast Nick Sima—straight from the trunk of David Steadman's car.",
    image: "//www.steadyrack.com/cdn/shop/files/2009.png?v=1737010082&width=3200",
  },
  {
    year: "2009 - 2016",
    description:
      "As Steadyrack continued to grow, so did the need for employees to support the business. Our first employee came on board in 2016, selling Steadyrack bike racks from under the staircase in our very first office.",
    image: "//www.steadyrack.com/cdn/shop/files/2009-2016.png?v=1737010698&width=3200",
  },
  {
    year: "2021",
    description:
      "With business booming, we needed more room! In 2021, we moved to a larger space to support our expanding product lineup. This new location became our current Steadyrack HQ in Perth, Western Australia.",
    image: "//www.steadyrack.com/cdn/shop/files/2021.png?v=1737011609&width=3200",
  },
  {
    year: "2022",
    description:
      "The release of our eBike Rack (now discontinued), a valuable member of the collection. The launch of our eBike Rack was a game-changer, as it allowed for larger tire capacities and weights, compared to our original Fender Rack (discontinued).",
    image: "//www.steadyrack.com/cdn/shop/files/2022.png?v=1737011698&width=3200",
  },
  {
    year: "2023",
    description:
      "The release of our eBike Rack (now discontinued), a valuable member of the collection. The launch of our eBike Rack was a game-changer, as it allowed for larger tire capacities and weights, compared to our original Fender Rack (discontinued).",
    image: "//www.steadyrack.com/cdn/shop/files/2022.png?v=1737011698&width=3200",
  },
  {
    year: "2024",
    description:
      "The release of our eBike Rack (now discontinued), a valuable member of the collection. The launch of our eBike Rack was a game-changer, as it allowed for larger tire capacities and weights, compared to our original Fender Rack (discontinued).",
    image: "//www.steadyrack.com/cdn/shop/files/2022.png?v=1737011698&width=3200",
  },
  
];

const Timeline = () => {
  return (
    <div className="flex overflow-x-auto p-5 space-x-1">
  {timelineData.map((item, index) => (
    <div
      key={index}
      className="min-w-[300px] max-w-sm bg-white overflow-hidden flex flex-col relative"
    >
      <div className="p-4 pb-3">
        <h2 className="text-xl font-bold mb-2 pb-1 border-black border-b-2">{item.year}</h2>
        <p className="mb-3 text-sm leading-tight">{item.description}</p>
      </div>
      <div className="mt-auto">
        <img
          src={item.image}
          alt={item.year}
          className="w-full h-66 object-cover"
        />
      </div>
    </div>
  ))}
</div>
  );
};

export default Timeline;