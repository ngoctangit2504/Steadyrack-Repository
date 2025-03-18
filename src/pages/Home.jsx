import React from "react";
import videoHead from "../assets/videos/Introducing-the-new-ProFlex-Bike-Rack2.mp4";
import VideoBody from "../assets/videos/Introducing the new ProFlex Bike Rack6.mp4";
import BackroundFind from "../assets/Choosing_right_rack_Home_page_2160_x_1440_px.png";
import BackroundAbout from "../assets/NEW_Home_Page_About_Us_Desktop_1.png";
import Frame188Img from "../assets/Frame_188.png";
import ButtonA from "../components/buttons/ButtonA";
import ButtonB from "../components/buttons/ButtonB";
import ButtonC from "../components/buttons/ButtonC";
import FeaturedProducts from "../components/featured products/FeaturedProduct";
import TolstoyCarousel from "../components/carousel/TolstoyCarousel";
import BrandCarousel from "../components/carousel/BrandsCarousel";
import ShopByStyle from "../components/shop by style/ShopByStyle";
import ReviewCarousel from "../components/carousel/ReviewsCrousel";
import SteadyrackAmbassador from "../components/steadyrack ambassadors/SteadyrackAmbassadors";
import BlogCarousel from "../components/carousel/BlogCarousel";
import VideoOverlay from "../components/videoComponent/VideoOverlay";

const Home = () => {

return (

 <div>

    <div className="relative w-full h-screen">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={videoHead} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 mb-6">
          The Future of Bike Storage is Here.
        </h1>
        
        <div className="flex space-x-4">
          <ButtonA text="DISCOVER PROFLEX" onClick={() => alert("Clicked Proflex")} />
          <ButtonB text="DISCOVER GEARMATE" onClick={() => alert("Clicked GearMate")} />
        </div>
      </div>
    </div>
  
    <div className="flex justify-center items-center h-64 bg-white">
  <h1 className="text-[10rem] leading-none uppercase italic tracking-wide skew-x-10 font-zuume whitespace-nowrap">
    READY, STEADY, PRO.
  </h1>
</div>

    <FeaturedProducts/>

    
    <VideoOverlay videoSrc={VideoBody} title="The Evolution of a Revolution"/>


    <TolstoyCarousel/>


    <div className="relative w-full h-[80vh] flex items-center px-10 md:px-20"
      style={{
      backgroundImage: `url(${BackroundAbout})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}> 
  <div className="relative z-10 max-w-2xl text-white">
    <h1 className="text-xl md:text-6xl leading-tight">
      We're Innovators, Not Imitators.
    </h1>
    <p className="mt-2 mb-6 text-base text-white">
      Since 2009, Steadyrack has led the way in bike storage globally. Now, 
      for the first time in history, we're redefining bike storage once again. 
      Welcome to the next era of Steadyrack.
    </p>
    <ButtonA text="ABOUT US" />
  </div>
</div>


    <hr class="h-px my-8 mx-6 bg-gray-300 border-0 dark:bg-gray-700"/>

    <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Innovation, Redefined.</h2>
      <p className="max-w-2xl text-black font-medium mb-4">
        ProFlex and GearMate are the ultimate storage duo. While the ProFlex is designed to safely 
        and securely store your bike, the GearMate lets you store the rest, including gloves, shoes, 
        helmets, gels, and more.
      </p>
      <p className="max-w-3xl text-black font-medium mb-6">
        Featuring a new modern design, increased load capacity, pivot function, and SteadySaddle 
        for bikes with fenders and mudguards, the ProFlex is the future of bike storage. Designed to 
        seamlessly work with all Steadyrack bike racks, the GearMate can be customized over 200 
        ways to suit your needs and is the perfect companion to your ProFlex.
      </p>
      <div className="flex flex-wrap gap-4">
        <ButtonC text="EXPLORE PROFLEX"/>
        <ButtonC text="EXPLORE GEARMATE"/>
      </div>
    </div>


     {/*Find Your Perfect Rack */}
    <div className="relative w-full h-screen flex flex-col justify-start items-center text-center px-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackroundFind})`,
        }}>
      </div>
      <div className="relative z-10 flex flex-col items-center text-white mt-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          Find Your Perfect Rack
        </h1>
        <p className="text-lg pb-8 md:text-xl mt-3">
          ProFlex Range or Classic Range? We've got you covered.
        </p>
        <ButtonA text="LEARN MORE"/>
      </div>
    </div>

    <BrandCarousel/>

    <ShopByStyle/>

    <ReviewCarousel/>

    <div className="flex flex-col md:flex-row w-full h-[200px] md:h-[300px] mb-20 mt-10">
      
      <div className="relative w-full md:w-1/2">
       <img src={Frame188Img} alt="Get 10% Off" className="w-full h-full object-cover"/>
        <div className="absolute top-4 left-4 text-white px-4 py-2 rounded-md text-3xl font-bold">
           Get 10% Off
        </div>
    </div>

<div className="w-full md:w-1/2 bg-black text-white p-6 flex flex-col justify-center h-full">
  <h2 className="text-xl">Join our community today.</h2>
  <p className="text-lg text-gray-500">
    10% off first order. Be the first to hear the latest products news, VIP offers, and sales!
  </p>

  <div className="mt-2 flex gap-2">
    <input
      type="email"
      placeholder="YOUR EMAIL"
      className="flex-1 px-4 py-3 bg-black text-white border border-white rounded-full outline-none placeholder-white"
    />
    <ButtonA text="SUBSCRIBE" className="px-6 py-3 bg-white text-black rounded-full" />
  </div>

  <p className="mt-2 text-gray-500 text-sm">
    By submitting this form and signing up for texts, you consent to{" "}
    <a href="#" className="underline text-white">
      Terms & Conditions
    </a>
  </p>
</div>
    </div>

    <BlogCarousel/>  
    
    <SteadyrackAmbassador records={4}/>

    </div>
  );
};

export default Home;