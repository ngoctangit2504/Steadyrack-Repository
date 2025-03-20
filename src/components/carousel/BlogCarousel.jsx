import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Dsc from "../../assets/Blog/DSC00344.jpg";
import DscCopy from "../../assets/Blog/Copy_of_DSC05189.jpg";
import Photo9 from "../../assets/Blog/Photo_9-1-2024_12_32_44_pm.jpg";

import ButtonA from "../buttons/ButtonA";

const blogData = [
  {
    title: "Japan End-To-End World Record",
    desc: "Jack Thompson set off from Cape Sata in the south of Japan, embarking on a journey to ride to the north of the country in the fastest known time.",
    img: Dsc,
  },
  {
    title: "Caroline Buchanan: Steadyrack Brand Ambassador & Dual Athlete",
    desc: "8 x World Champion and dual Olympic Australian athlete, Caroline Buchanan is a force to be reckoned with - both on and off the track.",
    img: Photo9,
  },
  {
    title: "A Fresh Look: Storing Bikes with Hydraulic Brakes Vertically",
    desc: "Is it safe to store bikes with hydraulic brakes in Steadyrack bike racks? The answer is YES. We are going to debunk the common misconception (again) that vertical storage of bikes with hydraulic brakes is not safe.",
    img: DscCopy,
  },
];

export default function BlogCarousel() {
  const carouselRef = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const viewportWidth = carouselRef.current.offsetWidth;
      setMaxDrag(totalWidth - viewportWidth); // Tính khoảng cách cần kéo
    }
  }, []);

  return (
    <div data-aos="fade-up" className="w-full overflow-hidden cursor-pointer">
      <h2 className="text-4xl font-bold mb-6 text-center md:text-left md:pl-4">
        The Latest News
      </h2>
      <motion.div
        ref={carouselRef}
        className="flex cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -maxDrag, right: 0 }} // Kéo đủ cả 3 ảnh
      >
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="relative min-w-[30cm] h-[14cm] mx-2 flex items-center overflow-hidden border border-gray-300 rounded-lg group"
          >
            {/* Ảnh có hiệu ứng zoom khi hover */}
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="ml-8 text-white">
                <h2 className="text-3xl font-bold">{blog.title}</h2>
                <p className="text-lg">{blog.desc}</p>
                <button className="mt-4 px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-red-700 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="text-center m-5">
        <ButtonA text={"VIEW MORE"} />
      </div>
    </div>
  );
}