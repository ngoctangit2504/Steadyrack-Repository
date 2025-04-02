const ButtonA = ({ text, onClick }) => {
  return (
    <button
      className="bg-white text-black py-3.5 px-5 border-2 border-black rounded-full font-semibold hover:bg-red-700 hover:text-white transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonA;
