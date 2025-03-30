import { useState, useEffect } from "react";
import ButtonA from "../../components/buttons/ButtonA";
import data from "../../data/storieData.json";
import ButtonD from "../../components/buttons/ButtonD";

const allTypes = [...new Set(data.map((story) => story.type))];

export default function StoriesList() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [visibleStories, setVisibleStories] = useState([]);
  const [loadCount, setLoadCount] = useState(3);

  const filteredStories =
    selectedTypes.length === 0
      ? data
      : data.filter((story) => selectedTypes.includes(story.type));

  useEffect(() => {
    setVisibleStories(filteredStories.slice(0, loadCount));
  }, [selectedTypes, loadCount]);

  const loadMore = () => {
    setLoadCount((prev) => Math.min(prev + 3, filteredStories.length));
  };

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    setLoadCount(3);
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <span className="font-bold">Browse:</span>
        <button
          className={`px-4 py-2 rounded-full border transition ${
            selectedTypes.length === 0 ? "bg-black text-white" : "bg-gray-200 text-black"
          }`}
          onClick={() => setSelectedTypes([])}
        >
          Clear all ✕
        </button>
        {allTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full border transition ${
              selectedTypes.includes(type)
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => toggleType(type)}
          >
            {type} ✕
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleStories.map((story, index) => (
          <div key={index} className="relative h-[14cm] overflow-hidden group">
            
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${story.img})` }}
            >
              
            </div>
            <a
              className="absolute top-0 left-0 py-2.5 px-6 text-white bg-black text-xl italic font-bold tracking-tighter"
              href="/?constraint=bicycle"
              title="Narrow selection to products matching tag bicycle"
            >
              BICYCLE
            </a>

            <a
              className="absolute top-0 left-32 py-2.5 px-6 text-white bg-black text-xl italic font-bold tracking-tighter"
              href="/?constraint=bicycle"
              title="Narrow selection to products matching tag bicycle"
            >
              BIKE RACK
            </a>

            <div className="absolute inset-0 transition-opacity duration-300 group-hover:bg-opacity-50"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-bold">{story.title}</h2>
              <ButtonD/>
            </div>
          </div>
        ))}
      </div>

      {visibleStories.length < filteredStories.length && (
        <div className="text-center mt-6">
          <ButtonA
            text={"LOAD MORE"}
            onClick={loadMore}
          />
        </div>
      )}
    </div>
  );
}