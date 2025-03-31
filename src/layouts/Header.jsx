// import React, { useState, useEffect, useRef } from "react";
// import { UserIcon, MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
// import { useCart } from '../contexts/CartContext';
// import ButtonA from "../components/buttons/ButtonA";
// import LogoBlack from "../assets/Header/logo-black.png";
// import LogoWhite from "../assets/Header/logo-white.png";
// import JustLandedImg from "../assets/Header/GearMateWithRack_Accessories_1b29874c-f3c3-4796-affa-1e53db795747.png";
// import Shop6Img from "../assets/Header/Shop_6.png";
// import Solution2Img from "../assets/Header/Solutions_2.png";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const { openCart, itemsCount } = useCart();
//   const headerRef = useRef(null);
//   const [headerHeight, setHeaderHeight] = useState(0);
//   const aboutRef = useRef(null);
//   const commercialRef = useRef(null);
//   const supportRef = useRef(null);
//   const dropdownTimeoutRef = useRef(null); // Ref for the timeout


//   useEffect(() => {
//     const handleScroll = () => {
//       const bannerHeight = 82;
//       setIsScrolled(window.scrollY > bannerHeight);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (headerRef.current) {
//       setHeaderHeight(headerRef.current.offsetHeight);
//     }
//   }, []);

//   const isDarkColor = isScrolled || isHovered;
//   const isFixedPosition = isScrolled;

//   const getDropdownStyle = (ref) => {
//     if (!ref.current) return {};
//     const rect = ref.current.getBoundingClientRect();
//     return {
//       top: rect.bottom,
//       left: rect.left,
//     };
//   };

//     const handleMouseEnter = (menu) => {
//         clearTimeout(dropdownTimeoutRef.current); // Clear any existing timeout
//         setActiveMenu(menu);
//         setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//         dropdownTimeoutRef.current = setTimeout(() => {
//             setActiveMenu(null);
//             setIsHovered(false);
//         }, 100); // Short delay, adjust as needed
//     };

//   return (
//     <>
//       <header
//         ref={headerRef}
//         className={`w-full z-40 ${
//           isFixedPosition ? "fixed top-0" : "absolute top-[36px] md:top-[30px]"
//         } ${
//           isDarkColor ? "bg-white shadow-md text-black" : "bg-transparent text-white"
//         }`}
//         onMouseLeave={handleMouseLeave} // Moved onMouseLeave here
//       >
//         <div className="overflow-hidden transition-max-h duration-5000 ease-in-out">
//           <nav className="px-5 md:px-5 flex items-center justify-between md:grid md:grid-cols-3">

//             {/* Logo */}
//             <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start">
//               <img
//                 src={isDarkColor ? LogoBlack : LogoWhite}
//                 alt="Steadyrack"
//                 className="my-4 pr-5 w-[170px] h-[25px] object-contain cursor-pointer"
//                 onClick={() => window.location.href = "/"}
//               />
//             </div>

//             <ul className="hidden md:flex justify-center text-sm font-bold">
//               {/* Just Landed */}
//               <li className="px-3 py-4" onMouseEnter={() => handleMouseEnter("justLanded")}>
//                 <p className={`${activeMenu === "justLanded" ? "font-bold" : ""}`}>
//                   Just Landed
//                 </p>
//               </li>

//               {/* Shop */}
//               <li className="px-3 py-4" onMouseEnter={() => handleMouseEnter("shop")}>
//                 <p className={`${activeMenu === "shop" ? "font-bold" : ""}`}>
//                 Shop
//                 </p>
//               </li>

//               {/* Solutions */}
//               <li className="px-3 py-4" onMouseEnter={() => handleMouseEnter("solutions")}>
//                 <p className={`${activeMenu === "solutions" ? "font-bold" : ""}`}>
//                   Solutions
//                 </p>
//               </li>

//               {/* About */}
//               <li className="group px-3 py-4" ref={aboutRef} onMouseEnter={() => handleMouseEnter("about")}>
//                 <p>About</p>
//               </li>

