import CareerCertificate from "../Components/Courses/CareerCertificate";
import ClassLessons from "../Components/Courses/ClassLessons";
import CourseIncludes from "../Components/Courses/CourseIncludes";
import CourseKeyInfo from "../Components/Courses/CourseKeyInfo";
import CourseRequirements from "../Components/Courses/CourseRequirements";
import LearnInfo from "../Components/Courses/LearnInfo";
import RelatedCourses from "../Components/Courses/RelatedCourses";
import Style from "./CoursePage.module.css";

const CoursePage = ({ details }) => {
  return (
    <>
      <CourseKeyInfo
        id={details.id}
        img={details.img}
        title={details.title}
        text={details.text}
        students={details.students}
        price={details.price}
      />
      <div className={Style.divider}>
        <section className={Style.left__section}>
          <LearnInfo />
          <ClassLessons />
        </section>
        <section className={Style.right__section}>
          <CourseIncludes duration="16min 14sec" />
        </section>
      </div>
      <CourseRequirements />
      <CareerCertificate />
      <RelatedCourses />
    </>
  );
};

export default CoursePage;
