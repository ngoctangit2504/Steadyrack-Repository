const ButtonB = ({ text, onClick }) => {
  return (
    <button
      className="text-white px-6 py-3 rounded-full font-semibold border border-white shadow-md hover:text-red-700 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonB;
