import React, { Component } from "react";
import Pic1 from "../../assets/ShopByStyle/Rectangle_14.png"
import Pic2 from "../../assets/ShopByStyle/Rectangle_14_copy.png"
import Pic3 from "../../assets/ShopByStyle/Rectangle_14_copy_2.png"
import Pic4 from "../../assets/ShopByStyle/Rectangle_14_copy_3.png"
import Pic5 from "../../assets/ShopByStyle/Shop_by_world_home_page.png"


class ShopByStyle extends Component {
  styles = [
    {name: "Mountain",image: Pic2,},
    {name: "Road",image: Pic1,},
    {name: "City",image: Pic5,},
    {name: "Fat",image: Pic3,},
    {name: "Gravel",image: Pic4,},
  ];

  render() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6">Shop By Style</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
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
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                <h3 className="text-white text-3xl font-bold">{style.name}</h3>
                <button className="mt-2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-white">
                  A
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ShopByStyle;