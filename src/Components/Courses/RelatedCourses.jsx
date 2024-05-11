import RecommendedCourse from './RecommendedCourse';
import Style from './RelatedCourses.module.css';

const RelatedCourses = function () {
  return (
    <div className={Style.header}>
      <h2>Related courses</h2>

      <div>
        <RecommendedCourse />
      </div>
    </div>
  );
};

export default RelatedCourses;
