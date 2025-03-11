import React from "react";
import videoSrc from "../assets/videos/Introducing-the-new-ProFlex-Bike-Rack2.mp4";
import ButtonA from "../components/buttons/ButtonA";
import ButtonB from "../components/buttons/ButtonB";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={videoSrc} type="video/mp4" />
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
  );
};

export default Home;