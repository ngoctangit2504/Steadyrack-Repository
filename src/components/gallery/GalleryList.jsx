import { useState } from "react";
import data from "../../galleryData.json";

const allTypes = [...new Set(data.map((story) => story.type))];

export default function GalleryList() {
  const [selectedType, setSelectedType] = useState("");

  const filteredStories = selectedType ? data.filter((story) => story.type === selectedType) : data;

  return (
    <div className="w-full px-4 py-6">
    
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <span className="font-bold">Browse:</span>
        <button
          className={`px-4 py-2 rounded-full border transition ${
            selectedType === "" ? "bg-black text-white" : "bg-gray-200 text-black"
          }`}
          onClick={() => setSelectedType("")}
        >
          Clear all ✕
        </button>
        {allTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full border transition ${
              selectedType === type ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type} ✕
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-t border-gray-400">
        {filteredStories.map((story, index) => (
          <div
            key={index}
            className={`relative h-[14cm] overflow-hidden group ${index % 4 === 0 ? "border-l-0" : ""}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${story.img})` }}
            ></div>

            <div className="absolute inset-0 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
}