//               {/* Commercial */}
//               <li className="group px-3 py-4" ref={commercialRef} onMouseEnter={() => handleMouseEnter("commercial")}>
//                 <p>Commercial</p>
//               </li>

//               {/* Support */}
//               <li className="group px-3 py-4" ref={supportRef} onMouseEnter={() => handleMouseEnter("support")}>
//                 <p>Support</p>
//               </li>
//             </ul>

//             {/* Header Right Icons */}
//             <div className="hidden md:flex items-center justify-end md:px-3 rounded-full transition-all duration-500">
//               <div className={`flex items-center md:px-3 rounded-full transition-all duration-500 ${
//                 isDarkColor ? "bg-[#0000001a] text-black" : "bg-transparent text-white "
//               } hover:bg-gray-300 hover:text-black mr-2`}>
//                 <MagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5" />
//                 <span className="px-2 py-1 font-semibold text-xs md:text-sm hidden lg:inline">Search</span>
//               </div>

//               <a href="/pages/customer-support" className={`hidden lg:block ${isDarkColor ? "text-black" : "text-white"} mr-2`}>
//                 <span className="text-sm px-3 py-0.5 font-semibold">Contact</span>
//               </a>

//               <a href="/login" className={`transition-all duration-500 ${isDarkColor ? "text-black" : "text-white"} mr-2`}>
//                 <UserIcon className="h-5 w-5 md:h-5 md:w-5" />
//               </a>

//               <button
//                 onClick={openCart}
//                 className="relative p-2 md:p-2"
//               >
//                 <ShoppingBagIcon className="h-5 w-5 md:h-5 md:w-5 font-bold" />
//                 {itemsCount > 0 && (
//                   <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-4 md:w-4 flex items-center justify-center">
//                     {itemsCount}
//                   </span>
//                 )}
//               </button>
//             </div>
//           </nav>

//           {/* Mega Menu */}
//           {isHovered && activeMenu && (
//             <div
//               className="mega-dropdown hidden md:block absolute w-full bg-white text-black h-auto md:h-[8cm] lg:h-[9cm] shadow-md transition-all duration-300 z-40"
//               style={{ top: `${headerHeight}px` }}
//               onMouseEnter={() => handleMouseEnter(activeMenu)} // Keep menu open on hover
//               onMouseLeave={handleMouseLeave} // Moved onMouseLeave here
//             >
//               {activeMenu === "justLanded" && (
//                 <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row">
//                   <div className="w-full md:w-1/4 mb-4 md:mb-0">
//                     <h3 className=" font-semibold text-lg mb-2">New Releases</h3>
//                     <ul className="space-y-1 md:space-y-2">
//                       <li><a href="/pages/proflex-ready-steady-pro" className="">ProFlex Range</a></li>
//                       <li><a href="/pages/gearmate-ready-to-ride" className="">GearMate</a></li>
//                       <li><a href="/pages/proflex-gearmate-behind-the-scenes" className="">Behind The Scenes</a></li>
//                       <li><a href="/collections/proflex-gearmate" className="">Shop All</a></li>
//                     </ul>
//                   </div>

//                   <div className="w-full md:w-3/4 md:pl-4 lg:pl-8 relative text-white">
//                     <div className="md:absolute md:right-0 w-full md:w-2/3 lg:w-[14cm] h-[6cm] md:h-[6cm] lg:h-[8cm]">
//                       <img
//                         src={JustLandedImg}
//                         alt="ProFlex & GearMate"
//                         className="w-full max-h-[285px] object-cover"
//                       />

//                       <div className="absolute bottom-2 md:bottom-10 left-5 md:left-4">
//                         <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2">ProFlex & GearMate</h2>
//                         <p className="text-base md:text-lg">The Ultimate Duo</p>
//                         <ButtonA 
//                         onClick={() => window.location.href = "/collections/proflex-gearmate"}
//                         text="SHOP NOW" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeMenu === "shop" && (
//                 <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row items-start gap-4 tracking-tight">
//                   <div className="w-full md:w-auto mr-6">
//                     <h3 className="font-semibold text-lg mb-2">Bike Racks</h3>
//                     <ul className="space-y-2">
//                       <li><a href="/collections/proflex-range">ProFlex Range</a></li>
//                       <li><a href="/collections/classic-range">Classic Range</a></li>
//                       <li><a href="/collections/bike-racks">Shop All</a></li>
//                     </ul>
//                   </div>

