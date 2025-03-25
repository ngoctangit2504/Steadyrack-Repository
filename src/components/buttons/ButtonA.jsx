const ButtonA = ({ text, onClick }) => {
    return (
      <button 
        className="bg-white text-black py-3.5 px-5 rounded-full font-semibold hover:bg-red-700 hover:text-white transition" 
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default ButtonA;