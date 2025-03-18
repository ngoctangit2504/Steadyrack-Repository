import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { CartProvider } from "../contexts/CartContext";
import Cart from "../components/cart/Cart";


const MainLayout = ({ children }) => {
  return (
    <CartProvider>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
      
      <Banner/>
        <Header/>
       
        <main>{children}</main>
        <Cart/>
        
      <Footer />
      </div>
    </div>
    </CartProvider>
  );
};

export default MainLayout;