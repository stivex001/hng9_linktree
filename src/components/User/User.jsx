// import "./user.css";
import Share from "../../assets/share.svg";
import ShareBtnMobile from "../../assets/3dots.svg";

const User = () => {
  return (
    <section className="flex items-center justify-center flex-col pt-16 text-center">
      <div className="share_btn flex ml-auto relative">
        <div className="tooltip">
          <span className="tooltip-txt">Share Link</span>
        </div>
        <div className="border-2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <img
            className="hidden md:block"
            src={Share}
            alt="share icon"
          />
          <img
            className="block md:hidden"
            src={ShareBtnMobile}
            alt="share icon"
          />
        </div>
      </div>
      <div className="profile-img relative w-[88px] h-[88px]">
        <img className="rounded-full" src="https://avatars.githubusercontent.com/u/87942124?v=4" alt="profile" id="profile__img" />
      </div>

      {/* twitter username */}
      <h1 id="twitter" className="my-6 font-bold text-xl">@Baistevoo</h1>

      {/* slack username */}
      <h2 id="slack">Stephen Adeyemo</h2>
    </section>
  );
};

export default User;
