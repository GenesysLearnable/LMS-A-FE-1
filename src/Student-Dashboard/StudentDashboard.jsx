import "./StudentDashBoard.css";

function StudentDashboard() {
  return (
    <div className="container">
      <div className="header">
        <div className="searchBox">
          <i className="fa fa-search"></i> Search
        </div>
        <div className="userSection">
          <i className="fa fa-bell"></i>
          <img
            className="studentPhoto"
            src="src/Images/LandingPage/businessman-working-laptop 1@2x.png"
            alt="Student"
          />
          <div className="userInfo">
            <div className="userName">Oghenemarho</div>
            <div className="userType">Student</div>
          </div>
          <i className="fa fa-ellipsis-h"></i>
        </div>
      </div>

      <div className="bluebox">
        <div className="blueboxcontent">
          <div className="naMe">
            Hello, <span className="orange">Oghenemarho</span>
          </div>
          <div className="learn">Let’s learn something new today!</div>
          <div className="course">
            You have completed 0% of your course Please check your course.
          </div>
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
            <div className="paymentTitle">
              Payment History <span className="seeAll">See All</span>
            </div>
          </div>
          <div className="productDesign">
            <div className="productInfo">
              <div className="productName">Product Design</div>
              <div className="productPrice">₦10,000 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
