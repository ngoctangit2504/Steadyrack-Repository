import React, { Component } from "react";
import Pic1 from "../../assets/ShopByStyle/Rectangle_14.png";
import Pic2 from "../../assets/ShopByStyle/Rectangle_14_copy.png";
import Pic3 from "../../assets/ShopByStyle/Rectangle_14_copy_2.png";
import Pic4 from "../../assets/ShopByStyle/Rectangle_14_copy_3.png";
import Pic5 from "../../assets/ShopByStyle/Shop_by_world_home_page.png";

import ButtonD from "../../components/buttons/ButtonD";

class ShopByStyle extends Component {
  styles = [
    { name: "Mountain", image: Pic2 },
    { name: "Road", image: Pic1 },
    { name: "City", image: Pic5 },
    { name: "Fat", image: Pic3 },
    { name: "Gravel", image: Pic4 },
  ];

  render() {
    return (
      <div data-aos="fade-up" className="container mx-auto px-4 pt-20">
        <h2 className="text-4xl font-semibold mb-6">Shop By Style</h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"
        >
          {this.styles.map((style, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-md"
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-end p-5">
                <h3 className="text-white text-3xl font-semibold mb-2">
                  {style.name}
                </h3>
                <ButtonD />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ShopByStyle;
