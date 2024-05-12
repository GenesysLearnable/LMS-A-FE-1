import StarRating from './StarRatings';

const RecommendedCourse = function () {
  return (
    <div>
      <div>
        <img
          src="/Images/Courses/How-Web-3.0-will-Impact-Businesses.svg"
          alt="A Web3 Course"
        />
      </div>

      <div>
        <StarRating />
        <StarRating />
        <StarRating />
        <StarRating />
        <StarRating />
      </div>
    </div>
  );
};

export default RecommendedCourse;
