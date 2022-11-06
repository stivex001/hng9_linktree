// import "./link.css";
import { Link as ContactLink } from "react-router-dom";
import { myLinks } from "../data";

const Link = () => {
  return (
    <div className="links-wrapper">
      {myLinks.map((link, id) => {
        return (
          <div key={id} className={`relative ${link.id}`}>
            <a
              className="btn__link"
              href={link.link}
              id={link.id}
              target="__blank"
              rel="noreferral"
            >
              {link.name}
            </a>

            {link.subText && (
              <span
                className={`absolute -bottom-9 w-full text-center bg-gray-300 mb-2 text-sm hidden cursor-pointer text-gray-900 py-1 subtext subText-${link.id}`}
              >
                {link.subText}
              </span>
            )}
          </div>
        );
      })}

      <ContactLink to="/contact" className="btn__link" id="contact">Contact Me</ContactLink>
    </div>
  );
};

export default Link;
