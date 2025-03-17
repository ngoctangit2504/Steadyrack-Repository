import React, { useState, useEffect } from "react";
import { UserIcon, MagnifyingGlassIcon, ShoppingBagIcon} from "@heroicons/react/24/outline";
import { useCart } from '../contexts/CartContext';

import ButtonA from "../components/buttons/ButtonA";
import LogoBlack from "../assets/Header/logo-black.png";
import LogoWhite from "../assets/Header/logo-white.png";
import JustLandedImg from "../assets/Header/GearMateWithRack_Accessories_1b29874c-f3c3-4796-affa-1e53db795747.png";
import Shop6Img from "../assets/Header/Shop_6.png";
import Solution2Img from "../assets/Header/Solutions_2.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const { openCart, itemsCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 82; // Điều chỉnh theo chiều cao thực tế của banner
    setIsScrolled(window.scrollY > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Xác định trạng thái hiện tại của header
  const isDarkColor = isScrolled || isHovered;
  const isFixedPosition = isScrolled;

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header
      className={`w-full z-40 transition-all duration-600 ${
  isFixedPosition
    ? "fixed top-0" 
    : "absolute top-[36px]"
} ${
  isDarkColor
    ? "bg-white shadow-md text-black"
    : "bg-transparent text-white"
}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMenuLeave();
      }}
    >
      <nav className="px-6 py-3 flex items-center justify-between">
        <div className="w-[200px] flex items-center">
          <img 
          src={isDarkColor ? LogoBlack : LogoWhite}  
          alt="Steadyrack" 
          className="h-8 w-auto object-contain"
          onClick={() => window.location.href = "/"}
          />
        </div>

        <ul className="flex-1 flex justify-center space-x-6 text-sm font-medium">
          <li 
            className="relative"
            onMouseEnter={() => handleMenuHover("justLanded")}
          >
            <a href="#" className={`hover:underline ${activeMenu === "justLanded" ? "font-bold" : ""}`}>Just Landed</a>
          </li>
          <li 
            className="relative"
            onMouseEnter={() => handleMenuHover("shop")}
          >
            <a href="#" className={`hover:underline ${activeMenu === "shop" ? "font-bold" : ""}`}>Shop</a>
          </li>
          <li 
            className="relative"
            onMouseEnter={() => handleMenuHover("solutions")}
          >
            <a href="#" className={`hover:underline ${activeMenu === "solutions" ? "font-bold" : ""}`}>Solutions</a>
          </li>

          <li className="relative group">
            <a className="hover:underline">About</a>
           <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-56 bg-white text-black">
             {[
               { name: "About Us", path: "/pages/the-steadyrack-story" },
               { name: "Reviews", path: "/pages/steadyrack-bike-rack-reviews" },
               { name: "Ambassadors", path: "/pages/steadyrack-ambassadors" },
               { name: "Stories", path: "/blogs/stories" },
               { name: "Gallery", path: "/pages/personal-gallery" },
               { name: "Press", path: "/pages/press" },
               { name: "Community Support", path: "/pages/charities-we-support" }
              ].map((item) => (
          <a 
             key={item.name} 
             href={item.path} 
             className="block px-4 py-2 hover:bg-gray-100"
           >
            {item.name}
          </a>
           ))}
         </div>
       </li>
       
          <li className="relative group">
            <a className="hover:underline">Commercial</a>
            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-56 bg-white text-black">
            {[
               { name: "Commercial Bike Parking", path: "/pages/commercial-bike-parking" },
               { name: "Indoor Bike Parking", path: "/pages/commercial-indoor-bike-parking" },
               { name: "Design Files & Guidelines", path: "/pages/design-guidelines" },
               { name: "Project Gallery", path: "/pages/project-gallery" },
               { name: "Become A Dealer", path: "/pages/become-a-dealer" },
               { name: "Commercial Enquiries", path: "/pages/commercial-enquiries" },
               { name: "Request Revit Files", path: "/pages/revit-files" }
              ].map((item) => (
          <a 
             key={item.name} 
             href={item.path} 
             className="block px-4 py-2 hover:bg-gray-100"
           >
            {item.name}
          </a>
           ))}
            </div>
          </li>
  
          <li className="relative group">
            <a className="hover:underline">Support</a>
            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-56 bg-white text-black">
            {[
               { name: "Need Help Choosing A Rack", path: "/pages/choosing-the-correct-bike-rack" },
               { name: "Shipping", path: "/pages/shipping" },
               { name: "FAQs", path: "/pages/faq" },
               { name: "Installation", path: "/pages/installation-advice" },
               { name: "Wall Placement Guide", path: "/pages/wall-placement-guide" }
              ].map((item) => (
          <a 
             key={item.name} 
             href={item.path} 
             className="block px-4 py-2 hover:bg-gray-100"
           >
            {item.name}
          </a>
           ))}
            </div>
          </li>
          
        </ul>

        <div className="w-[200px] flex items-center justify-end space-x-4">
          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-all duration-500 ${
            isDarkColor ? "bg-gray-200 text-black" : "bg-transparent text-white border border-white"
          } hover:bg-gray-300 hover:text-black`}>
            <MagnifyingGlassIcon className="h-5 w-5" />
            <span className="text-sm hidden md:inline">Search</span>
          </div>

          <a href="/pages/customer-support" className={`hidden md:block ${isDarkColor ? "text-black" : "text-white"}`}>
            <span className="text-sm">Contact</span>
          </a>

          <a href="/login" className={`transition-all duration-500 ${isDarkColor ? "text-black" : "text-white"}`}>
            <UserIcon className="h-6 w-6" />
          </a>

          <div className="flex items-center">
            <button 
              onClick={openCart}
              className="relative p-2 rounded-full hover:bg-gray-100"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {itemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-width white background dropdown for Just Landed, Shop, and Solutions */}
      {activeMenu && (
        <div 
          className="absolute w-full bg-white text-black h-[9cm] shadow-md transition-all duration-300"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => handleMenuLeave()}
        >
          {activeMenu === "justLanded" && (
            <div className="container mx-auto px-6 py-8 flex">
            <div className="w-1/4">
              <h3 className="font-bold text-lg mb-4">New Releases</h3>
              <ul className="space-y-3">
                <li><a href="#" className="block">ProFlex Range</a></li>
                <li><a href="#" className="block">GearMate</a></li>
                <li><a href="#" className="block">Behind The Scenes</a></li>
                <li><a href="#" className="block">Shop All</a></li>
              </ul>
            </div>
    
            <div className="w-3/4 pl-8 relative text-white">
              <div className="absolute right-0 w-[14cm] h-[8cm]">
                <img 
                  src={JustLandedImg} 
                  alt="ProFlex & GearMate" 
                  className="w-full h-full object-cover" 
                />
    
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-3xl font-bold">ProFlex & GearMate</h2>
                  <p className="text-lg">The Ultimate Duo</p>
                  <ButtonA text="SHOP NOW"/>
                </div>
              </div>
            </div>
          </div>
          )}
          
          {activeMenu === "shop" && (
  <div className="absolute w-full bg-white text-black h-[9cm] shadow-md transition-all duration-300">
    <div className="container mx-auto px-6 py-8 flex">
      
      
      <div className="w-1/4">
        <h3 className="font-bold text-lg mb-4">Bike Racks</h3>
        <ul className="space-y-3">
          <li><a href="#" className="block">ProFlex Range</a></li>
          <li><a href="#" className="block">Classic Range</a></li>
          <li><a href="/collections/proflex-range" className="block">Shop All</a></li>
        </ul>
      </div>


      <div className="w-1/4">
        <h3 className="font-bold text-lg mb-4">Storage Systems</h3>
        <ul className="space-y-3">
          <li><a href="#" className="block">GearMate Bundle</a></li>
          <li><a href="#" className="block">GearMate SteadySpine</a></li>
          <li><a href="#" className="block">Shop All</a></li>
        </ul>
      </div>

      
      <div className="w-1/4">
        <h3 className="font-bold text-lg mb-4">Accessories</h3>
        <ul className="space-y-3">
          <li><a href="#" className="block">End Caps</a></li>
          <li><a href="#" className="block">D Lock and Cable</a></li>
          <li><a href="#" className="block">Lock Bracket</a></li>
          <li><a href="#" className="block">Spare Parts</a></li>
          <li><a href="#" className="block">Shop All</a></li>
        </ul>
      </div>

      
      <div className="w-1/4 relative text-white">
        <div className="absolute right-0 w-[14cm] h-[8cm]">
          <img 
            src={Shop6Img} 
            alt="A New Era of SteadyRack" 
            className="w-full h-full object-cover"
          />

          
          <div className="absolute bottom-4 left-4">
            <h2 className="text-3xl font-bold">A New Era of Steadyrack</h2>
            <p className="text-lg">ProFlex & GearMate</p>
            <ButtonA text="EXPLORE"/>
          </div>
        </div>
      </div>

    </div>
  </div>
)}
          
          {activeMenu === "solutions" && (
            <div className="container mx-auto px-6 py-8 flex">
            <div className="w-1/4">
              <h3 className="font-bold text-lg mb-4">Our Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="block">Personal Bike Storage</a></li>
                <li><a href="#" className="block">Home Indoor</a></li>
                <li><a href="#" className="block">Small Space</a></li>
                <li><a href="#" className="block">Garage</a></li>
                <li><a href="#" className="block">Multirack</a></li>
              </ul>
            </div>
    
            
            <div className="w-3/4 pl-8 relative text-white">
              <div className="absolute right-0 w-[14cm] h-[8cm]">
                <img 
                  src={Solution2Img} 
                  alt="ProFlex & GearMate" 
                  className="w-full h-full object-cover" 
                />
    
                
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-3xl font-bold">Personal Bike Storage</h2>
                  <ButtonA text="SHOP NOW"/>
                </div>
              </div>
            </div>
          </div>
          )}
          
        </div>
      )}
    </header>
  );
};

export default Header;