const ButtonC = ({ text, onClick }) => {
    return (
      <button 
        className="mt-6 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full shadow-md border border-black hover:bg-black hover:text-white hover:border-white transition" 
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default ButtonC;