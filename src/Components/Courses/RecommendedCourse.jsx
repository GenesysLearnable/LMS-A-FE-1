import StarRating from './StarRatings';
import Style from './RecommendedCourse.module.css';

const RecommendedCourse = function () {
  return (
    <div className={Style.course}>
      <div className={Style.course__image}></div>

      <div className={Style.course__info}>
        <img src="/src/Images/Courses/Genesys-Logo.svg" alt="Genesys Logo" />
        <div className={Style.course__details}>
          <h1>WEB3 </h1>

          <div className={Style.course__brief__description}>
            <h3>
              Designing User Interface &#10088;UI&#10089;, Crafting User
              Experience &#10088;UX&#10089;, branding products.....
            </h3>

            <div className={Style.course__rating}>
              <div>
                <h4>4.6</h4>

                <StarRating />
                <StarRating />
                <StarRating />
                <StarRating />
                <StarRating />
              </div>

              <h2>&#8358;4,400</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCourse;
