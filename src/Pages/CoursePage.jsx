import CareerCertificate from '../Components/Courses/CareerCertificate';
import ClassLessons from '../Components/Courses/ClassLessons';
import CourseKeyInfo from '../Components/Courses/CourseKeyInfo';
import CourseRequirements from '../Components/Courses/CourseRequirements';
import LearnInfo from '../Components/Courses/LearnInfo';
import RelatedCourses from '../Components/Courses/RelatedCourses';

const CoursePage = () => {
  return (
    <>
      <CourseKeyInfo />
      <LearnInfo />
      <ClassLessons />
      <CourseRequirements />
      <CareerCertificate />
      <RelatedCourses />
    </>
  );
};

export default CoursePage;
