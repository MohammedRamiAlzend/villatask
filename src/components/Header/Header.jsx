import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import "./Header.css";
import { IconContext } from "react-icons";
import { SiYourtraveldottv } from "react-icons/si";
import { MdEmail } from "react-icons/md";
const Header = () => {
  return (
    <div className="header">
      <div className="firstpart">
        <div className="group">
          <MdEmail size={23} className="icon" />
          <p>info@Company.com</p>
        </div>
        <div className="horizontal-divider"></div>
        <div className="group">
          <SiYourtraveldottv size={23} className="icon" />
          <p>Sunny Isles Beach, FL 33160</p>
        </div>
      </div>
      <IconContext.Provider value={{ size: "25px" }}>
        <div className="secondpart">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Header;
