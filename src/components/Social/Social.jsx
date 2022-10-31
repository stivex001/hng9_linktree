import "./social.css"
import github from "../../assets/github.svg";
import slackIcon from "../../assets/slack.svg";

const Social = () => {
  return (
    <section className="social">
      <a
        href="https://app.slack.com/client/T042F7V19Q8/D048X5M4Y80/rimeto_profile/U0489TYPSH2"
        target={"_blank"}
        rel="noreferrer"
      >
        <img src={slackIcon} alt="Slack Icon" />
      </a>
      <a
        href="https://github.com/stivex001/hng9_linktree"
        target={"_blank"}
        rel="noreferrer"
      >
        <img src={github} alt="Github Icon" />
      </a>
    </section>
  )
}

export default Social