import React from "react";
import icon from "../assets/sharebutton.svg";
import github from "../assets/Icon.svg";
import slack from "../assets/slack.png";
import myLinks from "../components/data";
import Links from "../components/Links";
import Footer from "../components/Footer";
import share from "../assets/Avatar share .svg";
import Modal from "../components/Modal";
import { useState } from "react";

const Home = () => {
  const [shareProfile, setShareProfile] = useState(false);

  const handleClick = () => {
    setShareProfile(!shareProfile);
  };

  return (
    <div className="w-full h-full ">
      <div className="">
        <div className="mt-[-20px] absolute right-0 mr-4 md:mr-[400px] cursor-pointer">
          <img className="md:hidden " src={icon} alt="" onClick={handleClick} />
          <img
            className="sm:hidden md:block"
            src={share}
            alt=""
            onClick={handleClick}
          />
          {shareProfile && <Modal />}
        </div>
        <div className="mt-[64px]">
          <img
            id="profile__img"
            className="w-[88px] h-[88px] rounded-[275px] mx-auto "
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
              <img
                id="slack"
                className="w-[24px] h-[24px] cursor-pointer"
                src={slack}
                alt=""
              />
              
                <img
                  id="https://app.slack.com/client/T042F7V19Q8/D048X5M4Y80/rimeto_profile/U0489TYPSH2"
                  className="w-[24px] h-[24px] hidden"
                  src={slack}
                  alt=""
                />
            

              <a
                href="https://github.com/stivex001/hng9_linktree"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
