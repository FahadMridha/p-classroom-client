import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer";
import NavBar from "../nav/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
