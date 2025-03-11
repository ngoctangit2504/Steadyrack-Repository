import React, { useState, useEffect } from "react";
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import LogoBlack from "../assets/logo-black.png";
import LogoWhite from "../assets/logo-white.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 82);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Xác định trạng thái hiện tại của header
  const isDark = isScrolled || isHovered;

  return (
    <header
      className={`w-full z-40 transition-all duration-600 ${
        isDark
          ? "fixed top-0 bg-white shadow-md text-black" 
          : "absolute top-0 bg-transparent text-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="px-6 py-3 flex items-center justify-between">
        <div className="w-[200px] flex items-center">
          <img 
            src={isDark ? LogoBlack : LogoWhite} 
            alt="Steadyrack" 
            className="h-8 w-auto object-contain" 
          />
        </div>

        <ul className="flex-1 flex justify-center space-x-6 text-sm font-medium">
          <li><a href="#" className="hover:underline">Just Landed</a></li>
          <li><a href="#" className="hover:underline">Shop</a></li>
          <li><a href="#" className="hover:underline">Solutions</a></li>

          <li className="relative group">
            <a href="#" className="hover:underline">About</a>
            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-56 bg-white shadow-md text-black border border-gray-300">
              {["About Us", "Reviews", "Ambassadors", "Stories", "Gallery", "Press", "Community Support"].map((item) => (
                <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-100">{item}</a>
              ))}
            </div>
          </li>
       
          <li className="relative group">
            <a href="#" className="hover:underline">Commercial</a>
            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-56 bg-white shadow-md text-black border border-gray-300">
              {["Commercial Bike Parking", "Indoor Bike Parking", "Design Files & Guidelines", "Project Gallery", "Become A Dealer", "Commercial Enquiries", "Request Revit Files"].map((item) => (
                <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-100">{item}</a>
              ))}
            </div>
          </li>
  
          <li className="relative group">
            <a href="#" className="hover:underline">Support</a>
            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-56 bg-white shadow-md text-black border border-gray-300">
              {["Need Help Choosing A Rack", "Shipping", "FAQs", "Installation", "Wall Placement Guide"].map((item) => (
                <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-100">{item}</a>
              ))}
            </div>
          </li>
        </ul>

        <div className="w-[200px] flex items-center justify-end space-x-4">
          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-all duration-500 ${
            isDark ? "bg-gray-200 text-black" : "bg-transparent text-white border border-white"
          } hover:bg-gray-300 hover:text-black`}>
            <MagnifyingGlassIcon className="h-5 w-5" />
            <span className="text-sm hidden md:inline">Search</span>
          </div>

          <div className={`hidden md:block hover:text-gray-400 ${isDark ? "text-black" : "text-white"}`}>
            <span className="text-sm">Contact</span>
          </div>

          <a href="#" className={`hover:text-gray-400 transition-all duration-500 ${isDark ? "text-black" : "text-white"}`}>
            <UserIcon className="h-6 w-6" />
          </a>

          <a href="#" className={`relative hover:text-gray-400 transition-all duration-500 ${isDark ? "text-black" : "text-white"}`}>
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;