//                   <div className="w-full md:w-auto mr-6">
//                     <h3 className="font-semibold text-lg mb-2">Storage Systems</h3>
//                     <ul className="space-y-2">
//                       <li><a href="/product/GearMate%20Bundle">GearMate Bundle</a></li>
//                       <li><a href="/product/GearMate%20SteadySpine">GearMate SteadySpine</a></li>
//                       <li><a href="/collections/gearmate-range">Shop All</a></li>
//                     </ul>
//                   </div>

//                   <div className="w-full md:w-auto">
//                     <h3 className="font-semibold text-lg mb-2">Accessories</h3>
//                     <ul className="space-y-2">
//                       <li><a href="/product/End%20Caps">End Caps</a></li>
//                       <li><a href="/product/Steadyrack%20D-Lock%20and%20Cable">D Lock and Cable</a></li>
//                       <li><a href="/product/Steadyrack%20Lock%20Bracket">Lock Bracket</a></li>
//                       <li><a href="/collections/all-spare-parts">Spare Parts</a></li>
//                       <li><a href="/collections/accessories">Shop All</a></li>
//                     </ul>
//                   </div>

//                   <div className="w-full md:w-auto relative text-white ml-auto">
//                     <div className="md:absolute md:right-0 w-full md:w-full lg:w-[14cm] h-[6cm] md:h-[6cm] lg:h-[8cm]">
//                       <img
//                         src={Shop6Img}
//                         alt="A New Era of SteadyRack"
//                         className="w-full object-cover"
//                       />

//                       <div className="absolute bottom-2 md:bottom-10 left-2 md:left-4">
//                         <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">A New Era of Steadyrack</h2>
//                         <p className="text-base md:text-lg">ProFlex & GearMate</p>
//                         <ButtonA text="EXPLORE" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeMenu === "solutions" && (
//                 <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row">
//                   <div className="w-full md:w-1/4 mb-4 md:mb-0">
//                     <h3 className="font-semibold text-lg mb-2">Our Solutions</h3>
//                     <ul className="space-y-1 md:space-y-2">
//                       <li><a href="/pages/personal-bike-storage" className="">Personal Bike Storage</a></li>
//                       <li><a href="/pages/personal-indoor-bike-rack-storage-solution" className="block">Home Indoor</a></li>
//                       <li><a href="/pages/bike-storage-for-a-small-space-or-balcony" className="block">Small Space</a></li>
//                       <li><a href="/pages/bike-racks-for-your-garage-how-to-save-space-with-steadyrack" className="block">Garage</a></li>
//                       <li><a href="/pages/multiple-bike-rack-storage" className="block">Multirack</a></li>
//                     </ul>
//                   </div>

//                   <div className="w-full md:w-3/4 md:pl-4 lg:pl-8 relative text-white">
//                     <div className="md:absolute md:right-0 w-full md:w-2/3 lg:w-[14cm] h-[6cm] md:h-[6cm] lg:h-[8cm]">
//                       <img
//                         src={Solution2Img}
//                         alt="Personal Bike Storage"
//                         className="w-full object-cover"
//                       />

//                       <div className="absolute bottom-2 md:bottom-10 left-2 md:left-4">
//                         <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2">Personal Bike Storage</h2>
//                         <ButtonA text="SHOP NOW" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {activeMenu === "about" && (
//                 <div className="absolute bg-white text-black shadow-md z-50 w-56" style={getDropdownStyle(aboutRef)}>
//                   {[
//                     { name: "About Us", path: "/pages/the-steadyrack-story" },
//                     { name: "Reviews", path: "/pages/steadyrack-bike-rack-reviews" },
//                     { name: "Ambassadors", path: "/pages/steadyrack-ambassadors" },
//                     { name: "Stories", path: "/blogs/stories" },
//                     { name: "Gallery", path: "/pages/personal-gallery" },
//                     { name: "Press", path: "/pages/press" },
//                     { name: "Community Support", path: "/pages/charities-we-support" }
//                   ].map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.path}
//                       className="block px-4 py-2 hover:bg-gray-100"

