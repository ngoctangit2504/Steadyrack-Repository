import React from "react";
import ContactImg from "../assets/Contact_us_form_banner.webp";

function Contact() {
  return (
    <div>
      <img src={ContactImg} alt="Contact Us Banner" className="w-full h-auto" />

      <div
        className="bg-white max-w-4xl mx-auto px-8 md:px-14 py-10"
        data-aos="fade-up"
      >
        <h1 className="text-black text-2xl md:text-4xl font-semibold leading-tight mb-4">
          Get In Touch
        </h1>

        <p className="text-black text-sm md:text-base font-medium leading-tight mb-4">
          We’re here to help you love your bike. Our Customer Support team is
          available to assist you with a range of Steadyrack related issues and
          questions.
        </p>
        <p className="text-black text-sm md:text-base font-medium leading-tight mb-4">
          From matching your bike to the perfect rack, spacing and installation
          to tracking your order, we’ve got you covered. <br />
          <br /> We are based in Western Australia and will respond to your
          inquiry as soon as possible. Please allow 1-2 business days for one of
          our team members to connect with you.
        </p>

        <p className="text-black text-sm md:text-base font-medium leading-tight mb-6">
          <strong>Please note:</strong> We are currently experiencing a high
          volume of enquiries. As a result, response times may be longer than
          usual. We appreciate your patience and are working hard to assist
          everyone as quickly as possible. Thank you for your understanding!
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            {
              title: "How To Choose A Rack",
              link: "/pages/choosing-the-correct-bike-rack",
            },
            { title: "Installation Guide", link: "/pages/installation-advice" },
            { title: "Returns & Refunds", link: "/pages/returns" },
            { title: "FAQs", link: "/pages/faq" },
            {
              title: "Commercial Spaces",
              link: "/pages/commercial-enquiries-1",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-gray-100 text-black text-xs md:text-sm font-medium px-3 py-1.5 rounded-full hover:bg-gray-300 transition"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      <div className="pt-7 pb-14">
        <div className="mx-12 px-5 flex flex-col justify-center items-center">
          <form className="w-[65%]">
            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">Full Name</label>
              <input
                type="text"
                className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
              ></input>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">Email</label>
              <input
                type="text"
                className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
              ></input>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col px-1 mb-6 w-full">
                <label className=" tracking-tight mb-1">Phone *</label>
                <input
                  type="text"
                  className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
                ></input>
              </div>

              <div className="flex flex-col px-1 mb-6 w-full">
                <label className=" tracking-tight mb-1">Country *</label>
                <input
                  type="text"
                  className="h-12 rounded-full shadow-lg bg-gray-100 shadow-gray-200 px-5"
                  placeholder="Please select"
                ></input>
              </div>
            </div>

            <div className="flex flex-col px-1 mb-6 w-full">
              <label className=" tracking-tight mb-1">Message</label>
              <textarea
                type="text"
                className="h-28 rounded-lg shadow-lg bg-gray-100 shadow-gray-200 p-5"
              ></textarea>
            </div>

            <div className="flex flex-col px-1 mb-6">
              <h1 className=" font-bold tracking-tight">DISCLAIMER</h1>
              <p className=" tracking-tight">
                If you are a business/commercial customer, do not submit this
                form.
              </p>
              <p className=" tracking-tight">
                Please navigate to the Commercial Enquiries page to submit an
                enquiry.
              </p>
            </div>

            <div className="flex flex-col px-1 mb-6">
              <button
                type="submit"
                className="bg-black text-white rounded-full h-10 w-28"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
