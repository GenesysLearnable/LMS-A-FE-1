import StarRating from "./StarRatings"
import CourseStyle from "./CourseKeyInfo.module.css"
import Button from "../Landingpage/Button"
import { LoginStatus } from "../../LoginContext"

const CourseKeyPoints = function ({img, title, text, students, price}) {

  const loginStatus = LoginStatus()

  return (
    <div className={CourseStyle.course__description}>
      <div className={CourseStyle.course__image}>
        <img src={img} alt="UI/UX Design" />
      </div>
      <div className={CourseStyle.course__details}>
        <h1>{title}</h1>

        <div className={CourseStyle.course__general__info}>
          <div className={CourseStyle.course__quick__info}>
            <h3>
              {text}
              
            </h3>
            <div className={CourseStyle.course__rating}>
              <h4>4.6</h4>

              <div className={CourseStyle.star__rating}>
                <StarRating />
                <StarRating />
                <StarRating />
                <StarRating />
                <StarRating />
              </div>

              <h5>&#10088;69 rating&#10089;</h5>

              <h5 className={CourseStyle.students}>{students} students</h5>
            </div>
          </div>
          <div className={CourseStyle.enrollment}>
              <Button title={"Enroll"} bg={"bg-[#ff9053]"} path={"/students/dashboard"} />
            <h2>&#8358;{price}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseKeyPoints
