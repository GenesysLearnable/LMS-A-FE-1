import "./StudentDashBoard.css";
import EnrolledCourseCard from "../Components/Dashboard_for_students/EnrolledCourseCard";
import ProductDesign from "../Components/Dashboard_for_students/ProductDesign";
import ModuleProgress from "../Components/Dashboard_for_students/ModuleProgress";
import CoursesDashboard from "../Components/Dashboard_for_students/CoursesDashboard";
import Navbar from "../Components/Dashboard_for_students/Navbar";
import Activity from "../Components/Dashboard_for_students/Activity";

function StudentDashboard() {
  return (
    <div className="students-dashboard ">
      <Navbar />

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
        <div className="enroll-container">
          <div className="enrolled-product">
            <div className="enrolled-completed">
              <EnrolledCourseCard
                cardTitle="Enrolled Course"
                number="1"
                enrolled
              />
              <EnrolledCourseCard cardTitle="Completed Course" number="0" />
            </div>
            <div className="product-design">
              <ProductDesign />
            </div>
          </div>
          <Activity />
        </div>

        <div className="module-progress">
          <ModuleProgress />
          <CoursesDashboard
            courseContent="Getting Started in Product Design"
            completePercentage="0% complete"
            courseTime="8:24"
          />
          <CoursesDashboard
            courseContent="Introduction to User Experience"
            completePercentage="0% complete"
            courseTime="8:24"
          />
          <CoursesDashboard
            courseContent="Introduction to Figma"
            completePercentage="0% complete"
            courseTime="4:09"
          />
          <CoursesDashboard
            courseContent="Introduction to User Interface Design"
            completePercentage="0% complete"
            courseTime="2:54"
          />
          <CoursesDashboard
            courseContent="Responsive Design"
            completePercentage="0% complete"
            courseTime="7:23"
          />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
