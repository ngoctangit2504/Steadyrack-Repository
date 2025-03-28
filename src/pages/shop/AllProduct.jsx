import React from "react";
import ShopImg from "../../assets/Shops/hero_ecfe2fe4-374d-4149-8ac2-866a6579f6b6.png";
import ProductList from "../../components/product/ProductList";

function AllProduct() {
  return (
    <div>
      <div className="relative w-full">
        <img src={ShopImg} alt="Contact Us Banner" className="w-full h-auto" />

        <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="transition-all w-full text-center">
            <span
              className="block text-white font-bold italic font-impact tracking-tight opacity-100 animate-fade-up 
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              data-aos="fade-up"
            >
              ALL PRODUCTS
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-6 py-2.5 w-full">
        <div>
          <nav className=" flex items-center font-semibold space-x-2 text-sm">
            <a href="#" title="Shop" aria-label="Shop" className="transition">
              Shop
            </a>
            <span>/</span>
            <a
              href="#"
              title="All Products"
              aria-label="All Products"
              className="transition"
            >
              All Products
            </a>
          </nav>
        </div>
      </div>
      <div className="pt-2.5">
        <ProductList />
      </div>
    </div>
  );
}

export default AllProduct;
