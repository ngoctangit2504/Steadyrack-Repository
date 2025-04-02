import React, { useState, useRef, useEffect } from "react";

function Shipping() {
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
      question: "Shipping & Delivery",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Pre-Orders",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Payment Methods",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      <div className="pt-16 pb-14 border-b">
        <div className="flex flex-col mx-80 px-5 justify-center items-center">
          <h1 className=" text-5xl font-semibold tracking-tight mb-12">
            Shipping
          </h1>
          <p className="tracking-tight mb-4 text-center">
            Whether you’re after a single rack for yourself, multiple racks for
            your family, or a commercial bike parking fit out for your business,
            our team at Steadyrack will try their best to deliver your bicycle
            racks to you, wherever you are in the world. We have warehouses
            placed around the world to ship our bike racks as quickly as
            possible to homes and businesses far and wide.
          </p>
          <p className="tracking-tight mb-4">
            Can’t find your country on the list?
          </p>
          <button className="text-black px-6 py-3 rounded-full font-semibold border-2 border-black shadow-md hover:bg-black hover:text-white transition">
            {" "}
            CONTACT US
          </button>
        </div>
      </div>

      <div className="py-20">
        <div className="px-5 mx-96">
          <h1 className=" font-bold text-2xl text-center">
            Free shipping available on orders over $100 USD to selected
            locations. See below for further information.
          </h1>
        </div>
      </div>

      <div className="px-5">
        <div className="pt-1 pb-16">
          <h1 className=" font-semibold tracking-tight text-4xl">
            Free Shipping Countries
          </h1>
        </div>
      </div>

      <div className=" grid grid-cols-3">
        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            North America
          </h1>
          <p className="text-2xl tracking-tight">Mainland United States</p>
          <p className="text-2xl tracking-tight">
            Canada (excluding Yukon and Nunavut)
          </p>
        </div>

        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            Europe
          </h1>
          <p className="text-2xl tracking-tight">Belgium</p>
          <p className="text-2xl tracking-tight">Germany</p>
          <p className="text-2xl tracking-tight">Netherlands</p>
          <p className="text-2xl tracking-tight">United Kingdom</p>
        </div>

        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            Africa and Oceania
          </h1>
          <p className="text-2xl tracking-tight">
            Australia (excluding Tasmania)
          </p>
          <p className="text-2xl tracking-tight">South Africa</p>
        </div>
      </div>

      <div className="px-5">
        <div className="pt-10 pb-16">
          <h1 className=" font-semibold tracking-tight text-4xl">
            Paid Shipping Countries & Locations
          </h1>
        </div>
      </div>

      <div className=" grid grid-cols-3">
        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            North America
          </h1>
          <p className="text-2xl tracking-tight">Hawaii</p>
          <p className="text-2xl tracking-tight">Alaska</p>
          <p className="text-2xl tracking-tight">Canada (Yukon and Nunavut)</p>
        </div>

        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            Europe
          </h1>
          <p className="text-1xl tracking-tight uppercase">
            Austria, Bulgaria, Czech Republic, Denmark, Estonia, Finland,
            France, Greece, Hungary, Iceland, Italy, Latvia, Lithuania,
            Luxembourg, Malta, Norway, Poland, Portugal, Republic of Cyprus,
            Republic of Ireland, Romania, Slovakia, Spain, Sweden, Switzerland,
            Turkey
          </p>
        </div>

        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            Africa and Oceania
          </h1>
          <p className="text-2xl tracking-tight">
            Australia (excluding Tasmania)
          </p>
          <p className="text-2xl tracking-tight">South Africa</p>
        </div>
      </div>

      <div className="px-5">
        <div className="pt-10 pb-16">
          <h1 className=" font-semibold tracking-tight text-4xl">
            Estimated Shipping Timeframes
          </h1>
        </div>
      </div>

      <div className=" grid grid-cols-3">
        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            Australia
          </h1>
          <p className="text-2xl tracking-tight">Expected Delivery:</p>
          <p className="text-2xl tracking-tight">
            WA - 2-7 business days after dispatch.
          </p>
          <p className="text-2xl tracking-tight">
            Other States - 2-10 business days after dispatch.
          </p>
        </div>

        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            United Kingdom
          </h1>
          <p className="text-2xl tracking-tight uppercase">
            Expected Delivery:
          </p>
          <p className="text-2xl tracking-tight uppercase">
            2-7 business days after dispatch.
          </p>
        </div>

        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            Europe
          </h1>
          <p className="text-2xl tracking-tight">Expected Delivery:</p>
          <p className="text-2xl tracking-tight">
            2-15 business days after dispatch.
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-3">
        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            USA
          </h1>
          <p className="text-2xl tracking-tight">Expected Delivery:</p>
          <p className="text-2xl tracking-tight">
            2-10 business days after dispatch.
          </p>
        </div>

        <div className="px-8 h-[270px]">
          <h1 className="text-2xl font-semibold tracking-tight border-b border-black pb-3 mb-3">
            Canada
          </h1>
          <p className="text-2xl tracking-tight uppercase">
            Expected Delivery:
          </p>
          <p className="text-2xl tracking-tight uppercase">
            2-15 business days after dispatch.
          </p>
        </div>
      </div>

      <div>
        <div className="mx-10 mb-10">
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
        </div>
      </div>
    </div>
  );
}

export default Shipping;
