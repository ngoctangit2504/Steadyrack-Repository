import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { CartProvider } from "../contexts/CartContext";
import Cart from "../components/cart/Cart";

import { SidebarProvider } from "../contexts/SidebarContext.js";
import { Sidebar } from "../components/Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Sidebar />
            <Banner />
            <Header />

            <main>{children}</main>
            <Cart />

            <Footer />
          </div>
        </div>
      </CartProvider>
    </SidebarProvider>
  );
};

export default MainLayout;
