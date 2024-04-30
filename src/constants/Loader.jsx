import React from "react";
import { MMJLogo } from "../assets/export";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={MMJLogo} alt="" className="w-64" />
    </div>
  );
};

export default Loader;
