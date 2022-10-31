import I4g from "../../assets/I4G.svg"
import Zuri from "../../assets/logo.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="footer-wrapper">
        <img src={Zuri} alt="Zuri Logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4g} alt="Ingressive For Good Logo" />
      </div>
    </footer>
  )
}

export default Footer