import "./user.css";
import Share from "../../assets/share.svg";
import ShareBtnMobile from "../../assets/3dots.svg";

const User = () => {
  return (
    <section className="profile">
      <div className="share_btn">
        <div className="tooltip">
          <span className="tooltip-txt">Share Link</span>
        </div>
        <div className="share-btn-wrapper">
          <img
            className="share-btn-icon share-btn-desktop"
            src={Share}
            alt="share icon"
          />
          <img
            className="share-btn-icon share-btn-mobile"
            src={ShareBtnMobile}
            alt="share icon"
          />
        </div>
      </div>
      <div className="profile-img">
        <img src="https://avatars.githubusercontent.com/u/87942124?v=4" alt="profile" id="profile__img" />
      </div>

      {/* twitter username */}
      <h1 id="twitter">@Baistevoo</h1>

      {/* slack username */}
      <h2 id="slack">Stephen Adeyemo</h2>
    </section>
  );
};

export default User;
