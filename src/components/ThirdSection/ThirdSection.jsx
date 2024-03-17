import "./ThirdSection.css";
import { SlCalender } from "react-icons/sl";

const ThirdSection = () => {
  return (
    <div className="thirdsection">
      <div className="part1">
        <div className="left-side">
          <h6>| BEST DEAL</h6>
          <p>
            Find Your Best
            <br />
            Deal Right
            <br />
            Now!
          </p>
        </div>
        <div className="right-side">
          <ul>
            <li>
              <button className="selected">Appartment</button>
            </li>
            <li>
              <button>Villa House</button>
            </li>
            <li>
              <button>Penthouse</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="part2">
        <div className="left">
          <div className="line">
            <h1>Total Flat Space</h1>
            <h6>185 m2</h6>
          </div>
          <div className="divider"></div>
          <div className="line">
            <h1>Floor number</h1>
            <h6>26th</h6>
          </div>
          <div className="divider"></div>
          <div className="line">
            <h1>Number of rooms</h1>
            <h6>4</h6>
          </div>
          <div className="divider"></div>
          <div className="line">
            <h1>Parking Available</h1>
            <h6>Yes</h6>
          </div>
          <div className="divider"></div>
          <div className="line">
            <h1>Payment Process</h1>
            <h6>Bank</h6>
          </div>
        </div>
        <div className="middle"></div>
        <div className="right">
          <h3>Extra Info About Property</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
            tempor pack incididunt ut labore et dolore magna aliqua quised ipsum
            suspendisse.
            <br />
            <br />
            When you need free CSS templates, you can simply type TemplateMo in
            any search engine website. In addition, you can type TemplateMo
            Portfolio, TemplateMo One Page Layouts, etc.
          </p>
          <div className="special">
            <div>
              <SlCalender size={20} className="icon" />
            </div>
            <p>Schedule a visit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
