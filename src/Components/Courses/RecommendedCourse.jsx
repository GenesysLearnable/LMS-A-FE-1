import StarRating from './StarRatings';
import Style from './RecommendedCourse.module.css';

const RecommendedCourse = function (props) {
  const size = 11.7;

  const { courseName, courseDescription, video, videoAlt, stars, cost } = props;

  return (
    <div  className={Style.course}>
      <div className={Style.course__image}>
        <img src={video} alt={videoAlt} />
      </div>

      <div className={Style.course__info}>
        <img src="/Images/Courses/Genesys-Logo.svg" alt="Genesys Logo" />
        <div className={Style.course__details}>
          <h1>{courseName}</h1>

          <div className={Style.course__brief__description}>
            <h3>{courseDescription}</h3>

            <section className={Style.course__rating}>
              <div>
                <h4>4.6</h4>

                <div className={Style.stars}>
                  {[0, 1, 2, 3, 4, 5].map((index) => {
                    if (index < stars)
                      return <StarRating key={index} size={size} />;
                  })}
                </div>
              </div>

              <div className={Style.course__price}>
                <img src="/Images/Courses/Naira-Icon.svg" alt="Naira Sign" />
                <h2>{cost}</h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCourse;
