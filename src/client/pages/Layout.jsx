import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout;
