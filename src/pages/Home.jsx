import React from "react";
import icon from "../assets/sharebutton.svg";
import github from "../assets/Icon.svg";
import slack from "../assets/slack.png";
import myLinks from "../components/data";
import Links from "../components/Links";

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
        <div>
          {myLinks.map((link) => (
            <Links key={link.id} name={link.name} link={link.link} />
          ))}
        </div>
        <div className="flex items-center h-[72px] py-6 mt-8  ">
          <div className="mx-auto flex gap-[26px]">
            <img className="w-[24px] h-[24px]" src={slack} alt="" />
            <img src={github} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
