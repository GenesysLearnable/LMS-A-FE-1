import "./StudentDashBoard.css";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineExpandMore } from "react-icons/md";

function StudentDashboard() {
  return (
    <div className="container">
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
            <div className="userName">Oghenemarho</div>
            <div className="userType">Student</div>
          </div>
          <MdOutlineExpandMore className="More" />
        </div>
      </div>

      <div className="bluebox">
        <div className="blueboxcontent">
          <div className="naMe">
            Hello, <span className="orange">Oghenemarho</span>
          </div>
          <div className="learn">Let’s learn something new today!</div>
          <div className="course">You have completed 0% of your course</div>
          <div className="course">Please check your course.</div>

          <div className="calendar">
            <i className="calendarIcon far fa-calendar-alt"></i>
          </div>
        </div>
      </div>

      <div className="statistics">
        <div className="statBox">
          <div className="statTitle">Total Courses Enrolled</div>
          <div className="statNumber">1</div>
        </div>
        <div className="statBox">
          <div className="statTitle">Completed Courses</div>
          <div className="statNumber">0</div>
        </div>
        <div className="statBox">
          <div className="statTitle">Completed Quizzes</div>
          <div className="statNumber">0</div>
        </div>

        <div className="side">
          <div className="paymentHistory">
            <div className="paymentTitle">Payment History </div>
            <div className="product">See all</div>
          </div>
          <div className="productDesign">
            <div className="productName">Product Design</div>
            <div className="product">₦10,000 </div>
          </div>
        </div>
      </div>

      <div className="courseEnrolledBox">
        <div className="enrolled">
          <div className="courseEnrolled">Course Enrolled</div>
          <div className="all">All</div>
          <div className="inProgress">In Progress</div>
        </div>
        <div className="courseDetails">
          <div className="productName">
            Product Design
            <span className="complete">0% Complete</span>
          </div>
          <div className="rating">
            <span className="stars">★</span> (4.9)
          </div>
          <div className="viewCourse">View Course</div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
