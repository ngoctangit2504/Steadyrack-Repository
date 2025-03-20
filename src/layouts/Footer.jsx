import React from "react";
import ButtonA from "../components/buttons/ButtonA";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-black text-white py-8">
      <div className="text-center text-3xl md:text-6xl font-bold italic tracking-wide mb-6 md:mb-10 px-4">
        SPACE SAVERS, ADVENTURE SEEKERS
      </div>

      <div className="container mx-auto px-4 md:px-6">
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
                    <li><a href="/pages/the-steadyrack-story" className="hover:underline">About Us</a></li>
                    <li><a href="/pages/steadyrack-bike-rack-reviews" className="hover:underline">Reviews</a></li>
                    <li><a href="/pages/steadyrack-ambassadors" className="hover:underline">Ambassadors</a></li>
                    <li><a href="/blogs/stories" className="hover:underline">Stories</a></li>
                    <li><a href="/pages/personal-gallery" className="hover:underline">Gallery</a></li>
                    <li><a href="/pages/press" className="hover:underline">Press</a></li>
                    <li><a href="/pages/charities-we-support" className="hover:underline">Community</a></li>
                  </ul>
                )}
                {section === "Support" && (
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:underline">Customer Support</a></li>
                    <li><a href="#" className="hover:underline">Commercial Enquiries</a></li>
                    <li><a href="#" className="hover:underline">FAQs</a></li>
                    <li><a href="#" className="hover:underline">Shipping</a></li>
                    <li><a href="#" className="hover:underline">Returns & Warranty Claims</a></li>
                    <li><a href="#" className="hover:underline">Standard Warranty</a></li>
                    <li><a href="#" className="hover:underline">Wall Placement</a></li>
                    <li><a href="#" className="hover:underline">Installation</a></li>
                    <li><a href="#" className="hover:underline">Help Center</a></li>
                    <li><a href="#" className="hover:underline">B2B Login</a></li>
                  </ul>
                )}
                {section === "Corporate" && (
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Cookies Policy</a></li>
                  </ul>
                )}
                {section === "Social" && (
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://www.instagram.com/steadyrack/" className="hover:underline">Instagram</a></li>
                    <li><a href="https://www.facebook.com/steadyrack/" className="hover:underline">Facebook</a></li>
                    <li><a href="https://www.youtube.com/@Steadyrack_" className="hover:underline">YouTube</a></li>
                    <li><a href="https://www.instagram.com/steadyrack/" className="hover:underline">Pinterest</a></li>
                    <li><a href="https://www.tiktok.com/@steadyrack" className="hover:underline">TikTok</a></li>
                    <li><a href="https://vimeo.com/steadyrack" className="hover:underline">Vimeo</a></li>
                  </ul>
                )}
              </div>
            </details>
          ))}
        </div>

        {/* Desktop Grid Menu */}
        <div className="hidden md:grid md:grid-cols-6 gap-6 text-sm">
          <div>
            <h3 className="font-bold mb-3">About</h3>
            <ul className="space-y-2">
              <li><a href="/pages/the-steadyrack-story" className="hover:underline">About Us</a></li>
              <li><a href="/pages/steadyrack-bike-rack-reviews" className="hover:underline">Reviews</a></li>
              <li><a href="/pages/steadyrack-ambassadors" className="hover:underline">Ambassadors</a></li>
              <li><a href="/blogs/stories" className="hover:underline">Stories</a></li>
              <li><a href="/pages/personal-gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/pages/press" className="hover:underline">Press</a></li>
              <li><a href="/pages/charities-we-support" className="hover:underline">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:underline">Commercial Enquiries</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Returns & Warranty Claims</a></li>
              <li><a href="#" className="hover:underline">Standard Warranty</a></li>
              <li><a href="#" className="hover:underline">Wall Placement</a></li>
              <li><a href="#" className="hover:underline">Installation</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">B2B Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Corporate</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookies Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Social</h3>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/steadyrack/" className="hover:underline">Instagram</a></li>
              <li><a href="https://www.facebook.com/steadyrack/" className="hover:underline">Facebook</a></li>
              <li><a href="https://www.youtube.com/@Steadyrack_" className="hover:underline">YouTube</a></li>
              <li><a href="https://www.instagram.com/steadyrack/" className="hover:underline">Pinterest</a></li>
              <li><a href="https://www.tiktok.com/@steadyrack" className="hover:underline">TikTok</a></li>
              <li><a href="https://vimeo.com/steadyrack" className="hover:underline">Vimeo</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold mb-3">Join our community today.</h3>
            <p className="text-sm mb-4">
              10% off first order. Be the first to hear the latest product news, VIP offers, and sales!
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-white rounded-full px-4 py-2 w-full">
                <input type="email" placeholder="YOUR EMAIL" className="bg-transparent flex-grow outline-none text-white placeholder-gray-400 px-2"/>
              </div>
              <ButtonA text={"SUBSCRIBE"}/>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              By submitting this form and signing up for texts, you consent to <a href="#" className="underline">Terms & Conditions</a>
            </p>
          </div>
        </div>

        {/* Newsletter signup for mobile */}
        <div className="md:hidden mt-6 mb-8 border-t border-gray-800 pt-6">
          <h3 className="font-bold mb-3">Join our community today.</h3>
          <p className="text-sm mb-4">
            10% off first order. Be the first to hear the latest product news, VIP offers, and sales!
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center border border-white rounded-full px-4 py-2 w-full">
              <input type="email" placeholder="YOUR EMAIL" className="bg-transparent flex-grow outline-none text-white placeholder-gray-400 px-2"/>
            </div>
            <div className="w-full">
              <ButtonA text={"SUBSCRIBE"} className="w-full justify-center"/>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            By submitting this form and signing up for texts, you consent to <a href="#" className="underline">Terms & Conditions</a>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-6 md:mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-800 pt-6">
          <div className="text-xs md:text-sm text-center md:text-left">
            &copy; COPYRIGHT 2025 STEADYRACK NA – ALL RIGHTS RESERVED
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button className="border border-white px-3 py-1 md:px-4 md:py-2 text-xs">UNITED STATES</button>
            <button className="border border-white px-3 py-1 md:px-4 md:py-2 text-xs">USD $</button>
            <button className="border border-white px-3 py-1 md:px-4 md:py-2 text-xs">ENGLISH</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;