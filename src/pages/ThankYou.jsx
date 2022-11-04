import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="container h-[70vh] max-w-2xxl">
      <div className="mx-auto flex items-center justify-center flex-col pt-16 text-center ">
        <p className="text-xl font-smeibold md:mx-auto ">
          Thank you.. Your message has been submitted to
          stephenadeyemo@gmail.com
        </p>
      </div>
      <Link to="/">
        <button
          className="bg-blue-750 border border-blue-750 font-semibold text-base h-12 w-full text-white rounded-xl mt-40"
          id="btn__submit"
          type="submit"
        >
          Home
        </button>
      </Link>
    </div>
  );
};

export default ThankYou;
