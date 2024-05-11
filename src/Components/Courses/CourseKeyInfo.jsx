import StarRating from "./StarRatings"
import CourseStyle from "./CourseKeyInfo.module.css"
import Button from "../Landingpage/Button"
import { LoginStatus } from "../../LoginContext"

const CourseKeyPoints = function () {

  const loginStatus = LoginStatus()

  return (
    <div className={CourseStyle.course__description}>
      <div className={CourseStyle.course__image}>
        <img src="/src/Images/Courses/UI-Course-Image.svg" alt="UI/UX Design" />
      </div>
      <div className={CourseStyle.course__details}>
        <h1>Product Design</h1>

        <div className={CourseStyle.course__general__info}>
          <div className={CourseStyle.course__quick__info}>
            <h3>
              Embark on a journey into the world of product design. Begin by
              exploring the fundamentals, understanding the principles that
              shape exceptional designs.
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

              <h5 className={CourseStyle.students}>1,200 students</h5>
            </div>
          </div>
          <div className={CourseStyle.enrollment}>
              <Button title={"Enroll"} bg={"bg-[#ff9053]"} path={loginStatus ? "/other" : "/signup"} />
            <h2>&#8358;4,400</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseKeyPoints
