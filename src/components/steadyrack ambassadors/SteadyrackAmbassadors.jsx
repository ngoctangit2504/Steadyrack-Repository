import React, { Component } from "react";
import Pic1 from "../../assets/SteadyrackAmbassadors/Frame_194.png";
import Pic2 from "../../assets/SteadyrackAmbassadors/Frame_194_copy.png";
import Pic3 from "../../assets/SteadyrackAmbassadors/Frame_194_copy_3.png";
import Pic4 from "../../assets/SteadyrackAmbassadors/Photo_28-3-2022_12_26_11_pm.jpg";

import ButtonD from "../buttons/ButtonD";

class SteadyrackAmbassador extends Component {
  styles = [
    {
      name: "Jack Thompson",
      country: "Australia",
      type: "Ultra-Cycling",
      image: Pic1,
    },
    { name: "Remy Metailler", country: "Canada", type: "MTB", image: Pic2 },
    { name: "Tom Cardy", country: "United Kingdom", type: "MTB", image: Pic3 },
    {
      name: "Caroline Buchanan",
      country: "Australia",
      type: "BMX and MTB",
      image: Pic4,
    },
    {
      name: "Caroline Buchanan",
      country: "Australia",
      type: "BMX and MTB",
      image: Pic4,
    },
    {
      name: "Caroline Buchanan",
      country: "Australia",
      type: "BMX and MTB",
      image: Pic4,
    },
  ];

  render() {
    const { records = 4 } = this.props;
    const displayStyles = this.styles.slice(0, records);

    let gridCols = "grid-cols-1";
    let itemHeight = "h-[400px]";

    if (records >= 4) {
      gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    } else if (records === 2) {
      gridCols = "grid-cols-1 sm:grid-cols-2";
      itemHeight = "h-[500px]";
    } else if (records === 1) {
      gridCols = "grid-cols-1";
      itemHeight = "h-[600px]";
    }

    return (
      <div
        data-aos="fade-left"
        className="container mx-auto py-20 px-5 min-h-[800px]"
      >
        <h2 className="text-4xl font-semibold mb-6">Steadyrack Ambassador</h2>
        <div className="grid gap-[2px] grid-cols-4">
          {displayStyles.map((style, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden shadow-md max-h-[700px]`}
            >
              <img
                data-aos="fade-left"
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-end p-4">
                <h3 className="text-white text-4xl font-semibold">
                  {style.name}
                </h3>
                <p className="text-white text-xl">{style.country}</p>
                <p className="text-white text-xl">{style.type}</p>
                <ButtonD />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-white text-black py-3.5 px-5 border-2 border-black rounded-full font-semibold hover:bg-red-700 hover:text-white transition">
            EXPLORE MORE
          </button>
        </div>
      </div>
    );
  }
}

export default SteadyrackAmbassador;
