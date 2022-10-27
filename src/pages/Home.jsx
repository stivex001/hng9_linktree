import React from "react";
import icon from "../assets/sharebutton.svg";

const Home = () => {
  return (
    <div className="w-full h-full ">
      <div className="bg-[#f4f5f7]">
        <img className="mt-[44px] " src={icon} alt="" />
        <img
          className="w-[88px] h-[88px] rounded-[275px] mx-auto"
          src="https://avatars.githubusercontent.com/u/87942124?v=4"
          alt=""
        />
        <h2 className="text-[18px] leading-7 text-gray-900 text-center font-bold mt-6">
          Stephen Adeyemo
        </h2>
        <div className="mt-8">
          <p className="bg-[#EAECF0]  h-[68px] border border-gray-200 rounded-[8px] py-6 px-8 mx-4 text-center">
            <a
              className="text-gray-900 font-medium text-sm"
              href="https://twitter.com/Baistevoo"
              target="_blank"
              rel="noreferrer"
            >
              Twitter Link
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
