import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const blogData = [
  {
    title: "RideWrap",
    desc: "Jack Thompson set off from Cape Sata in the south of Japan, embarking on a journey to ride to the north of the country in the fastest known time.",
    img: "https://www.steadyrack.com/cdn/shop/files/RideWrap_4_1080x_f107e980-401f-40e4-ba58-64cba7f4bd62.jpg?v=1736759999&width=540", // Thay thế bằng link ảnh của bạn
  },
  {
    title: "Facebook",
    desc: "8 x World Champion and dual Olympic Australian athlete, Caroline Buchanan is a force to be reckoned with - both on and off the track.",
    img: "https://www.steadyrack.com/cdn/shop/files/facebook.jpg?v=1706838492&width=540", // Thay thế bằng link ảnh của bạn
  },
  {
    title: "A Fresh Look: Storing Bikes with Hydraulic Brakes Vertically",
    desc: "Is it safe to store bikes with hydraulic brakes in Steadyrack bike racks? The answer is YES. We are going to debunk the common misconception (again) that vertical storage of bikes with hydraulic brakes is not safe.",
    img: "https://www.steadyrack.com/cdn/shop/files/Red_Centre_Adventues_-_Stealth_Built-2_1080x_2eedb558-2fdb-4ae9-a00f-3d3f800e6a30.webp?v=1736760103&width=540", // Thay thế bằng link ảnh của bạn
  },
  {
    title: "Japan End-To-End World Record",
    desc: "Jack Thompson set off from Cape Sata in the south of Japan, embarking on a journey to ride to the north of the country in the fastest known time.",
    img: "https://www.steadyrack.com/cdn/shop/files/Untitled_design_3_1080x_ebb862f0-bf5f-499a-881c-43e166bc5d64.webp?v=1736760544&width=540", // Thay thế bằng link ảnh của bạn
  },
  {
    title: "Caroline Buchanan: Steadyrack Brand Ambassador & Dual Athlete",
    desc: "8 x World Champion and dual Olympic Australian athlete, Caroline Buchanan is a force to be reckoned with - both on and off the track.",
    img: "https://www.steadyrack.com/cdn/shop/files/warrington_1080x_e1f85364-3ad8-4e0e-ba24-1c746e0ba980.webp?v=1736760715&width=540", // Thay thế bằng link ảnh của bạn
  },
  {
    title: "A Fresh Look: Storing Bikes with Hydraulic Brakes Vertically",
    desc: "Is it safe to store bikes with hydraulic brakes in Steadyrack bike racks? The answer is YES. We are going to debunk the common misconception (again) that vertical storage of bikes with hydraulic brakes is not safe.",
    img: "https://www.steadyrack.com/cdn/shop/files/Aqbike-2_1080x_66e17ed5-c3fd-4087-af4a-134898704894.webp?v=1736761047&width=540", // Thay thế bằng link ảnh của bạn
  },
  {
    title: "Japan End-To-End World Record",
    desc: "Jack Thompson set off from Cape Sata in the south of Japan, embarking on a journey to ride to the north of the country in the fastest known time.",
    img: "https://www.steadyrack.com/cdn/shop/files/brookfiled_1080x_2c993308-f137-4461-8155-2aa04fc8ed99.webp?v=1736761046&width=540", // Thay thế bằng link ảnh của bạn
  },
  {
    title: "Caroline Buchanan: Steadyrack Brand Ambassador & Dual Athlete",
    desc: "8 x World Champion and dual Olympic Australian athlete, Caroline Buchanan is a force to be reckoned with - both on and off the track.",
    img: "https://www.steadyrack.com/cdn/shop/files/raine_1080x_d14de843-7a39-4b99-9543-d800f27371d0.webp?v=1736761124&width=540", // Thay thế bằng link ảnh của bạn
  },
  {
    title: "A Fresh Look: Storing Bikes with Hydraulic Brakes Vertically",
    desc: "Is it safe to store bikes with hydraulic brakes in Steadyrack bike racks? The answer is YES. We are going to debunk the common misconception (again) that vertical storage of bikes with hydraulic brakes is not safe.",
    img: "https://www.steadyrack.com/cdn/shop/files/160640_Central_Park_End_of_Trip_N24_screenhd_1080x_70a2c558-a168-4035-87bf-6524d3c2d3ae.webp?v=1736760214&width=540", // Thay thế bằng link ảnh của bạn
  },
];

