import "./link.css";
import { Link as ContactLink } from "react-router-dom";

const Link = () => {
  const myLinks = [
    {
      id: "twitter",
      name: "Twitter Link",
      link: "https://twitter.com/Baistevoo",
      subText: "",
    },
    {
      id: "btn__zuri",
      name: "Zuri Team",
      link: "https://training.zuri.team/",
    },
    {
      id: "books",
      name: "Zuri Books",
      link: "http://books.zuri.team",
      subText:
        "Look no further on where to get the best books on design and coding",
    },
    {
      id: "book__python",
      name: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=stephen",
      subText: "Get Top notch detailed python books here",
    },
    {
      id: "pitch",
      name: "Background Check for Coders",
      link: "https://background.zuri.team",
      subText:
        "Not sure about your programming skills, we can do a background check for you",
    },
    {
      id: "book__design",
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
      subText:
        "Get the best design book that will help you create truly professional designs",
    },
    // {
    //   id: "contact Me",
    //   name: "Contact Me",
    //   link: "/contact",
    //   subText:
    //     "",
    // },
  ];
  return (
    <div className="links-wrapper">
      {myLinks.map((link, id) => {
        return (
          <div className={`link ${link.id}`}>
            <a
              key={id}
              href={link.link}
              id={link.id}
              target="__blank"
              rel="noreferral"
            >
              {link.name}
            </a>

            {link.subText && (
              <span className={`subtext subText-${link.id}`}>{link.subText}</span>
            )}
          </div>
        );
      })}
      
      <ContactLink to="/contact">Contact Me</ContactLink>
    </div>
  );
};

export default Link;
