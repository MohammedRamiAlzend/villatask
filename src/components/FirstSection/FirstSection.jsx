import Featured from "../../assets/images/featured.jpg"
import icon1 from "../../assets/images/infoicon-01.svg"
import icon2 from "../../assets/images/infoicon-02.png"
import icon3 from "../../assets/images/infoicon-03.png"
import icon4 from "../../assets/images/infoicon-04.png"

import Accordion from "../Accordion/Accordion";
import "./FirstSection.css";
import { FaFileContract } from "react-icons/fa6";

const FirstSection = () => {
  return (
    <div className="firstsection">
      <div className="first">
        <img className="image" src={Featured} />
        <div className="bottomleft">
          <FaFileContract size={40} className="icon" />
        </div>
      </div>
      <div className="second">
        <div className="heading">
          <h6>| FEATURED</h6>
          <h2>Best Appartment & Sea View</h2>
        </div>
        <div className="acc">
          <Accordion />
        </div>
      </div>
      <div className="third">
        <div className="bgwhite">
          <div></div>
          <div className="card2">
            <div className="icon2">
              <img src={icon1} />
            </div>
            <div className="content">
              <h1>250 m2</h1>
              <h2>Total Flat Space</h2>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card2">
            <div className="icon2">
              <img src={icon2} />
            </div>
            <div className="content">
              <h1>Contract</h1>
              <h2>Contract Ready</h2>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card2">
            <div className="icon2">
              <img src={icon3} />
            </div>
            <div className="content">
              <h1>Payment</h1>
              <h2>Payment Process</h2>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card2">
            <div className="icon2">
              <img src={icon4} />
            </div>
            <div className="content">
              <h1>Saftey</h1>
              <h2>24/7 Under Control</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
