import React from "react";
import ButtonA from "../components/buttons/ButtonA";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
  <div className="text-center text-4xl md:text-6xl font-bold italic tracking-wide mb-10">
    SPACE SAVERS, ADVENTURE SEEKERS
  </div>

  <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-6 text-sm">
    
    <div>
      <h3 className="font-bold mb-3">About</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Reviews</a></li>
        <li><a href="#" className="hover:underline">Ambassadors</a></li>
        <li><a href="#" className="hover:underline">Stories</a></li>
        <li><a href="#" className="hover:underline">Gallery</a></li>
        <li><a href="#" className="hover:underline">Press</a></li>
        <li><a href="#" className="hover:underline">Community</a></li>
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
        <li><a href="#" className="hover:underline">Instagram</a></li>
        <li><a href="#" className="hover:underline">Facebook</a></li>
        <li><a href="#" className="hover:underline">YouTube</a></li>
        <li><a href="#" className="hover:underline">Pinterest</a></li>
        <li><a href="#" className="hover:underline">TikTok</a></li>
        <li><a href="#" className="hover:underline">Vimeo</a></li>
      </ul>
    </div>

    <div className="md:col-span-2">
      <h3 className="font-bold mb-3">Join our community today.</h3>
      <p className="text-sm mb-4">
        10% off first order. Be the first to hear the latest product news, VIP offers, and sales!
      </p>
      <div className="flex items-center gap-3">
  <div className="flex items-center border border-white rounded-full px-4 py-2 w-full max-w-lg">
    <input type="email" placeholder="YOUR EMAIL" className="bg-transparent flex-grow outline-none text-white placeholder-gray-400 px-2"/>
  </div>
  <ButtonA text={"SUBSCRIBE"}/>
</div>
      <p className="text-sm text-gray-600 mt-2">
        By submitting this form and signing up for texts, you consent to <a href="#" className="underline">Terms & Conditions</a>
      </p>
    </div>
  </div>

  <div className="container mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
  <div className="text-sm">
    &copy; COPYRIGHT 2025 STEADYRACK NA – ALL RIGHTS RESERVED
  </div>

  <div className="flex flex-wrap gap-2">
    <button className="border border-white px-4 py-2 text-xs">UNITED STATES</button>
    <button className="border border-white px-4 py-2 text-xs">USD $</button>
    <button className="border border-white px-4 py-2 text-xs">ENGLISH</button>
  </div>
</div>
</footer>
  );
};

export default Footer;