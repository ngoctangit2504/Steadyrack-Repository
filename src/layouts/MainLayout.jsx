import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Banner />
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;