import StarRating from './StarRatings';
import Style from './CourseRating.module.css';

const CourseRating = function () {
  return (
    <div className={Style.course__rating}>
      <h4>4.6</h4>

      <div className={Style.star__rating}>
        <StarRating />
        <StarRating />
        <StarRating />
        <StarRating />
        <StarRating />
      </div>

      <h5>&#10088;69 rating&#10089;</h5>

      <h5 className={Style.students}> students</h5>
    </div>
  );
};

export default CourseRating;