//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               )}
//               {activeMenu === "commercial" && (
//                 <div className="absolute bg-white text-black shadow-md z-50 w-56" style={getDropdownStyle(commercialRef)}>
//                   {[
//                     { name: "Commercial Bike Parking", path: "/pages/commercial-bike-parking" },
//                     { name: "Indoor Bike Parking", path: "/pages/commercial-indoor-bike-parking" },
//                     { name: "Design Files & Guidelines", path: "/pages/design-guidelines" },
//                     { name: "Project Gallery", path: "/pages/project-gallery" },
//                     { name: "Become A Dealer", path: "/pages/become-a-dealer" },
//                     { name: "Commercial Enquiries", path: "/pages/commercial-enquiries" },
//                     { name: "Request Revit Files", path: "/pages/revit-files" }
//                   ].map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.path}
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               )}
//               {activeMenu === "support" && (
//                 <div className="absolute bg-white text-black shadow-md z-50 w-56" style={getDropdownStyle(supportRef)}>
//                   {[
//                     { name: "Need Help Choosing A Rack", path: "/pages/choosing-the-correct-bike-rack" },
//                     { name: "Shipping", path: "/pages/shipping" },
//                     { name: "FAQs", path: "/pages/faq" },
//                     { name: "Installation", path: "/pages/installation-advice" },
//                     { name: "Wall Placement Guide", path: "/pages/wall-placement-guide" }
//                   ].map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.path}
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </header>
//       {isFixedPosition && (
//         <div style={{ paddingTop: headerHeight }} />
//       )}
//     </>
//   );
// };

// export default Header;