function IndoorBikeParking() {
  const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState("0px");

    useEffect(() => {
      if (isOpen && contentRef.current) {
        setContentHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setContentHeight("0px");
      }
    }, [isOpen]);

    return (
      <div className="py-2 px-4 sm:px-6 md:px-8 lg:px-10">
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer"
          onClick={onToggle}
        >
          <p className="text-base font-medium flex-grow mb-1 sm:mb-0">
            {question}
          </p>
          <button className="focus:outline-none bg-gray-300 border font-bold rounded-full text-2xl w-12 h-12 flex items-center justify-center">
            {isOpen ? "-" : "+"}
          </button>
        </div>
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-300 ease-in-out`}
          style={{ height: contentHeight }}
        >
          <div className="mt-1">
            <p className="">{answer}</p>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 my-2"></div>
      </div>
    );
  };

  const faqs = [
    {
      question: "Will hanging my bike damage the bike frame or forks?",
      answer:
        "Hanging a bike in a Steadyrack will not cause any damage to your frame, forks or wheels. No part of the bike frame touches the rack, only the front tire, which is cradled in the steel arms.Are Steadyrack bike racks safe to use for bikes with hydraulic brakes/forks/suspensions?",
    },
    {
      question:
        "Are Steadyrack bike racks safe to use for bikes with hydraulic brakes/forks/suspensions?",
      answer:
        "Yes! This is a common concern for many bike owners with these types of brakes and suspension. When your bike is hung up vertically, the fluid in your forks will run towards the seals and keep them lubricated. This will prolong their use, so it's actually good for your bike and forks to hang it vertically on our bike racks. If you have hydraulic brakes on your bike the fluid will run down when the bike is hung, so we advise pumping the brakes a few times when you take the bike off the rack if it's been there for a while. The shocks shouldn't leak when the bike is hung up, however if they do it's a good indication that the seals may need replacing. Read our blog post for more information about storing bikes with hydraulic brakes in Steadyracks.",
    },
    {
      question: "Can I add a lock to my Steadyrack?",
      answer:
        "Yes - all our racks are compatible with most types of locks, including chain, cable and D-locks. We have introduced a lock bracket and D lock and cable which is available for purchase on our website. It is also important that you do not rely on the rack arms, as the bolts holding these to the rack frame can be undone.",
    },
    {
      question:
        "Do the racks swing freely/why doesn't my Steadyrack swivel easily?",
      answer:
        "The rack can be quite stiff when you use it for the first few times then it loosens up a bit. This is due to the type of fibre washers we use to assist with the stiffening effect.",
    },
    {
      question: "Can I lock my Steadyrack into one position or any angle?",
      answer:
        "No, it's not possible to lock the rack solid in one position. You can tighten the nuts sufficiently that the rack will be very hard to pivot which will effectively hold it in the one position. To do this you need to remove the 2 plastic mounting bracket covers (end caps) and tightening the 2 nuts that attach the central pivot bar to the mounting brackets. We recommend you check your fixings to your wall carefully and make sure they are very secure if you do this as any pressure sideways will put extreme pressure on the mounting brackets fixings.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Đóng nếu đang mở
    } else {
      setOpenIndex(index); // Mở và đóng các cái khác
    }
  };

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
    <div>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://cdn.yournet.space/good-design.org/2020/Product%20Design/Sport%20and%20Lifestyle/2532-Steadyrack%20Vertical%20Bike%20Storage%20Solutions/Steadyrack%20Vertical%20Bike%20Storage%20Solutions-8.jpg" />
        </div>

        <div className="relative z-10 flex justify-center items-end h-full text-center">
          <div className="">
            <h1 className="text-9xl text-white font-bold font-impact uppercase italic tracking-tight mb-10">
              INDOOR BIKE PARKING
            </h1>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div data-aos="fade-up" className=" mx-96 px-5">
          <h1 className="text-black text-4xl font-semibold text-center mb-7">
            From Architectural Companies to Global Brands – Our Commercial Bike
            Racks are the Preferred Choice Around the World
          </h1>
          <p className="text-black text-base tracking-tight text-center mb-4">
            With more people around the world cycling to work, end-of-trip (EOT)
            indoor bike parking has never been more important in a commercial
            space. Here at Steadyrack, we provide Revit files and design
            guidelines so you can begin planning your commercial indoor bike
            parking facilities in your office straight away! Over the years, our
            team has worked on a wide range of large indoor bike parking
            projects across a variety of industries around the globe. From
            equipping the Woodside Tower in Perth, WA with over 600 Steadyracks,
            570 Steadyracks installed at ONE The Esplanade in Perth, WA for
            Chevron, to installing 400 racks in Scott Sports headquarters in
            Switzerland, amongst many others, there’s no commercial indoor bike
            rack solution we can’t provide.
          </p>
        </div>
      </div>

      <div className="pt-9 pb-5 sticky top-0 z-[-5]">
        <div className="px-5 grid grid-cols-2">
          <div className="px-1.5">
            <img src="https://www.steadyrack.com/cdn/shop/files/Office_buildings.png?v=1737091835&width=2000" />
          </div>
          <div className=" flex px-1.5 items-center justify-center">
            <div data-aos="fade-up" className="py-10 px-20">
              <h1 className="text-black text-4xl font-semibold tracking-tight mb-5">
                Commercial Indoor Bike Parking for Office Buildings
              </h1>
              <p className="text-base test-black mb-5 leading-tight">
                Installing EOT indoor bike parking facilities at your office is
                an excellent way to encourage more employees to take up cycling
                and ensure those who already commute on their bikes have a safe
                place to store them during the day. With Steadyrack’s indoor
                bike parking, you can ensure employee’s bikes are safe from
                theft and the elements outside. Help your employees store it
                easily with Steadyrack so they start the day on the right foot.
              </p>
              <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-9 pb-5 bg-black sticky top-0 z-[-4]">
        <div className="px-5 grid grid-cols-2">
          <div className=" flex px-1.5 items-center justify-center">
            <div data-aos="fade-up" className="py-10 px-20">
              <h1 className="text-white text-4xl font-semibold tracking-tight mb-5">
                Commercial Indoor Bike Parking for Bike Stores
              </h1>
              <p className="text-base text-white mb-5 leading-tight">
                What do you need when you’re selling bikes? Excellent bike
                storage, of course! Keep your stock safe and protected with our
                commercial indoor bike racks. Used by the likes of Trek, Giant,
                Scott Sports and Specialized to store their bikes in-store,
                you’re in trusted hands with Steadyrack’s indoor bike parking
                solutions. Our Revit files and design guidelines are easily
                found on our website, or simply reach out to discuss your
                commercial indoor bike parking needs today.
              </p>
              <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                GET A QUOTE
              </button>
            </div>
          </div>
          <div className="px-1.5">
            <img src="https://www.steadyrack.com/cdn/shop/files/warrington_1080x_e1f85364-3ad8-4e0e-ba24-1c746e0ba980.webp?v=1736760715&width=2000" />
          </div>
        </div>
      </div>

      <div className="pt-11 pb-20 bg-white">
        <div className="px-5 mb-4">
          <div data-aos="fade-up" className="mb-5">
            <h1 className="text-4xl font-semibold text-black">
              Packed With Features
            </h1>
          </div>
          <div className="mx-10 px-5">
            <div className="grid grid-cols-12 gap-4 h-screen">
              <div class="col-span-3 p-4 text-white flex flex-col items-center justify-center">
                <div className="flex-shrink-0 w-[320px] mb-14">
                  <div className="flex items-center mb-3.5 border-black border-b">
                    <img
                      src={
                        "//www.steadyrack.com/cdn/shop/files/Frame_377.png?v=1733762194&width=100"
                      }
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                    />
                    <h3 className="text-black text-lg font-semibold tracking-tight pb-5">
                      Roll In, Roll Out
                    </h3>
                  </div>
                  <p
                    data-aos="fade-left"
                    className="text-black leading-tight text-sm font-semibold"
                  >
                    The Steadyrack works using a pushing and pulling action to
                    load and unload bikes making it suitable and easy for people
                    of all ages and strength. When the rack is mounted at the
                    recommended height, you can simply roll your bike in and
                    out.
                  </p>
                </div>

                <div className="flex-shrink-0 w-[320px] mb-14">
                  <div className="flex items-center mb-3.5 border-black border-b">
                    <img
                      src={
                        "//www.steadyrack.com/cdn/shop/files/Frame_369.png?v=1733762194&width=100"
                      }
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                    />
                    <h3 className="text-black text-lg font-semibold tracking-tight pb-5">
                      Space Saving
                    </h3>
                  </div>
                  <p
                    data-aos="fade-left"
                    className="text-black leading-tight text-sm font-semibold"
                  >
                    Steadyrack bike racks can be mounted to virtually any wall
                    and will conveniently swivel from side to side. Steadyrack’s
                    can be installed as close as 350mm apart and due to the
                    swivel action, can be overlapped. When the rack is empty,
                    the arms fold away.
                  </p>
                </div>

                <div className="flex-shrink-0 w-[320px] mb-14">
                  <div className="flex items-center mb-3.5 border-black border-b">
                    <img
                      src={
                        "//www.steadyrack.com/cdn/shop/files/Frame_373.png?v=1733762194&width=100"
                      }
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                    />
                    <h3 className="text-black text-lg font-semibold tracking-tight pb-5">
                      Easy to Install
                    </h3>
                  </div>
                  <p
                    data-aos="fade-left"
                    className="text-black leading-tight text-sm font-semibold"
                  >
                    Even if you’re not a handy person, Steadyracks are easy to
                    install. Each rack comes with all the fixings you’ll need
                    for timber or masonry (brick) installations. They can be
                    mounted to any structurally sound wall.
                  </p>
                </div>
              </div>
              <div class="col-span-6 p-4 text-white flex flex-col items-center justify-center">
                <img src="https://www.steadyrack.com/cdn/shop/files/About_page.png?v=1737073780&width=2000" />
              </div>
              <div class="col-span-3 p-4 text-white flex flex-col items-center justify-center">
                <div className="flex-shrink-0 w-[320px] mb-14">
                  <div className="flex items-center mb-3.5 border-black border-b">
                    <img
                      src={
                        "//www.steadyrack.com/cdn/shop/files/Frame_374.png?v=1733762194&width=100"
                      }
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                    />
                    <h3 className="text-black text-lg font-semibold tracking-tight pb-5">
                      Built to Last
                    </h3>
                  </div>
                  <p
                    data-aos="fade-left"
                    className="text-black leading-tight text-sm font-semibold"
                  >
                    Made from Chrome plated steel, our racks are strong and
                    built to last, holding up to 35kg/77lbs.
                  </p>
                </div>

                <div className="flex-shrink-0 w-[320px] mb-14">
                  <div className="flex items-center mb-3.5 border-black border-b">
                    <img
                      src={
                        "//www.steadyrack.com/cdn/shop/files/Frame_372.png?v=1733762194&width=100"
                      }
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                    />
                    <h3 className="text-black text-lg font-semibold tracking-tight pb-5">
                      Easy to Use
                    </h3>
                  </div>
                  <p
                    data-aos="fade-left"
                    className="text-black leading-tight text-sm font-semibold"
                  >
                    The unique design of a Steadyrack means they’re extremely
                    simple to use for everyone. Just open the support arms,
                    balance your bike on the rear tire and then push and pull
                    the bike in or out to use.
                  </p>
                </div>

                <div className="flex-shrink-0 w-[320px] mb-14">
                  <div className="flex items-center mb-3.5 border-black border-b">
                    <img
                      src={
                        "//www.steadyrack.com/cdn/shop/files/Frame_371.png?v=1733762194&width=100"
                      }
                      className="mr-3 w-10 h-10" // Thêm margin phải để tạo khoảng cách với title
                    />
                    <h3 className="text-black text-lg font-semibold tracking-tight pb-5">
                      Safe, Secure & Lockable
                    </h3>
                  </div>
                  <p
                    data-aos="fade-left"
                    className="text-black leading-tight text-sm font-semibold"
                  >
                    Bikes fit snugly into Steadyracks, so there’s virtually no
                    risk of the bikes falling over and being damaged. Bikes can
                    also be secured easily using conventional chain or D type
                    locks, making them extremely secure bike storage solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 bg-white">
        <div className="px-5 relative w-full h-screen flex items-center justify-center text-white">
          <iframe
            allow="autoplay; loop; muted; fullscreen"
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/ke8D4GoohQc?autoplay=1&loop=1&mute=1&playlist=ke8D4GoohQc"
            title="YouTube video"
          ></iframe>
          <div className="absolute bottom-5 left-5 w-[20%]">
            <img
              src="//www.steadyrack.com/cdn/shop/files/Asset_14_2.png?v=1733697676&width=194"
              className="w-30 h-10 pb-3"
            />
            <h1 className="text-white text-3xl font-semibold mb-4">
              Pivot Action
            </h1>
            <p className="text-white font-semibold leading-tight">
              Steadyrack bike racks can be mounted vertically to almost any wall
              and will conveniently swivel from side to side, allowing for
              significant space-saving advantages.
            </p>
          </div>
        </div>
      </div>

      <div className="py-1 bg-white">
        <div
          data-aos="fade-up"
          className="w-full overflow-hidden cursor-pointer px-5 m-10 bg-white"
        >
          <h2 className="text-5xl font-semibold mb-6 text-center md:text-left tracking-tight">
            Our Indoor Bike Parking Projects
          </h2>
          <motion.div
            ref={carouselRef}
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -maxDrag, right: 0 }}
          >
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="relative min-w-[450px] flex flex-col items-center gap-4 overflow-hidden group mr-4" // Thay đổi flex direction thành column
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-[380px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // chỉnh height hình ảnh
                />
                <div className="py-2 w-full">
                  <h1 className=" font-semibold mb-1">{blog.title}</h1>
                  <p className=" tracking-tight">{blog.desc}</p>
                </div>
              </div>
            ))}
            <div></div>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div data-aos="fade-up" className=" mx-96 px-5">
          <p className="text-black text-base tracking-tight text-center mb-4">
            <span className=" font-bold">Please note:</span> We can customize
            colours to suit your building fit out. Minimum order quantities
            apply. Contact us to enquire.
          </p>
          <p className="text-black text-base tracking-tight text-center mb-4">
            Every end of trip indoor bike parking project is unique so we have
            created a suite of design guidelines, floor plans, elevations and
            perspectives which will help you to plan the most efficient use of
            the space and optimize the parking in each of your projects.
            Alternatively get in contact with us to discuss your commercial
            project.
          </p>
          <a className="block text-black text-base tracking-tight text-center mb-4 font-bold underline">
            Revit Files
          </a>
          <a className="block text-black text-base tracking-tight text-center font-bold underline">
            Design Guidelines
          </a>
          <a className="block text-black text-base tracking-tight text-center mb-4 font-bold underline">
            & Product Data Sheets
          </a>

          <a className="block text-black text-base tracking-tight text-center font-bold underline">
            Commercial Care &
          </a>
          <a className="block text-black text-base tracking-tight text-center mb-4 font-bold underline">
            Maintenance Instructions
          </a>
        </div>
      </div>

      <div className="py-1 bg-white">
        <div className="mx-10 mb-10 bg-white">
          <div className="mt-20 flex flex-col justify-center items-center">
            <h1
              data-aos="fade-up"
              className="text-4xl text-black font-semibold mb-10"
            >
              Common Questions
            </h1>
            <div className="w-full max-w-9xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
          <button className="mx-20 flex-start bg-white text-black py-3.5 px-5 border-2 border-black rounded-full font-semibold hover:bg-red-700 hover:text-white transition">
            COMMERCIAL CARE AND MAINTENANCE INSTRUCTIONS
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndoorBikeParking;
