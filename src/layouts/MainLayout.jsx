import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Banner />
      
      
      <div className="flex-grow overflow-auto">
        <Header className="sticky top-0 z-50" />
        <main>{children}</main>
      </div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;