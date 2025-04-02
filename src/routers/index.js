import React from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home.jsx";

import LoginCard from "../pages/login/Login.jsx";

import Contact from "../pages/Contact";
import Return from "../pages/Return";
import StandardWarranty from "../pages/StandardWarranty";
import HelpCenter from "../pages/HelpCenter.jsx"

import AboutUs from "../pages/about/AboutUs.jsx";
import Reviews from "../pages/about/Reviews.jsx";
import Ambassadors from "../pages/about/Ambassadors.jsx";
import Stories from "../pages/about/Stories.jsx";
import Gallery from "../pages/about/Gallery.jsx";
import Press from "../pages/about/Press.jsx";
import CommunitySupport from "../pages/about/CommunitySupport.jsx";

import TermsConditions from "../pages/Terms&Conditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CookiesPolicy from "../pages/CookiesPolicy";

import CommercialBikeParking from "../pages/commercial/CommercialBikeParking.jsx";
import IndoorBikeParking from "../pages/commercial/IndoorBikeParking.jsx";
import DesignFilesGuidelines from "../pages/commercial/DesignFilesGuidelines.jsx";
import ProjectGallery from "../pages/commercial/ProjectGallery.jsx";
import BecomeADealer from "../pages/commercial/BecomeADealer.jsx";
import CommercialEnquiries from "../pages/commercial/CommercialEnquiries.jsx";
import RequestRevitFiles from "../pages/commercial/RequestRevitFiles.jsx";

import NeedHelp from "../pages/support/NeedHelp.jsx";
import Shipping from "../pages/support/Shipping.jsx";
import Faq from "../pages/support/Faq.jsx";
import Installation from "../pages/support/Installation.jsx";
import WallPlacementGuide from "../pages/support/WallPlacementGuide.jsx";


import AllProduct from "../pages/shop/AllProduct";
import AllBikeRack from "../pages/shop/AllBikeRack";
import AllGearMaster from "../pages/shop/AllGearMaster";
import AllSpareParts from "../pages/shop/AllSparePart";
import AllAccessories from "../pages/shop/AllAccessories";
import ProflexRanger from "../pages/shop/ProflexRanger";
import ClassicRange from "../pages/shop/ClassicRange";

import ProductDetailPage from "../pages/products/ProductDetail";

import JustLandedShopAll from "../pages/JustLanded/ShopAll.jsx";
import JustLanderProflexRanger from "../pages/JustLanded/ProflexRanger.jsx";
import JustLanderGearMate from "../pages/JustLanded/GearMate.jsx";
import JustLanderBehindTheScenes from "../pages/JustLanded/BehindTheScenes.jsx";
import JustLanderGearMateClassicRange from "../pages/JustLanded/GearMate&ClassicRange.jsx";

import PersonalBikeStorage from "../pages/Solutions/PersonalBikeStorage.jsx";
import HomeIndoor from "../pages/Solutions/HomeIndoor";
import SmallSpace from "../pages/Solutions/SmallSpace";
import Garage from "../pages/Solutions/Garage";
import Multirack from "../pages/Solutions/Multirack";