import React, { useState, useEffect, useRef } from "react";
import { UserIcon, MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
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
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const aboutRef = useRef(null);
  const commercialRef = useRef(null);
  const supportRef = useRef(null);
  const dropdownTimeoutRef = useRef(null); // Ref for the timeout

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 82;
      setIsScrolled(window.scrollY > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // Combine isScrolled and isHovered for background and text color
  const isDarkColor = isScrolled || isHovered;
  const isFixedPosition = isScrolled;

  const getDropdownStyle = (ref) => {
    if (!ref.current) return {};
    const rect = ref.current.getBoundingClientRect();
    return {
      top: rect.bottom,
      left: rect.left,
    };
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(dropdownTimeoutRef.current); // Clear any existing timeout
    setActiveMenu(menu);
    setIsHovered(true); // Set isHovered to true
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setIsHovered(false); // Set isHovered to false
    }, 100); // Short delay, adjust as needed
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`w-full z-40 ${
          isFixedPosition ? "fixed top-0" : "absolute top-[36px] md:top-[30px]"
        } ${
          isDarkColor ? "bg-white shadow-md text-black" : "bg-transparent text-white"
        }`}
        onMouseEnter={() => setIsHovered(true)} // Apply hover effect on header
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden transition-max-h duration-5000 ease-in-out">
          <nav className="px-5 md:px-5 flex items-center justify-between md:grid md:grid-cols-3">

            {/* Logo */}
            <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start">
              <img
                src={isDarkColor ? LogoBlack : LogoWhite}
                alt="Steadyrack"
                className="my-4 pr-5 w-[170px] h-[25px] object-contain cursor-pointer"
                onClick={() => window.location.href = "/"}
              />
            </div>

            <ul className="hidden md:flex justify-center text-sm font-bold">
              {/* Just Landed */}
              <li className="px-3 py-4" onMouseEnter={() => handleMouseEnter("justLanded")}>
                <p className={`${activeMenu === "justLanded" ? "font-bold" : ""}`}>
                  Just Landed
                </p>
              </li>

              {/* Shop */}
              <li className="px-3 py-4" onMouseEnter={() => handleMouseEnter("shop")}>
                <p className={`${activeMenu === "shop" ? "font-bold" : ""}`}>
                  Shop
                </p>
              </li>

              {/* Solutions */}
              <li className="px-3 py-4" onMouseEnter={() => handleMouseEnter("solutions")}>
                <p className={`${activeMenu === "solutions" ? "font-bold" : ""}`}>
                  Solutions
                </p>
              </li>

              {/* About */}
              <li className="group px-3 py-4" ref={aboutRef} onMouseEnter={() => handleMouseEnter("about")}>
                <p>About</p>
              </li>

              {/* Commercial */}
              <li className="group px-3 py-4" ref={commercialRef} onMouseEnter={() => handleMouseEnter("commercial")}>
                <p>Commercial</p>
              </li>

              {/* Support */}
              <li className="group px-3 py-4" ref={supportRef} onMouseEnter={() => handleMouseEnter("support")}>
                <p>Support</p>
              </li>
            </ul>

            {/* Header Right Icons */}
            <div className="hidden md:flex items-center justify-end md:px-3 rounded-full transition-all duration-500">
              <div className={`flex items-center md:px-3 rounded-full transition-all duration-500 ${
                isDarkColor ? "bg-[#0000001a] text-black" : "bg-transparent text-white "
              } hover:bg-gray-300 hover:text-black mr-2`}>
                <MagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5" />
                <span className="px-2 py-1 font-semibold text-xs md:text-sm hidden lg:inline">Search</span>
              </div>

              <a href="/pages/customer-support" className={`hidden lg:block ${isDarkColor ? "text-black" : "text-white"} mr-2`}>
                <span className="text-sm px-3 py-0.5 font-semibold">Contact</span>
              </a>

              <a href="/login" className={`transition-all duration-500 ${isDarkColor ? "text-black" : "text-white"} mr-2`}>
                <UserIcon className="h-5 w-5 md:h-5 md:w-5" />
              </a>

              <button
                onClick={openCart}
                className="relative p-2 md:p-2"
              >
                <ShoppingBagIcon className="h-5 w-5 md:h-5 md:w-5 font-bold" />
                {itemsCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-4 md:w-4 flex items-center justify-center">
                    {itemsCount}
                  </span>
                )}
              </button>
            </div>
          </nav>

          {/* Mega Menu */}
          {isHovered && activeMenu && (
            <div
              className="mega-dropdown hidden md:block absolute w-full bg-white text-black h-auto md:h-[8cm] lg:h-[9cm] shadow-md transition-all duration-300 z-40"
              style={{ top: `${headerHeight}px` }}
              onMouseEnter={() => handleMouseEnter(activeMenu)} // Keep menu open on hover
              onMouseLeave={handleMouseLeave}
            >
              {activeMenu === "justLanded" && (
                <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className=" font-semibold text-lg mb-2">New Releases</h3>
                    <ul className="space-y-1 md:space-y-2">
                      <li><a href="/pages/proflex-ready-steady-pro" className="">ProFlex Range</a></li>
                      <li><a href="/pages/gearmate-ready-to-ride" className="">GearMate</a></li>
                      <li><a href="/pages/proflex-gearmate-behind-the-scenes" className="">Behind The Scenes</a></li>
                      <li><a href="/collections/proflex-gearmate" className="">Shop All</a></li>
                    </ul>
                  </div>

                  <div className="w-full md:w-3/4 md:pl-4 lg:pl-8 relative text-white">
                    <div className="md:absolute md:right-0 w-full md:w-2/3 lg:w-[14cm] h-[6cm] md:h-[6cm] lg:h-[8cm]">
                      <img
                        src={JustLandedImg}
                        alt="ProFlex & GearMate"
                        className="w-full max-h-[285px] object-cover"
                      />

                      <div className="absolute bottom-2 md:bottom-10 left-5 md:left-4">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2">ProFlex & GearMate</h2>
                        <p className="text-base md:text-lg">The Ultimate Duo</p>
                        <ButtonA
                        onClick={() => window.location.href = "/collections/proflex-gearmate"}
                        text="SHOP NOW" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeMenu === "shop" && (
                <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row items-start gap-4 tracking-tight">
                  <div className="w-full md:w-auto mr-6">
                    <h3 className="font-semibold text-lg mb-2">Bike Racks</h3>
                    <ul className="space-y-2">
                      <li><a href="/collections/proflex-range">ProFlex Range</a></li>
                      <li><a href="/collections/classic-range">Classic Range</a></li>
                      <li><a href="/collections/bike-racks">Shop All</a></li>
                    </ul>
                  </div>

                  <div className="w-full md:w-auto mr-6">
                    <h3 className="font-semibold text-lg mb-2">Storage Systems</h3>
                    <ul className="space-y-2">
                      <li><a href="/product/GearMate%20Bundle">GearMate Bundle</a></li>
                      <li><a href="/product/GearMate%20SteadySpine">GearMate SteadySpine</a></li>
                      <li><a href="/collections/gearmate-range">Shop All</a></li>
                    </ul>
                  </div>

                  <div className="w-full md:w-auto">
                    <h3 className="font-semibold text-lg mb-2">Accessories</h3>
                    <ul className="space-y-2">
                      <li><a href="/product/End%20Caps">End Caps</a></li>
                      <li><a href="/product/Steadyrack%20D-Lock%20and%20Cable">D Lock and Cable</a></li>
                      <li><a href="/product/Steadyrack%20Lock%20Bracket">Lock Bracket</a></li>
                      <li><a href="/collections/all-spare-parts">Spare Parts</a></li>
                      <li><a href="/collections/accessories">Shop All</a></li>
                    </ul>
                  </div>

                  <div className="w-full md:w-auto relative text-white ml-auto">
                    <div className="md:absolute md:right-0 w-full md:w-full lg:w-[14cm] h-[6cm] md:h-[6cm] lg:h-[8cm]">
                      <img
                        src={Shop6Img}
                        alt="A New Era of SteadyRack"
                        className="w-full object-cover"
                      />

                      <div className="absolute bottom-2 md:bottom-10 left-2 md:left-4">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">A New Era of Steadyrack</h2>
                        <p className="text-base md:text-lg">ProFlex & GearMate</p>
                        <ButtonA text="EXPLORE" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeMenu === "solutions" && (
                <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="font-semibold text-lg mb-2">Our Solutions</h3>
                    <ul className="space-y-1 md:space-y-2">
                      <li><a href="/pages/personal-bike-storage" className="">Personal Bike Storage</a></li>
                      <li><a href="/pages/personal-indoor-bike-rack-storage-solution" className="block">Home Indoor</a></li>
                      <li><a href="/pages/bike-storage-for-a-small-space-or-balcony" className="block">Small Space</a></li>
                      <li><a href="/pages/bike-racks-for-your-garage-how-to-save-space-with-steadyrack" className="block">Garage</a></li>
                      <li><a href="/pages/multiple-bike-rack-storage" className="block">Multirack</a></li>
                    </ul>
                  </div>

                  <div className="w-full md:w-3/4 md:pl-4 lg:pl-8 relative text-white">
                    <div className="md:absolute md:right-0 w-full md:w-2/3 lg:w-[14cm] h-[6cm] md:h-[6cm] lg:h-[8cm]">
                      <img
                        src={Solution2Img}
                        alt="Personal Bike Storage"
                        className="w-full object-cover"
                      />

                      <div className="absolute bottom-2 md:bottom-10 left-2 md:left-4">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2">Personal Bike Storage</h2>
                        <ButtonA text="SHOP NOW" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeMenu === "about" && (
                <div className="absolute bg-white text-black shadow-md z-50 w-56" style={getDropdownStyle(aboutRef)}>
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
              )}
              {activeMenu === "commercial" && (
                <div className="absolute bg-white text-black shadow-md z-50 w-56" style={getDropdownStyle(commercialRef)}>
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
              )}
              {activeMenu === "support" && (
                <div className="absolute bg-white text-black shadow-md z-50 w-56" style={getDropdownStyle(supportRef)}>
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
              )}
            </div>
          )}
        </div>
      </header>
      {isFixedPosition && (
        <div style={{ paddingTop: headerHeight }} />
      )}
    </>
  );
};

export default Header;
