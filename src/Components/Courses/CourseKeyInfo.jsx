import StarRating from './StarRatings';
import Style from './CourseKeyInfo.module.css';
import Button from '../Landingpage/Button';
import { LoginStatus } from '../../LoginContext';

const CourseKeyPoints = function ({ img, title, text, students, price }) {
  const loginStatus = LoginStatus();

  return (
    <div className={Style.course__description}>
      <div className={Style.course__image}>
        <img src={img} alt="UI/UX Design" />
      </div>
      <div className={Style.course__details}>
        <h1>{title}</h1>

        <div className={Style.course__general__info}>
          <div className={Style.course__quick__info}>
            <h3>{text}</h3>
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

              <h5 className={Style.students}>{students} students</h5>
            </div>
          </div>
          <div className={Style.enrollment}>
            <Button
              title={'Enroll'}
              bg={'bg-[#ff9053]'}
              path={loginStatus ? '/other' : '/signup'}
            />
            <h2>&#8358;{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseKeyPoints;
