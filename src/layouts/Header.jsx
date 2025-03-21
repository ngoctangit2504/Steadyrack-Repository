import React, { useState, useEffect } from "react";
import { UserIcon, MagnifyingGlassIcon, ShoppingBagIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const { openCart, itemsCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 82;
      setIsScrolled(window.scrollY > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu and reset submenu when closed
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileSubmenu(null);
    }
  };

  // Toggle mobile submenu
  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  // Define header state
  const isDarkColor = isScrolled || isHovered || mobileMenuOpen;
  const isFixedPosition = isScrolled;

  return (
    <header
      className={`w-full z-40 transition-all duration-600 ${
        isFixedPosition ? "fixed top-0" : "absolute top-[36px] md:top-[36px]"
      } ${
        isDarkColor ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveMenu(null);
      }}
    >
      <nav className="px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button onClick={toggleMobileMenu} className="p-2">
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none md:w-[200px] flex items-center justify-center md:justify-start">
          <img 
            src={isDarkColor ? LogoBlack : LogoWhite}  
            alt="Steadyrack" 
            className="h-8 w-auto object-contain cursor-pointer"
            onClick={() => window.location.href = "/"}
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex flex-1 justify-center space-x-3 lg:space-x-6 text-sm font-medium">
          {/* Just Landed */}
          <li className="relative">
            <a 
              href="#" 
              className={`hover:underline ${activeMenu === "justLanded" ? "font-bold" : ""}`}
              onMouseEnter={() => setActiveMenu("justLanded")}
            >
              Just Landed
            </a>
          </li>
          
          {/* Shop */}
          <li className="relative">
            <a 
              href="#" 
              className={`hover:underline ${activeMenu === "shop" ? "font-bold" : ""}`}
              onMouseEnter={() => setActiveMenu("shop")}
            >
              Shop
            </a>
          </li>
          
          {/* Solutions */}
          <li className="relative">
            <a 
              href="#" 
              className={`hover:underline ${activeMenu === "solutions" ? "font-bold" : ""}`}
              onMouseEnter={() => setActiveMenu("solutions")}
            >
              Solutions
            </a>
          </li>

          {/* About */}
          <li className="relative group">
            <a 
              className="hover:underline"
              onMouseEnter={() => setActiveMenu(null)}
            >
              About
            </a>
            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-56 bg-white text-black shadow-md z-50">
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
       
          {/* Commercial */}
          <li className="relative group">
            <a 
              className="hover:underline"
              onMouseEnter={() => setActiveMenu(null)}
            >
              Commercial
            </a>
            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-56 bg-white text-black shadow-md z-50">
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
  
          {/* Support */}
          <li className="relative group">
            <a 
              className="hover:underline"
              onMouseEnter={() => setActiveMenu(null)}
            >
              Support
            </a>
            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-56 bg-white text-black shadow-md z-50">
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

        {/* Header Right Icons */}
        <div className="flex-1 md:flex-none md:w-[200px] flex items-center justify-end space-x-2 md:space-x-4">
          <div className={`hidden sm:flex items-center space-x-1 px-2 md:px-3 py-1 rounded-full transition-all duration-500 ${
            isDarkColor ? "bg-gray-200 text-black" : "bg-transparent text-white border border-white"
          } hover:bg-gray-300 hover:text-black`}>
            <MagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm hidden lg:inline">Search</span>
          </div>

          <a href="/pages/customer-support" className={`hidden lg:block ${isDarkColor ? "text-black" : "text-white"}`}>
            <span className="text-sm">Contact</span>
          </a>

          <a href="/login" className={`transition-all duration-500 ${isDarkColor ? "text-black" : "text-white"}`}>
            <UserIcon className="h-5 w-5 md:h-6 md:w-6" />
          </a>

          <div className="flex items-center">
            <button 
              onClick={openCart}
              className="relative p-1 md:p-2 rounded-full hover:bg-gray-100"
            >
              <ShoppingBagIcon className="h-5 w-5 md:h-6 md:w-6" />
              {itemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                  {itemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black overflow-y-auto max-h-[80vh]">
          <ul className="py-2">
            {/* Mobile Just Landed */}
            <li>
              <div 
                className="px-4 py-3 flex justify-between items-center border-b border-gray-100"
                onClick={() => toggleMobileSubmenu("justLanded")}
              >
                <span className="font-medium">Just Landed</span>
                <span>{mobileSubmenu === "justLanded" ? "-" : "+"}</span>
              </div>
              
              {mobileSubmenu === "justLanded" && (
                <div className="bg-gray-50 py-2 px-6">
                  <h3 className="font-bold text-sm mb-2">New Releases</h3>
                  <ul className="space-y-2 mb-4">
                    <li><a href="#" className="block text-sm py-1">ProFlex Range</a></li>
                    <li><a href="#" className="block text-sm py-1">GearMate</a></li>
                    <li><a href="#" className="block text-sm py-1">Behind The Scenes</a></li>
                    <li><a href="/collections/proflex-gearmate" className="block text-sm py-1 font-medium">Shop All</a></li>
                  </ul>
                  
                  <div className="w-full h-48 relative text-white mb-2">
                    <img 
                      src={JustLandedImg} 
                      alt="ProFlex & GearMate" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-2 left-2">
                      <h2 className="text-lg font-bold">ProFlex & GearMate</h2>
                      <p className="text-sm">The Ultimate Duo</p>
                      <button className="mt-1 bg-white text-black px-3 py-1 text-xs font-bold">SHOP NOW</button>
                    </div>
                  </div>
                </div>
              )}
            </li>
            
            {/* Mobile Shop */}
            <li>
              <div 
                className="px-4 py-3 flex justify-between items-center border-b border-gray-100" 
                onClick={() => toggleMobileSubmenu("shop")}
              >
                <span className="font-medium">Shop</span>
                <span>{mobileSubmenu === "shop" ? "-" : "+"}</span>
              </div>
              
              {mobileSubmenu === "shop" && (
                <div className="bg-gray-50 py-2 px-6">
                  <h3 className="font-bold text-sm mb-2">Bike Racks</h3>
                  <ul className="space-y-2 mb-4">
                    <li><a href="#" className="block text-sm py-1">ProFlex Range</a></li>
                    <li><a href="#" className="block text-sm py-1">Classic Range</a></li>
                    <li><a href="/collections/proflex-range" className="block text-sm py-1 font-medium">Shop All</a></li>
                  </ul>
                  
                  <h3 className="font-bold text-sm mb-2">Storage Systems</h3>
                  <ul className="space-y-2 mb-4">
                    <li><a href="#" className="block text-sm py-1">GearMate Bundle</a></li>
                    <li><a href="#" className="block text-sm py-1">GearMate SteadySpine</a></li>
                    <li><a href="#" className="block text-sm py-1 font-medium">Shop All</a></li>
                  </ul>
                  
                  <h3 className="font-bold text-sm mb-2">Accessories</h3>
                  <ul className="space-y-2 mb-4">
                    <li><a href="#" className="block text-sm py-1">End Caps</a></li>
                    <li><a href="#" className="block text-sm py-1">D Lock and Cable</a></li>
                    <li><a href="#" className="block text-sm py-1">Lock Bracket</a></li>
                    <li><a href="#" className="block text-sm py-1">Spare Parts</a></li>
                    <li><a href="#" className="block text-sm py-1 font-medium">Shop All</a></li>
                  </ul>
                  
                  <div className="w-full h-48 relative text-white mb-2">
                    <img 
                      src={Shop6Img} 
                      alt="A New Era of SteadyRack" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2">
                      <h2 className="text-lg font-bold">A New Era of Steadyrack</h2>
                      <p className="text-sm">ProFlex & GearMate</p>
                      <button className="mt-1 bg-white text-black px-3 py-1 text-xs font-bold">EXPLORE</button>
                    </div>
                  </div>
                </div>
              )}
            </li>
            
            {/* Mobile Solutions */}
            <li>
              <div 
                className="px-4 py-3 flex justify-between items-center border-b border-gray-100"
                onClick={() => toggleMobileSubmenu("solutions")}
              >
                <span className="font-medium">Solutions</span>
                <span>{mobileSubmenu === "solutions" ? "-" : "+"}</span>
              </div>
              
              {mobileSubmenu === "solutions" && (
                <div className="bg-gray-50 py-2 px-6">
                  <h3 className="font-bold text-sm mb-2">Our Solutions</h3>
                  <ul className="space-y-2 mb-4">
                    <li><a href="#" className="block text-sm py-1">Personal Bike Storage</a></li>
                    <li><a href="#" className="block text-sm py-1">Home Indoor</a></li>
                    <li><a href="#" className="block text-sm py-1">Small Space</a></li>
                    <li><a href="#" className="block text-sm py-1">Garage</a></li>
                    <li><a href="#" className="block text-sm py-1">Multirack</a></li>
                  </ul>
                  
                  <div className="w-full h-48 relative text-white mb-2">
                    <img 
                      src={Solution2Img} 
                      alt="Personal Bike Storage" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-2 left-2">
                      <h2 className="text-lg font-bold">Personal Bike Storage</h2>
                      <button className="mt-1 bg-white text-black px-3 py-1 text-xs font-bold">SHOP NOW</button>
                    </div>
                  </div>
                </div>
              )}
            </li>
            
            {/* Mobile About */}
            <li>
              <div 
                className="px-4 py-3 flex justify-between items-center border-b border-gray-100"
                onClick={() => toggleMobileSubmenu("about")}
              >
                <span className="font-medium">About</span>
                <span>{mobileSubmenu === "about" ? "-" : "+"}</span>
              </div>
              
              {mobileSubmenu === "about" && (
                <div className="bg-gray-50 py-2 px-6">
                  <ul className="space-y-2">
                    {[
                      { name: "About Us", path: "/pages/the-steadyrack-story" },
                      { name: "Reviews", path: "/pages/steadyrack-bike-rack-reviews" },
                      { name: "Ambassadors", path: "/pages/steadyrack-ambassadors" },
                      { name: "Stories", path: "/blogs/stories" },
                      { name: "Gallery", path: "/pages/personal-gallery" },
                      { name: "Press", path: "/pages/press" },
                      { name: "Community Support", path: "/pages/charities-we-support" }
                    ].map((item) => (
                      <li key={item.name}>
                        <a href={item.path} className="block text-sm py-1">{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            
            {/* Mobile Commercial */}
            <li>
              <div 
                className="px-4 py-3 flex justify-between items-center border-b border-gray-100"
                onClick={() => toggleMobileSubmenu("commercial")}
              >
                <span className="font-medium">Commercial</span>
                <span>{mobileSubmenu === "commercial" ? "-" : "+"}</span>
              </div>
              
              {mobileSubmenu === "commercial" && (
                <div className="bg-gray-50 py-2 px-6">
                  <ul className="space-y-2">
                    {[
                      { name: "Commercial Bike Parking", path: "/pages/commercial-bike-parking" },
                      { name: "Indoor Bike Parking", path: "/pages/commercial-indoor-bike-parking" },
                      { name: "Design Files & Guidelines", path: "/pages/design-guidelines" },
                      { name: "Project Gallery", path: "/pages/project-gallery" },
                      { name: "Become A Dealer", path: "/pages/become-a-dealer" },
                      { name: "Commercial Enquiries", path: "/pages/commercial-enquiries" },
                      { name: "Request Revit Files", path: "/pages/revit-files" }
                    ].map((item) => (
                      <li key={item.name}>
                        <a href={item.path} className="block text-sm py-1">{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            
            {/* Mobile Support */}
            <li>
              <div 
                className="px-4 py-3 flex justify-between items-center border-b border-gray-100"
                onClick={() => toggleMobileSubmenu("support")}
              >
                <span className="font-medium">Support</span>
                <span>{mobileSubmenu === "support" ? "-" : "+"}</span>
              </div>
              
              {mobileSubmenu === "support" && (
                <div className="bg-gray-50 py-2 px-6">
                  <ul className="space-y-2">
                    {[
                      { name: "Need Help Choosing A Rack", path: "/pages/choosing-the-correct-bike-rack" },
                      { name: "Shipping", path: "/pages/shipping" },
                      { name: "FAQs", path: "/pages/faq" },
                      { name: "Installation", path: "/pages/installation-advice" },
                      { name: "Wall Placement Guide", path: "/pages/wall-placement-guide" }
                    ].map((item) => (
                      <li key={item.name}>
                        <a href={item.path} className="block text-sm py-1">{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            
            <li>
              <a href="/pages/customer-support" className="px-4 py-3 block border-b border-gray-100">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      {!mobileMenuOpen && activeMenu && (
        <div 
          className="mega-dropdown hidden md:block absolute w-full bg-white text-black h-auto md:h-[8cm] lg:h-[9cm] shadow-md transition-all duration-300 z-40"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {activeMenu === "justLanded" && (
            <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <h3 className="font-bold text-lg mb-2 md:mb-4">New Releases</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li><a href="#" className="block">ProFlex Range</a></li>
                  <li><a href="#" className="block">GearMate</a></li>
                  <li><a href="#" className="block">Behind The Scenes</a></li>
                  <li><a href="/collections/proflex-gearmate" className="block hover:text-gray-600">Shop All</a></li>
                </ul>
              </div>
      
              <div className="w-full md:w-3/4 md:pl-4 lg:pl-8 relative text-white">
                <div className="md:absolute md:right-0 w-full md:w-2/3 lg:w-[14cm] h-[6cm] md:h-[6cm] lg:h-[8cm]">
                  <img 
                    src={JustLandedImg} 
                    alt="ProFlex & GearMate" 
                    className="w-full h-full object-cover" 
                  />
      
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">ProFlex & GearMate</h2>
                    <p className="text-base md:text-lg">The Ultimate Duo</p>
                    <ButtonA text="SHOP NOW"/>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeMenu === "shop" && (
            <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <h3 className="font-bold text-lg mb-2">Bike Racks</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li><a href="/collections/proflex-range" className="block hover:text-gray-600">ProFlex Range</a></li>
                  <li><a href="/collections/classic-range" className="block hover:text-gray-600">Classic Range</a></li>
                  <li><a href="/collections/bike-racks" className="block hover:text-gray-600">Shop All</a></li>
                </ul>
              </div>
    
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <h3 className="font-bold text-lg mb-2">Storage Systems</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li><a href="/product/GearMate%20Bundle" className="block hover:text-gray-600">GearMate Bundle</a></li>
                  <li><a href="/product/GearMate%20SteadySpine" className="block hover:text-gray-600">GearMate SteadySpine</a></li>
                  <li><a href="/collections/gearmate-range" className="block hover:text-gray-600">Shop All</a></li>
                </ul>
              </div>
    
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <h3 className="font-bold text-lg mb-2">Accessories</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li><a href="/product/End%20Caps" className="block hover:text-gray-600">End Caps</a></li>
                  <li><a href="/product/Steadyrack%20D-Lock%20and%20Cable" className="block hover:text-gray-600">D Lock and Cable</a></li>
                  <li><a href="/product/Steadyrack%20Lock%20Bracket" className="block hover:text-gray-600">Lock Bracket</a></li>
                  <li><a href="/collections/all-spare-parts" className="block hover:text-gray-600">Spare Parts</a></li>
                  <li><a href="/collections/accessories" className="block hover:text-gray-600">Shop All</a></li>
                </ul>
              </div>
    
              <div className="w-full md:w-1/4 relative text-white">
                <div className="md:absolute md:right-0 w-full md:w-full lg:w-[14cm] h-[6cm] md:h-[6cm] lg:h-[8cm]">
                  <img 
                    src={Shop6Img} 
                    alt="A New Era of SteadyRack" 
                    className="w-full h-full object-cover"
                  />
    
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">A New Era of Steadyrack</h2>
                    <p className="text-base md:text-lg">ProFlex & GearMate</p>
                    <ButtonA text="EXPLORE"/>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeMenu === "solutions" && (
            <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <h3 className="font-bold text-lg mb-2 md:mb-4">Our Solutions</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li><a href="/pages/personal-bike-storage" className="block hover:text-gray-600">Personal Bike Storage</a></li>
                  <li><a href="/pages/personal-indoor-bike-rack-storage-solution" className="block hover:text-gray-600">Home Indoor</a></li>
                  <li><a href="/pages/bike-storage-for-a-small-space-or-balcony" className="block hover:text-gray-600">Small Space</a></li>
                  <li><a href="/pages/bike-racks-for-your-garage-how-to-save-space-with-steadyrack" className="block hover:text-gray-600">Garage</a></li>
                  <li><a href="/pages/multiple-bike-rack-storage" className="block hover:text-gray-600">Multirack</a></li>
                </ul>
              </div>
      
              <div className="w-full md:w-3/4 md:pl-4 lg:pl-8 relative text-white">
                <div className="md:absolute md:right-0 w-full md:w-2/3 lg:w-[14cm] h-[6cm] md:h-[6cm] lg:h-[8cm]">
                  <img 
                    src={Solution2Img} 
                    alt="Personal Bike Storage" 
                    className="w-full h-full object-cover" 
                  />
      
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Personal Bike Storage</h2>
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