import I4g from "../../assets/I4G.svg";
import Zuri from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-10 lg:py-10 lg:px-20">
      <div className="flex flex-col items-start px-0 pb-0 pt-8 border-t border-solid border-gray-300 lg:p-8 md:items-center md:justify-between md:flex-row max-w-7xl">
        <img src={Zuri} alt="Zuri Logo" className="mb-5 cursor-pointer" />
        <p className="text-base font-normal text-gray-800 mb-5">HNG Internship 9 Frontend Task</p>
        <img className="mb-5 cursor-pointer" src={I4g} alt="Ingressive For Good Logo" />
      </div>
    </footer>
  );
};

export default Footer;
