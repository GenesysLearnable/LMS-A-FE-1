import './StudentDashBoard.css'

function StudentDashboard() {
  return (
    <div className="header">
      <div className="searchBox">
        <i className="fa fa-search"></i> Search
      </div>
      <div className="userSection">
        <i className="fa fa-bell"></i>
        <img className="studentPhoto" src="src/Images/LandingPage/businessman-working-laptop 1@2x.png" alt="Student" />
        <div className="userInfo">
          <div className="userName">Oghenemarho</div>
          <div className="userType">Student</div>
        </div>
        <i className="fa fa-ellipsis-h"></i>
      </div>
    </div>
  );
}


export default StudentDashboard 