import ClassLessons from '../Components/Courses/ClassLessons';
import CourseKeyInfo from '../Components/Courses/CourseKeyInfo';
import CourseRequirements from '../Components/Courses/CourseRequirements';
import LearnInfo from '../Components/Courses/LearnInfo';

const CoursePage = () => {
  return (
    <>
      <CourseKeyInfo />
      <LearnInfo />
      <ClassLessons />
      <CourseRequirements />
    </>
  );
};

export default CoursePage;
