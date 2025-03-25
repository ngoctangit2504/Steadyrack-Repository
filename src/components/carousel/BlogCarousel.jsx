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
      setMaxDrag(totalWidth - viewportWidth);
    }
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="w-full overflow-hidden cursor-pointer px-5"
    >
      <h2 className="text-4xl font-semibold mb-6 text-center md:text-left">
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
            className="relative min-w-[979px] max-h-[570px] flex items-center gap-4 overflow-hidden border border-gray-300 group mr-4"
          >
            {/* Ảnh có hiệu ứng zoom khi hover */}
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            {/* Thêm thẻ <a> ở đây */}
            <a
              className="absolute top-0 left-0 py-2.5 px-6 text-white bg-black text-xl italic font-bold tracking-tighter"
              href="/?constraint=bicycle"
              title="Narrow selection to products matching tag bicycle"
            >
              BICYCLE
            </a>

            <a
              className="absolute top-0 left-32 py-2.5 px-6 text-white bg-black text-xl italic font-bold tracking-tighter"
              href="/?constraint=bicycle"
              title="Narrow selection to products matching tag bicycle"
            >
              BIKE RACK
            </a>

            <div className="absolute inset-0 bg-opacity-40 flex items-center">
              <div className="absolute left-0 max-w-[720px] p-4">
                <div className="text-white">
                  <h2 className="text-5xl font-semibold">{blog.title}</h2>
                  <p className="text-lg">{blog.desc}</p>
                  <button className="mt-4 px-4 py-2 bg-white text-black hover:bg-red-700 hover:text-white transition rounded-full">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="text-center m-5">
        <button className="bg-white text-sm text-black py-3.5 px-5 rounded-full border-2 border-black font-semibold hover:bg-red-700 hover:text-white transition">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}
