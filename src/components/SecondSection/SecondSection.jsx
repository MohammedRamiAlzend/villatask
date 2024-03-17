import "./SecondSection.css";
import { FaPlay } from "react-icons/fa6";
import video from '../../assets/images/video-frame.jpg'
const SecondSection = () => {
  return (
    <div className="secondsection">
      <div className="image">
        <h6>| VIDEO VIEW</h6>
        <h1>
          Get Closer View <br /> & Different <br /> Feeling
        </h1>
      </div>
        <div className="video-frame">
          <div className="container">
            <img src={video} />
            <div className="center">
              <div className="circle">
                <div className="circle2">
                  <FaPlay size={20} color="#ff6f01" />
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="cards">
        <div className="card">
          <h1>34</h1>
          <h2>
            Buildings
            <br />
            Finished Now
          </h2>
          <div className="small-circle"></div>
        </div>
        <div className="card">
          <h1>12</h1>
          <h2>
            Years
            <br />
            Experience
          </h2>
          <div className="small-circle"></div>
        </div>
        <div className="card">
          <h1>24</h1>
          <h2>
            Awwards
            <br />
            Won 2023
          </h2>
          <div className="small-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
