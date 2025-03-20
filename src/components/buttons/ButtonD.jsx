const RoundButton = () => {
    return (
        <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    );
  };
  
  export default RoundButton;