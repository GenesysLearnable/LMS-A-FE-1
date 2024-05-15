import "./StudentDashBoard.css";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineExpandMore } from "react-icons/md";
import { PiHandWaving } from "react-icons/pi";

function StudentDashboard() {
  return (
    <div className="container">
    <div className="navbar-t">
  <div className="navbar-item"><FaRegBell /></div>  
   <span className="first-image"> <img src="public/Images/studentdashboard/Ellipse 1037.png" alt=""/></span>
    </div>
    <div className="greeting-container">
      <h1 className="greeting1">Hello, Oghenemarho <span className="handwave"><PiHandWaving /></span>,</h1>
      <h4 className="greeting2">Let's learn something new today.</h4>
    </div>
    </div>
  );
}

export default StudentDashboard;
