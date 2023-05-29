import React from "react";
import Topbar from "../components/common/Topbar";
import Home from "../pages/Home";

const HomeLayout = () => {
  return (
    <div>
      <Topbar />
      <Home />
    </div>
  );
};

export default HomeLayout;
