const ButtonA = ({ text, onClick }) => {
    return (
      <button 
        className="bg-white text-black px-6 py-3 rounded-full font-semibold border-2 border-black hover:bg-red-700 hover:text-white transition" 
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default ButtonA;