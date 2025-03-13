import React from 'react';
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
        From matching your bike to the perfect rack, spacing and installation to
        tracking your order, we’ve got you covered. <br />
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
          { title: "How To Choose A Rack", link: "/pages/choosing-the-correct-bike-rack" },
          { title: "Installation Guide", link: "/pages/installation-advice" },
          { title: "Returns & Refunds", link: "/pages/returns" },
          { title: "FAQs", link: "/pages/faq" },
          { title: "Commercial Spaces", link: "/pages/commercial-enquiries-1" },
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

    <div className="bg-white max-w-4xl mx-auto px-8 md:px-14 py-10">
      <h2 className="text-black text-xl md:text-2xl font-semibold leading-tight mb-6">
        Submit An Inquiry
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name*"
          className="w-full bg-gray-200 text-black p-3 rounded-md outline-none placeholder:text-black"
        />

        <input
          type="email"
          placeholder="Email*"
          className="w-full bg-gray-200 text-black p-3 rounded-md outline-none placeholder:text-black"
        />

        <div className="flex gap-3">
          <select className="w-1/2 bg-gray-200 text-black p-3 rounded-md outline-none">
            <option>Country</option>
            <option>USA</option>
            <option>Australia</option>
            <option>UK</option>
          </select>
          <input
            type="text"
            placeholder="Phone"
            className="w-1/2 bg-gray-200 text-black p-3 rounded-md outline-none placeholder:text-black"
          />
        </div>

        <textarea
          placeholder="Message*"
          rows="4"
          className="w-full bg-gray-200 text-black p-3 rounded-md outline-none placeholder:text-black"
        ></textarea>

        <button className="w-fit bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition">
          SUBMIT
        </button>
      </form>

      <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
      
      <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between text-black text-sm">
        
        <div className="flex items-center gap-2">
          <span className="text-xl">💬</span>
          <span>Chat with us</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl">📱</span>
          <span>Call us</span>
          <span className="font-semibold">+61 8 9435 2435</span>
        </div>

        <div className="text-right">
          <p>Our team is available</p>
          <p>Monday to Friday, 9am - 5pm AWST</p>
          <p>(Australian Western Standard Time)</p>
        </div>
      </div>

      <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"/>

    </div>
      
    </div>
  )
}

export default Contact