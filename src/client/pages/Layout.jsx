import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
