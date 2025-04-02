import React, { useState, useRef, useEffect } from "react";

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
        <p className="text-lg font-medium flex-grow mb-1 sm:mb-0">{question}</p>
        <button className="focus:outline-none bg-gray-300 border font-bold rounded-full w-12 h-12 flex items-center justify-center">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div className="w-full h-px bg-gray-200 my-2"></div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{ height: contentHeight }}
      >
        <div className="mt-1">
          <p className="text-gray-700">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Will hanging my bike damage the bike frame or forks?",
      answer:
        "ProFlex is the world’s most advanced vertical pivoting bike rack. Featuring a new modern aesthetic, increased load capacity (can now hold bikes up to 55kg/121lbs), a SteadySpine which allows for the seamless integration of the new GearMate storage organizer system, removable rear tire rest allowing for the mounting plate to be used with future products (watch this space) as well as new SteadySaddle which allows for bikes with fenders or mudguards. Basically the ProFlex does everything the Classic does and more!",
    },
    {
      question: "Does the ProFlex fit most bikes?",
      answer:
        "Yes! The ProFlex comes in three sizes, Narrow: for bikes with a tire width of up to 2.1” (Road, Gravel, City, BMX, eBike, Fender), Wide: for bikes with a tire width of up to 2.8” (MTB, eMTB, Fender, Gravel) and Fat: for bikes with a tire width of up to 5” (Fat, Cruiser, Fender, Plus, eBike)",
    },
    {
      question: "Does the ProFlex still pivot?",
      answer:
        "Yes, the ProFlex still has our pioneering pivoting feature allowing for pivoting on either side of the rack to maximize space saving.",
    },
    {
      question: "Can it hold heavier bikes?",
      answer:
        "Yes! While the Classic range racks could hold up to 35kg/77lbs, the new ProFlex can hold bikes up to 55kg/121lbs.",
    },
    {
      question: "I have a fender / mudguard on my bike, will ProFlex work?",
      answer:
        "Yes, our innovative SteadySaddle allows for bikes with or without fenders or mudguards. If you have a minimum of 20mm or 3/4 Inch clearance between tire & stays, then your bike will be compatible.",
    },
    {
      question: "Is the ProFlex easy to install?",
      answer:
        "If you have installed your existing rack onto a timber surface and have used the vertical mounting holes (timber installation), the ProFlex can be installed using the same holes. If it is installed using the horizontal mounting holes (masonry installation), you will need to mark out the vertical mounting holes on your existing rack before removing, and then the ProFlex rack can be installed by drilling new vertical mounting holes.",
    },
    {
      question:
        "Can I use my existing drilled holes for my Classic rack to install my new ProFlex?",
      answer:
        "Yes! While the Classic range racks could hold up to 35kg/77lbs, the new ProFlex can hold bikes up to 55kg/121lbs.",
    },
    {
      question:
        "Will my Fat rack with fender be compatible with the ProFlex bike rack?",
      answer:
        "Yes, our innovative SteadySaddle allows for bikes with or without fenders or mudguards. If you have a minimum of 20mm or 3/4 Inch clearance between tire & stays, then your bike will be compatible.",
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
    <div className="w-full max-w-9xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        What You Need To Know
      </h2>
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
  );
};

export default FAQ;
