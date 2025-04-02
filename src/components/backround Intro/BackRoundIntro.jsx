const BannerSection = ({ imageSrc, text }) => {
  return (
    <div data-aos="fade-up" className="relative w-full h-screen">
      <img
        src={imageSrc}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 bg-black bg-opacity-40 text-center px-4">
        <h1
          data-aos="fade-up"
          className="text-white text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10rem] 
                        leading-tight uppercase italic tracking-[-0.05em] skew-x-10 font-impact break-words"
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default BannerSection;
