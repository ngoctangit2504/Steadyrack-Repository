import React from "react";
import videoHead from "../assets/videos/Introducing-the-new-ProFlex-Bike-Rack2.mp4";
import VideoBody from "../assets/videos/Bike Storage_ Steadyrack s Journey with Founder Dave _ Hang Your.mp4";
import BackroundFind from "../assets/Choosing_right_rack_Home_page_2160_x_1440_px.png";
import BackroundAbout from "../assets/NEW_Home_Page_About_Us_Desktop_1.png";
import Frame188Img from "../assets/Frame_188.png";
import ButtonA from "../components/buttons/ButtonA";
import FeaturedProducts from "../components/featured products/FeaturedProduct";
import TolstoyCarousel from "../components/carousel/TolstoyCarousel";
import BrandCarousel from "../components/carousel/BrandsCarousel";
import ShopByStyle from "../components/shop by style/ShopByStyle";
import ReviewCarousel from "../components/carousel/ReviewsCrousel";
import SteadyrackAmbassador from "../components/steadyrack ambassadors/SteadyrackAmbassadors";
import BlogCarousel from "../components/carousel/BlogCarousel";
import VideoOverlay from "../components/videoComponent/VideoOverlay";

const Home = () => {
  const videoData = [
    {
      id: "video1",
      src: "https://cdn.shopify.com/videos/c/vp/fa1c201640bf41188b77759a868dfa09/fa1c201640bf41188b77759a868dfa09.HD-720p-4.5Mbps-42746174.mp4",
      poster:
        "https://cdn.shopify.com/s/files/1/0356/6727/9917/files/preview_images/fa1c201640bf41188b77759a868dfa09.thumbnail.0000000000.jpg?v=1739786281&width=960&height=540",
    },
    {
      id: "video2",
      src: "https://cdn.shopify.com/videos/c/vp/6914e6c3c7614cfc9c2c36524d16671d/6914e6c3c7614cfc9c2c36524d16671d.HD-720p-3.0Mbps-42746066.mp4",
      poster:
        "https://cdn.shopify.com/s/files/1/0356/6727/9917/files/preview_images/6914e6c3c7614cfc9c2c36524d16671d.thumbnail.0000000000.jpg?v=1739786146&width=960&height=540",
    },
    {
      id: "video3",
      src: "https://cdn.shopify.com/videos/c/vp/b5cb8768d659466a9afd46793648382b/b5cb8768d659466a9afd46793648382b.HD-720p-4.5Mbps-42746119.mp4",
      poster:
        "https://cdn.shopify.com/s/files/1/0356/6727/9917/files/preview_images/b5cb8768d659466a9afd46793648382b.thumbnail.0000000000.jpg?v=1739786222&width=960&height=540",
    },
    {
      id: "video4",
      src: "https://cdn.shopify.com/videos/c/vp/9058b7c7642d450094d5de69da1c5111/9058b7c7642d450094d5de69da1c5111.HD-720p-4.5Mbps-42745460.mp4",
      poster:
        "https://cdn.shopify.com/s/files/1/0356/6727/9917/files/preview_images/9058b7c7642d450094d5de69da1c5111.thumbnail.0000000000.jpg?v=1739785603&width=960&height=540",
    },
    {
      id: "video2",
      src: "https://cdn.shopify.com/videos/c/vp/6914e6c3c7614cfc9c2c36524d16671d/6914e6c3c7614cfc9c2c36524d16671d.HD-720p-3.0Mbps-42746066.mp4",
      poster:
        "https://cdn.shopify.com/s/files/1/0356/6727/9917/files/preview_images/6914e6c3c7614cfc9c2c36524d16671d.thumbnail.0000000000.jpg?v=1739786146&width=960&height=540",
    },
    {
      id: "video3",
      src: "https://cdn.shopify.com/videos/c/vp/b5cb8768d659466a9afd46793648382b/b5cb8768d659466a9afd46793648382b.HD-720p-4.5Mbps-42746119.mp4",
      poster:
        "https://cdn.shopify.com/s/files/1/0356/6727/9917/files/preview_images/b5cb8768d659466a9afd46793648382b.thumbnail.0000000000.jpg?v=1739786222&width=960&height=540",
    },
    {
      id: "video4",
      src: "https://cdn.shopify.com/videos/c/vp/9058b7c7642d450094d5de69da1c5111/9058b7c7642d450094d5de69da1c5111.HD-720p-4.5Mbps-42745460.mp4",
      poster:
        "https://cdn.shopify.com/s/files/1/0356/6727/9917/files/preview_images/9058b7c7642d450094d5de69da1c5111.thumbnail.0000000000.jpg?v=1739785603&width=960&height=540",
    },
  ];

  return (
    <div>
      <div data-aos="fade-up" className="relative w-full h-[772px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-[772px] object-cover"
        >
          <source src={videoHead} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-end px-5 pt-20 pb-10 bg-black bg-opacity-40">
          <h1 className="text-white text-7xl font-bold text-center px-4 mb-6">
            The Future of Bike Storage is Here.
          </h1>

          <div className="flex space-x-1 mt-20px">
            <ButtonA
              text="DISCOVER PROFLEX"
              onClick={() => (window.location.href = "/pages/proflex-ready-steady-pro")}
            />
            <button 
            onClick={() =>(window.location.href = "/pages/gearmate-ready-to-ride")}
            className="text-white py-3 px-5 rounded-full border font-semibold bg-[#ffffff1a] shadow-md hover:text-red-700 transition">
              DISCOVER GEARMATE
            </button>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="pt-5">
        <h1 className="text-11xl px-5 py-0.5 uppercase font-bold italic font-impact whitespace-nowrap">
          READY, STEADY, PRO.
        </h1>
      </div>

      <FeaturedProducts />

      <div className=" h-screen">
        <VideoOverlay
          videoSrc={VideoBody}
          title="The Evolution of a Revolution"
        />
      </div>

      <div>
        <TolstoyCarousel
          videos={videoData}
          title="ProFlex & GearMate: The Ultimate Duo"
        />
      </div>

      <div className="pt-14">
        <div
          data-aos="fade-up"
          className="relative w-full h-[550px] flex items-center pt-14"
          style={{
            backgroundImage: `url(${BackroundAbout})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 max-w-2xl text-white px-5">
            <h1 className="text-xl md:text-6xl leading-tigh">
              We're Innovators, Not Imitators.
            </h1>
            <p className="mt-2 mb-6 text-base text-white">
              Since 2009, Steadyrack has led the way in bike storage globally.
              Now, for the first time in history, we're redefining bike storage
              once again. Welcome to the next era of Steadyrack.
            </p>
            <a href="/pages/the-steadyrack-story">
              <ButtonA text="ABOUT US" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-12 px-5">
        <hr class="px-5" />
      </div>

      <div className="py-20">
        <div
          data-aos="fade-up"
          className="items-center justify-center text-center px-5 mx-[290px] bg-white"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-7">
            Innovation, Redefined.
          </h2>
          <div></div>
          <p className="max-w-2xl text-black font-medium mb-4 mx-auto">
            ProFlex and GearMate are the ultimate storage duo. While the ProFlex
            is designed to safely and securely store your bike, the GearMate
            lets you store the rest, including gloves, shoes, helmets, gels, and
            more.
          </p>
          <p className="max-w-3xl text-black font-medium mt-4 mx-auto">
            Featuring a new modern design, increased load capacity, pivot
            function, and SteadySaddle for bikes with fenders and mudguards, the
            ProFlex is the future of bike storage. Designed to seamlessly work
            with all Steadyrack bike racks, the GearMate can be customized over
            200 ways to suit your needs and is the perfect companion to your
            ProFlex.
          </p>
          <div className="items-center flex gap-2 justify-center mt-4">
            <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-black hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
              EXPLORE PROFLEX
            </button>

            <button className="py-3.5 px-5 bg-white text-black text-sm font-semibold rounded-full shadow-md border-2 border-black hover:bg-black hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]">
              EXPLORE GEARMATE
            </button>
          </div>
        </div>
      </div>

      {/*Find Your Perfect Rack */}
      <div
        data-aos="fade-up"
        className="relative w-full h-screen flex flex-col justify-start items-center text-center px-6"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BackroundFind})`,
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center text-white mt-auto mb-10">
          <h1 className="text-5xl mb-auto font-semibold">
            Find Your Perfect Rack
          </h1>
          <p className="text-lg pb-4 md:text-xl whitespace-nowrap">
            ProFlex Range or Classic Range? We've got you covered.
          </p>
          <ButtonA text="LEARN MORE" />
        </div>
      </div>

      <BrandCarousel />

      <ShopByStyle />

      <ReviewCarousel />

      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row w-full h-[350px] mb-20 mt-10 relative" // Thêm "relative" để có thể định vị "Get 10% Off" chính xác
      >
        <div className="relative w-full h-[350px] md:w-1/2">
          <img
            src={Frame188Img}
            alt="Get 10% Off"
            className="w-full h-full object-cover"
          />
          <div
            data-aos="fade-up"
            className="absolute top-9 left-10 text-white text-4xl font-semibold"
          >
            Get 10% Off
          </div>
        </div>

        <div className="w-full h-[350px] md:w-1/2 bg-black text-white p-10 flex flex-col justify-start md:justify-start">
          {" "}
          {/* Thay đổi justify-center thành justify-start */}
          <h2 data-aos="fade-up" className="text-xl">
            Join our community today.
          </h2>
          <p data-aos="fade-up" className="text-lg text-gray-400">
            10% off first order. Be the first to hear the latest products news,
            VIP offers, and sales!
          </p>
          <div className="mt-2 flex gap-2">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-1 px-5 py-3 bg-black text-white border border-white rounded-full outline-none placeholder-white"
            />
            <ButtonA
              text="SUBSCRIBE"
              className="px-5 py-3.5 bg-white text-black rounded-full"
            />
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            By submitting this form and signing up for texts, you consent to{" "}
            <a href="#" className="underline text-gray-400">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>

      <BlogCarousel />

      <SteadyrackAmbassador records={4} />
    </div>
  );
};

export default Home;
