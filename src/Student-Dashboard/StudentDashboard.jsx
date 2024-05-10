import "./StudentDashBoard.css";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineExpandMore } from "react-icons/md";

function StudentDashboard() {
  return (
    <div className="container2">
      <div className="header">
        <div className="searchBox">
          <FaSearch />
          Search
        </div>
        <div className="userSection">
          <FaRegBell className="bell" />
          <img
            className="studentPhoto"
            src="src/Images/LandingPage/businessman-working-laptop 1@2x.png"
            alt="Student"
          />
          <div className="userInfo">
            <p className="userName">Oghenemarho</p>
            <p className="userType">Student</p>
          </div>
          <MdOutlineExpandMore className="More" />
        </div>
      </div>

      <div className="secondContainerbox">
        <div className="SecondContainerboxcontent">
          <div className="topHeading">
            <h2 className="naMe">
              Hello, <span className="orange">Oghenemarho</span>
            </h2>
            <p className="welcomeText">Let’s learn something new today!</p>
          </div>
          <div className="bottomHeading">
            <p className="welcomeText">You have completed 0% of your course</p>
            <p className="welcomeText">Please check your course.</p>
          </div>

          <div className="calendar">
            <i className="calendarIcon far fa-calendar-alt"></i>
          </div>
        </div>
      </div>

      <div className="statistics">
        <div className="statBox">
          <h4 className="statTitle">Total Course Enrolled</h4>
          <h6 className="statNumber">1</h6>
        </div>
        <div className="statBox">
          <h4 className="statTitle">Completed Course</h4>
          <h6 className="statNumber">0</h6>
        </div>
        <div className="statBox">
          <h4 className="statTitle">Completed Quiz</h4>
          <h6 className="statNumber">0</h6>
        </div>
        <div className="side">
          <div className="paymentHistory">
            <h3 className="paymentTitle">Payment History </h3>
            <p className="product">See all</p>
          </div>
          <div className="productDesign">
            <h3 className="productName">Product Design</h3>
            <p className="product">₦10,000 </p>
          </div>
        </div>
      </div>

      <div className="courseEnrolledBox">
        <div className="enrolled">
          <h5 className="courseEnrolled">Course Enrolled</h5>
          <h4 className="all">All</h4>
          <h4 className="inProgress">In Progress</h4>
        </div>
        <div className="courseDetails">
          <div className="courseName">
            <p>Product Design</p>
            <span className="complete">0% Complete</span>
            <span className="courseProgress"></span>
          </div>

          <div className="rating">
            <span className="stars">★</span> (4.9)
          </div>
          <h5 className="viewCourse">View Course</h5>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
