import "./StudentDashBoard.css";
import { FaRegBell } from "react-icons/fa6";
import { PiHandWaving } from "react-icons/pi";

function StudentDashboard() {
  return (
 
    /* navbar */

    <div className="dashboardcontainer">
      <div className="navbar-t">
        <div className="navbar-item">
          <FaRegBell />
        </div>
        <span className="first-image">
          <img src="public/Images/studentdashboard/Ellipse 1037.png" alt="" />
        </span>
      </div>
            
    
      <div className="greeting-container">
        <h1 className="greeting1">
          Hello, Oghenemarho
          <span className="handwave">
            <PiHandWaving />
          </span>
          ,
        </h1>
        <h4 className="greeting2">Let's learn something new today.</h4>
      </div>
     
      <div className="course-container">
        <div className="enrolled-course-container">
          <div className="course-details">
            <p>Enrolled Course</p>
            <img
              src="public/Images/studentdashboard/Frame 1000002498.png"
              alt=""
            />
          </div>
          <h6 className="notificationbadge">1</h6>
        </div>

        <div className="lessons-container">
          <div className="course-details">
            <p>Lessons</p>
            <img
              src="public/Images/studentdashboard/Frame 1000002498 2.png"
              alt=""
            />
          </div>
          <h6 className="notificationbadge">5</h6>
        </div>

        <div className="quiz-container">
          <div className="course-details">
            <p>Quiz</p>
            <img
              src="public/Images/studentdashboard/Frame 1000002498 3.png"
              alt=""
            />
          </div>
          <h6 className="notificationbadge">3</h6>
        </div>

        <div className="completed-course-container">
          <div className="course-details">
            <p>Completed Course</p>
            <img
              src="public/Images/studentdashboard/Frame 1000002498 4.png"
              alt=""
            />
          </div>
          <h6 className="notificationbadge">0</h6>
        </div>
      </div>


    </div>
  );
}

export default StudentDashboard;
