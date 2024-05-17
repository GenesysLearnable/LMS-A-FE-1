import "./StudentDashBoard.css";
import EnrolledCourseCard from "../Components/Dashboard_for_students/EnrolledCourseCard";
import ProductDesign from "../Components/Dashboard_for_students/ProductDesign";
import ModuleProgress from "../Components/Dashboard_for_students/ModuleProgress";

function StudentDashboard() {
  return (
    <div className="students-dashboard">
      

      <div className="dashboard">
        <header className="dashboard-header">
          <h1>
            Hello Oghenemarho
            <span role="img" aria-label="wave">
              👋,
            </span>
          </h1>
          <p>Let's Learn Something New Today.</p>
        </header>

        <EnrolledCourseCard cardTitle="Enrolled Course" number="1" enrolled />
        <EnrolledCourseCard cardTitle="Completed Course" number="0" />

        <ProductDesign />
        <ModuleProgress/>
      </div>
    </div>
  );
}

export default StudentDashboard;
