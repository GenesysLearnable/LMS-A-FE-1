import CareerCertificate from '../Components/Courses/CareerCertificate';
import ClassLessons from '../Components/Courses/ClassLessons';
import CourseIncludes from '../Components/Courses/CourseIncludes';
import CourseKeyInfo from '../Components/Courses/CourseKeyInfo';
import CourseRequirements from '../Components/Courses/CourseRequirements';
import LearnInfo from '../Components/Courses/LearnInfo';
import RelatedCourses from '../Components/Courses/RelatedCourses';
import Style from './CoursePage.module.css';

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
      <div className="w-[1240px] flex gap-10 mt-[43px] mb-0 mx-[100px]">
        <section>
          <LearnInfo />
          <ClassLessons />
        </section>
        <section>
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
