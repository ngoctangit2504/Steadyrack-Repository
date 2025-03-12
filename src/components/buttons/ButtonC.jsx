const ButtonC = ({ text, onClick }) => {
    return (
      <button 
      className="mt-6 px-4 py-3 bg-white text-black text-sm font-semibold rounded-full shadow-md border border-black hover:bg-black hover:text-white hover:border-white transition inline-flex items-center justify-center min-w-[40px]"
      onClick={onClick}
    >
      {text}
    </button>
    );
  };
  
  export default ButtonC;