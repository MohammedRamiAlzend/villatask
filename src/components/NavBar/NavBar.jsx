import { Link } from "react-router-dom";
import "./NavBar.css";
import { SlCalender } from "react-icons/sl";
import { IoMdMenu } from "react-icons/io";
import { useState  } from "react";
import { TiThMenu } from "react-icons/ti";
import { TiThMenuOutline } from "react-icons/ti";




const NavBar = () => {
  const dropDownMenu= document.querySelector('.drop_downMenu');
  const [isOpen,setIsOpen ]=useState (false);
  const test = () => {
      dropDownMenu.classList.toggle('open')
      setIsOpen( dropDownMenu.classList.contains('open'))
    }
  return (
    <div className="navbar">
      <h1 className="navtitle">Villa</h1>
      <ul className="navul">
        <li className="li">
          <Link to="/villatask/">Home</Link>
        </li>
        <li className="li">
          <Link to="/villatask/properties">Properties</Link>
        </li>
        <li className="li">
          <Link to="/villatask/propertydetails">Property Details</Link>
        </li>
        <li className="li">
          <Link to="/villatask/contactus">Contact Us</Link>
        </li>
        <li className="special">
          <div>
            <SlCalender size={20} className="icon" />
          </div>
          <p>Schedule a visit</p>
        </li>
      </ul>
      <div onClick={test} className="toggle_button">
        { isOpen? <TiThMenuOutline /> : <TiThMenu />}
       
      </div>
      <div className="drop_downMenu">
          <ul className="navul">
            <li className="li">
              <Link to="/villatask/">Home</Link>
            </li>
            <li className="li">
              <Link to="/villatask/properties">Properties</Link>
            </li>
            <li className="li">
              <Link to="/villatask/propertydetails">Property Details</Link>
            </li>
            <li className="li">
              <Link to="/villatask/contactus">Contact Us</Link>
            </li>
            <li className="special">
              <div>
                <SlCalender size={20} className="icon" />
              </div>
              <p>Schedule a visit</p>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default NavBar;
