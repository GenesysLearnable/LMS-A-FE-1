import RecommendedCourse from "./RecommendedCourse";
import Style from "./RelatedCourses.module.css";

const theCourses = [
  {
    courseName: "WEB3",
    courseDescription:
      "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    video: "/Images/Courses/Web3-Course.svg",
    videoAlt: "Web 3",
    stars: 5,
    cost: "4,400",
  },
  {
    courseName: "Frontend",
    courseDescription:
      "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    video: "/Images/Courses/Frontend-Course.svg",
    videoAlt: "Frontend Web Development",
    stars: 5,
    cost: "4,400",
  },
  {
    courseName: "Backend",
    courseDescription:
      "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    video: "/Images/Courses/Backend-Course.svg",
    videoAlt: "Backend Web Development",
    stars: 5,
    cost: "4,400",
  },
];

const RelatedCourses = function () {
  return (
    <div className={Style.container}>
      <h2>Related courses</h2>

      <div>
        {theCourses.map((theCourse, index) => (
          <RecommendedCourse
            key={index}
            courseName={theCourse.courseName}
            courseDescription={theCourse.courseDescription}
            video={theCourse.video}
            videoAlt={theCourse.videoAlt}
            stars={theCourse.stars}
            cost={theCourse.cost}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
