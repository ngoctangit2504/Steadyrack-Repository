import React, { useState, useRef, useEffect } from "react";
import YouTubeBackground from "../../components/videoComponent/YouTubeBackground";
import CompareModel from "../../components/CompareModel/CompareModel";
import BrandsCarousel from "../../components/carousel/BrandsCarousel";
import FeatureProduct from "../../components/featured products/FeaturedProduct";

function PersonalBikeStorage() {
  const videoId = "hqwJF28N-D0";
  const textContent = {
    heading: "Personal bike storage",
  };

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
      question:
        "What are the ergonomic benefits of storing my bike in a Steadyrack?",
      answer:
        "As Steadyrack is designed to be the ultimate roll in, roll out storage solution, you can be confident that storing your bike in a Steadyrack won't cause any strain on your back. The design makes storing even heavy bikes easy. Read more about the benefits of a Steadyrack here.",
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
        "Yes - all our racks are compatible with most types of locks, including chain, cable and D-locks. We have introduced a Lock Bracket and D lock and Cable which is available for purchase on our website. It is also important that you do not rely on the rack arms, as the bolts holding these to the rack frame can be undone.",
    },
    {
      question: "Do all the racks pivot?",
      answer: "Yes –  all five of our racks pivot to the left and right.",
    },
    {
      question: "Will hanging my bike damage the bike frame, forks or wheels?",
      answer:
        "Hanging a bike in a Steadyrack will not cause any damage to your frame, forks or wheels. No part of the bike frame touches the rack, only the front tire, which is cradled in the steel arms.",
    },
    {
      question:
        "How far will my bike stick out from the wall when pivoted against the wall?",
      answer:
        "It really depends on the width of your handlebars and the pedals. It will fold until the handlebars touch the wall but not quite 90 degrees or flat to the wall. For a normal road bike bar, we would allow about 400mm or around 16 inches, and for a MTB with wider bars probably around 1m or 39 inches (give or take).",
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

  return (
    <div>
      <div>
        <YouTubeBackground videoId={videoId} text={textContent} />
      </div>

      <div className="py-20">
        <div data-aos="fade-up" className=" mx-96 px-5">
          <h1 className="text-black text-4xl font-semibold text-center tracking-tight mb-7">
            Find the perfect Steadyrack to keep your bikes organized and your
            home tidy.
          </h1>
          <p className="text-black text-base text-center tracking-tight mb-4">
            Steadyrack’s wall-mounted bike racks are a unique, patented bike
            storage solution. Our compact bike storage racks are easy to use,
            easy to load and unload and save space in your home or garage while
            keeping your bikes safe & secure.
          </p>
          <p className="text-black text-base text-center tracking-tight mt-4">
            It's your bike, and we think it deserves the best. That's why we
            designed the world's best bike rack. Don't just take our word for it
            though, take it from the millions of people all over the world who
            choose to keep their bikes safe and secure in a Steadyrack.
          </p>
        </div>
      </div>

      <div>
        <div data-aos="fade-up" className="py-0.5 px-5">
          <h1 className=" font-impact italic text-10xl text-black tracking-tight uppercase text-center whitespace-nowrap">
            Original Innovators
          </h1>
        </div>
      </div>

      <div>
        <div data-aos="fade-up" className=" py-24">
          <h1 className="text-black text-4xl font-semibold text-center tracking-tight mx-44 px-5">
            Steadyrack is the world’s most acclaimed vertical bike rack
            solution, just read all the 5-star reviews from happy and satisfied
            customers.
          </h1>
        </div>
      </div>

      <div>
        <hr className=" border border-gray-300 mx-5"></hr>
      </div>

      <div className="pt-9 pb-5 sticky top-0 z-[-5]">
        <div className="px-5 grid grid-cols-2">
          <div className="px-1.5">
            <img src="https://www.steadyrack.com/cdn/shop/files/classic--assistance.webm_af262f83-d875-4be4-b563-43cdc2bc6a6e.png?v=1734126431&width=2000" />
          </div>
          <div className=" flex px-1.5 items-center justify-center">
            <div data-aos="fade-up" className="py-10 px-20">
              <h1 className="text-black text-4xl font-semibold tracking-tight mb-5">
                Space Saving Bike Storage – Upright Bike Storage Rack
              </h1>
              <p className="text-base test-black mb-5 leading-tight">
                Steadyrack allows you to hang your bike vertically on the wall.
                This is a space saving bike storage solution for any room and
                also protects your bike. Getting your bike off the floor and
                onto the wall, stored away correctly. With a range of
                Steadyrack’s available to suit almost any type of bike you have.
                You’ll be impressed by how much space you’ll save with our
                vertical bicycle storage racks.
              </p>
              <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                SHOP NOW
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
                Bike Storage Made Easy with Steadyrack
              </h1>
              <p className="text-base text-white mb-5 leading-tight">
                Steadyrack’s range of bike racks provide an answer to all your
                space saving and bike storage needs. In a world where space is
                limited in many houses, apartments, living rooms, garages, and
                sheds around the world, it’s increasingly hard to find or create
                space to store your bike. Bicycles are large items when they’re
                horizontal, making them clunky to store without a dedicated bike
                storage solution. There’s a lot more unutilized wall space on
                offer that can help solve this problem and our Steadyrack bike
                rack safely provides a compact, space saving bike storage
                solution.
              </p>
              <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="px-1.5">
            <img src="https://www.steadyrack.com/cdn/shop/files/classic--assistance.webm_935db328-5702-4240-876e-6eb7cd5ac9a1.png?v=1735804680&width=2000" />
          </div>
        </div>
      </div>

      <div className="pt-11 pb-20 bg-white">
        <div className="px-5 mb-4">
          <div data-aos="fade-up" className="mb-5">
            <h1 className="text-4xl font-semibold text-black">
              The Features You Need
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
                <img src="https://www.steadyrack.com/cdn/shop/files/Copy_of_2020_CLASSIC_RACK_Road_Racing_Bike_Wilier_03_2.png?v=1733754473&width=2000" />
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
              src="//www.steadyrack.com/cdn/shop/files/Icons_5.png?v=1737683358&width=194"
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
        <CompareModel />
      </div>

      <div className="py-1 bg-white">
        <BrandsCarousel />
        <div className=" mx-96 px-5 flex justify-center items-center">
          <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-red-600 hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="py-1 bg-white">
        <div className="mx-10 bg-white">
          <div className="my-20 flex flex-col justify-center items-center">
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
        </div>
      </div>

      <div className="py-1 bg-white">
        <FeatureProduct />
      </div>
    </div>
  );
}

export default PersonalBikeStorage;