const routes = [
  { path: "/", element: <MainLayout><Home/></MainLayout> },

  { path: "/login", element:<LoginCard/> },

  { path: "/pages/customer-support", element: <MainLayout><Contact/></MainLayout> },
  { path: "/pages/returns", element: <MainLayout><Return/></MainLayout> },
  { path: "/pages/standard-warranty", element: <MainLayout><StandardWarranty/></MainLayout> },

  { path: "/pages/the-steadyrack-story", element: <MainLayout><AboutUs/></MainLayout> },
  { path: "/pages/steadyrack-bike-rack-reviews", element: <MainLayout><Reviews/></MainLayout> },
  { path: "/pages/steadyrack-ambassadors", element: <MainLayout><Ambassadors/></MainLayout> },
  { path: "/blogs/stories", element: <MainLayout><Stories/></MainLayout> },
  { path: "/pages/personal-gallery", element: <MainLayout><Gallery/></MainLayout> },
  { path: "/pages/press", element: <MainLayout><Press/></MainLayout> },
  { path: "/pages/charities-we-support", element: <MainLayout><CommunitySupport/></MainLayout> },

  { path: "/policies/terms-of-service", element: <MainLayout><TermsConditions/></MainLayout> },
  { path: "/policies/privacy-policy", element: <MainLayout><PrivacyPolicy/></MainLayout> },
  { path: "/policies/privacy-policy", element: <MainLayout><CookiesPolicy/></MainLayout> },

  { path: "/pages/commercial-bike-parking", element: <MainLayout><CommercialBikeParking/></MainLayout> },
  { path: "/pages/commercial-indoor-bike-parking", element: <MainLayout><IndoorBikeParking/></MainLayout> },
  { path: "/pages/design-guidelines", element: <MainLayout><DesignFilesGuidelines/></MainLayout> },
  { path: "/pages/project-gallery", element: <MainLayout><ProjectGallery/></MainLayout> },
  { path: "/pages/become-a-dealer", element: <MainLayout><BecomeADealer/></MainLayout> },
  { path: "/pages/commercial-enquiries", element: <MainLayout><CommercialEnquiries/></MainLayout> },
  { path: "/pages/revit-files", element: <MainLayout><RequestRevitFiles/></MainLayout> },

  { path: "/pages/choosing-the-correct-bike-rack", element: <MainLayout><NeedHelp/></MainLayout> },
  { path: "/pages/shipping", element: <MainLayout><Shipping/></MainLayout> },
  { path: "/pages/faq", element: <MainLayout><Faq/></MainLayout> },
  { path: "/pages/installation-advice", element: <MainLayout><Installation/></MainLayout> },
  { path: "/pages/wall-placement-guide", element: <MainLayout><WallPlacementGuide/></MainLayout> },

  { path: "/pages/proflex-ready-steady-pro", element: <JustLanderProflexRanger/> },
  { path: "/pages/gearmate-ready-to-ride", element: <JustLanderGearMate/> },
  { path: "/pages/proflex-gearmate-behind-the-scenes", element: <MainLayout><JustLanderBehindTheScenes/></MainLayout>},
  { path: "/pages/gearmate-and-classic-range", element: <MainLayout><JustLanderGearMateClassicRange/></MainLayout>},

  { path: "/pages/personal-bike-storage", element: <MainLayout><PersonalBikeStorage/></MainLayout>},
  { path: "/pages/personal-indoor-bike-rack-storage-solution", element: <MainLayout><HomeIndoor/></MainLayout>},
  { path: "/pages/bike-storage-for-a-small-space-or-balcony", element: <MainLayout><SmallSpace/></MainLayout>},
  { path: "/pages/bike-racks-for-your-garage-how-to-save-space-with-steadyrack", element: <MainLayout><Garage/></MainLayout>},
  { path: "/pages/multiple-bike-rack-storage", element: <MainLayout><Multirack/></MainLayout>},


  { path: "/collections/all", element: <MainLayout><AllProduct/></MainLayout> },
  { path: "/collections/bike-racks", element: <MainLayout><AllBikeRack/></MainLayout> },
  { path: "/collections/gearmate-range", element: <MainLayout><AllGearMaster/></MainLayout> },
  { path: "/collections/all-spare-parts", element: <MainLayout><AllSpareParts/></MainLayout> },
  { path: "/collections/accessories", element: <MainLayout><AllAccessories/></MainLayout> },
  { path: "/collections/proflex-range", element: <MainLayout><ProflexRanger/></MainLayout> },
  { path: "/collections/classic-range", element: <MainLayout><ClassicRange/></MainLayout> },


  { path: "/collections/proflex-gearmate", element: <MainLayout><JustLandedShopAll/></MainLayout> },

  { path: "/product/:productName", element: <MainLayout><ProductDetailPage/></MainLayout> },

];

export default routes;