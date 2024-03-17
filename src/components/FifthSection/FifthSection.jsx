import "./FifthSection.css";
import Screenshoot from '../../assets/images/Screenshot.png'
import Phoneicon from '../../assets/images/Phoneicon.png'
import Emailicon from "../../assets/images/emailicon.png"

const FifthSection = () => {
  return (
    <div className="fifthsection">
      <div className="image">
        <div className="part1">
        <h1>| CONTACT US</h1>
        <h2>
          Get In Touch
          <br /> With Our Agents
        </h2>
        </div>
        <div className="part2">
      
        </div>
      </div>
      <div className="part2">
        <div className="left-side">
            <img className="map" src={Screenshoot}/>
            <div className="info">
                <div className="card">
                    <div className="icon">
                        <img src={Phoneicon}/>
                    </div>
                    <div className="data">
                        <h1>010-020-0340</h1>
                        <h2>Phone Number</h2>
                    </div>
                </div>
                <div className="card">
                <div className="icon">
                        <img src={Emailicon}/>
                    </div>
                    <div className="data">
                        <h1>info@villa.co</h1>
                        <h2>Business Email</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="right-side">
            <form>
              <div className="group">
                <label>Full Name</label>
                <input type="text" placeholder="Full Name.."/>
              </div>
              <div className="group">
                <label>Email Address</label>
                <input type="email" placeholder="Your E-mail.."/>
              </div>
              <div className="group">
                <label>Subject</label>
                <input type="text" placeholder="Subject.."/>
              </div>
              <div className="group">
                <label>Message</label>
                <textarea type="" placeholder="yourMessage"/>
              </div>
              <input className="submit" type="submit" value={'SendMessage'}/>
            </form>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
