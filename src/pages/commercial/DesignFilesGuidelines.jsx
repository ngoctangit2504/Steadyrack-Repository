import React from "react";

function DesignFilesGuidelines() {
  return (
    <div>
      <div className="text-center py-24 px-4 min-h-[70vh] flex flex-col justify-center items-center">
        <p className="text-6xl font-semibold mb-7">404</p>
        <hr className="w-24 border-t-2 border-gray-300 mb-4" />
        <p className="text-2xl my-6">This page does not exist.</p>
        <button className="bg-white text-black py-3.5 px-5 border border-black rounded-full font-semibold hover:bg-red-700 hover:text-white transition">
          RETURN TO HOME
        </button>
      </div>
    </div>
  );
}

export default DesignFilesGuidelines;
