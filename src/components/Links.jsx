import React from "react";

const Links = ({ name, link }) => {
  return (
    <div>
        
      <p className="bg-[#EAECF0]  h-[68px] border border-gray-200 rounded-[8px] py-6 px-8 mx-4 text-center mt-8">
        <a
          className="text-gray-900 font-medium text-sm"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </p>
    </div>
  );
};

export default Links;
