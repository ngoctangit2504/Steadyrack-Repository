import React, { useState, useRef, useEffect } from "react";
import ButtonA from "../components/buttons/ButtonA";

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);
  return (
    <footer data-aos="fade-up" className="bg-black text-white py-8">
      <div className="h-[122px] text-center text-9xl md:text-8xl lg:text-7xl xl:text-7xl font-bold font-impact italic tracking-normal py-0.5 px-5">
        SPACE SAVERS, ADVENTURE SEEKERS
      </div>

      <div className="container mx-auto px-5 md:px-5">
        {/* Mobile Accordion Menu */}
        <div className="md:hidden">
          {["About", "Support", "Corporate", "Social"].map((section, index) => (
            <details key={index} className="mb-2 border-b border-gray-800 pb-2">
              <summary className="font-bold py-2 flex justify-between items-center cursor-pointer">
                {section}
                <span className="text-lg">+</span>
              </summary>
              <div className="pl-2 py-2">
                {section === "About" && (
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="/pages/the-steadyrack-story"
                        className="hover:underline"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/steadyrack-bike-rack-reviews"
                        className="hover:underline"
                      >
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/steadyrack-ambassadors"
                        className="hover:underline"
                      >
                        Ambassadors
                      </a>
                    </li>
                    <li>
                      <a href="/blogs/stories" className="hover:underline">
                        Stories
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/personal-gallery"
                        className="hover:underline"
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a href="/pages/press" className="hover:underline">
                        Press
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/charities-we-support"
                        className="hover:underline"
                      >
                        Community
                      </a>
                    </li>
                  </ul>
                )}
                {section === "Support" && (
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="hover:underline">
                        Customer Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Commercial Enquiries
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Shipping
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Returns & Warranty Claims
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Standard Warranty
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Wall Placement
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Installation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        B2B Login
                      </a>
                    </li>
                  </ul>
                )}
                {section === "Corporate" && (
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="hover:underline">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Cookies Policy
                      </a>
                    </li>
                  </ul>
                )}
                {section === "Social" && (
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="https://www.instagram.com/steadyrack/"
                        className="hover:underline"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/steadyrack/"
                        className="hover:underline"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@Steadyrack_"
                        className="hover:underline"
                      >
                        YouTube
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/steadyrack/"
                        className="hover:underline"
                      >
                        Pinterest
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@steadyrack"
                        className="hover:underline"
                      >
                        TikTok
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://vimeo.com/steadyrack"
                        className="hover:underline"
                      >
                        Vimeo
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </details>
          ))}
        </div>

        {/* Desktop Grid Menu */}
        <div className="hidden md:grid md:grid-cols-6 text-xs pt-10 md:h-[465px] lg:h-[465px]">
          <div className="px-2.5">
            <h3 className="mb-3">About</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/pages/the-steadyrack-story"
                  className="py-1 hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/pages/steadyrack-bike-rack-reviews"
                  className="py-1 hover:underline"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="/pages/steadyrack-ambassadors"
                  className="py-1 hover:underline"
                >
                  Ambassadors
                </a>
              </li>
              <li>
                <a href="/blogs/stories" className="py-1 hover:underline">
                  Stories
                </a>
              </li>
              <li>
                <a
                  href="/pages/personal-gallery"
                  className="py-1 hover:underline"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a href="/pages/press" className="py-1 hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/pages/charities-we-support"
                  className="py-1 hover:underline"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="px-2.5">
            <h3 className="mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Commercial Enquiries
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns & Warranty Claims
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Standard Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wall Placement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  B2B Login
                </a>
              </li>
            </ul>
          </div>

          <div className="px-2.5">
            <h3 className="mb-3">Corporate</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="px-2.5">
            <h3 className="mb-3">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/steadyrack/"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/steadyrack/"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Steadyrack_"
                  className="hover:underline"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/steadyrack/"
                  className="hover:underline"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@steadyrack"
                  className="hover:underline"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://vimeo.com/steadyrack"
                  className="hover:underline"
                >
                  Vimeo
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 px-2.5">
            <h3 className="text-xl">Join our community today.</h3>
            <p className="text-xl">
              10% off first order. Be the first to hear the latest product news,
              VIP offers, and sales!
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center border-2 border-gray-400 rounded-full w-full">
                <input
                  type="email"
                  id="Email--footer-contact"
                  className="bg-transparent flex-grow outline-none text-lg text-white placeholder-gray-400 py-2 px-4 w-full"
                  value=""
                  placeholder="Your email"
                  name="contact[email]"
                  autocorrect="off"
                  autocapitalize="off"
                  aria-label="Your email"
                />
              </div>
              <button className="bg-white text-black py-3.5 px-5 rounded-full font-semibold hover:bg-red-700 hover:text-white transition">
                SUBSCRIBE
              </button>
            </div>
            <p className="text-sm text-gray-400 w-full">
              By submitting this form and signing up for texts, you consent to{" "}
              <a href="#" className="underline">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>

        {/* Newsletter signup for mobile */}
        <div className="md:hidden mt-6 mb-8 border-t border-gray-800 pt-6">
          <h3 className="font-bold mb-3">Join our community today.</h3>
          <p className="text-sm mb-4">
            10% off first order. Be the first to hear the latest product news,
            VIP offers, and sales!
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center border border-white rounded-full px-4 py-2 w-full">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-transparent flex-grow outline-none text-white placeholder-gray-400 px-2"
              />
            </div>
            <div className="w-full">
              <ButtonA text={"SUBSCRIBE"} className="w-full justify-center" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            By submitting this form and signing up for texts, you consent to{" "}
            <a href="#" className="underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-6 md:mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
            <div className="text-xs text-center md:text-left">
                &copy; COPYRIGHT 2025 STEADYRACK NA – ALL RIGHTS RESERVED
            </div>

            <div className="flex flex-wrap justify-center gap-2">
                <div className="relative" ref={dropdownRef}>
                    <button
                        className="border border-white px-3 py-1 md:px-4 md:py-2 text-lg flex items-center"
                        onClick={toggleDropdown}
                    >
                        UNITED STATES
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`w-5 h-5 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className={`absolute z-10 bg-black border border-white min-w-[160px] bottom-full mb-1 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                        <button className="text-white block w-full text-left px-4 py-2 hover:bg-gray-800">Canada</button>
                        <button className="text-white block w-full text-left px-4 py-2 hover:bg-gray-800">United States</button>
                        <button className="text-white block w-full text-left px-4 py-2 hover:bg-gray-800">United Kingdom</button>
                        <button className="text-white block w-full text-left px-4 py-2 hover:bg-gray-800">Europe</button>
                        <button className="text-white block w-full text-left px-4 py-2 hover:bg-gray-800">Australia</button>
                        <button className="text-white block w-full text-left px-4 py-2 hover:bg-gray-800">Asia Pacific</button>
                        <button className="text-white block w-full text-left px-4 py-2 hover:bg-gray-800">South Africa</button>
                    </div>
                </div>
                <button className="border border-white px-3 py-1 md:px-4 md:py-2 text-lg">
                    USD $
                </button>
                <button className="border border-white px-3 py-1 md:px-4 md:py-2 text-lg">
                    ENGLISH
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
