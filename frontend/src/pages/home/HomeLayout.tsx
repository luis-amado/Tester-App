import React from "react";
import { Outlet } from 'react-router-dom';
import HomeNavbar from "../../components/HomeNavbar";
import Footer from "../../components/Footer";

const HomeLayout = () => {
  return <div className="home-layout">
    <HomeNavbar />
    <div className="home-container">
      <Outlet />
    </div>
    <Footer />
  </div>;
};

export default HomeLayout;
