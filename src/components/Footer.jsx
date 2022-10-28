import React from "react";
import i4g from "../assets/I4G.svg";

const Footer = () => {
  return (
    <div className="h-[196px] py-8 mt-8 mx-4">
      <div className="md:flex justify-around">
        {/* <img src={vector} alt="" /> */}
        <h1 className="font-bold">Zuri <span className="text-red-500">.</span> Internship</h1>
        <p className="font-normal text-sm text-gray-500 my-4">
          HNG Internship 9 Frontend Task
        </p>
        <img src={i4g} alt="" />
      </div>
    </div>
  );
};

export default Footer;
