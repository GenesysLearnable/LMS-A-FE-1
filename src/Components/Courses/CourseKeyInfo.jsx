import StarRating from "./StarRatings"
import CourseStyle from "./CourseKeyInfo.module.css"
import Button from "../Landingpage/Button"

const CourseKeyPoints = function ({ id, img, title, text, students, price }) {
  const enrollCourse = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/courses/${id}/enroll`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ enrolled: true }),
        }
      )

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
    } catch (error) {
      console.log("Error enrolling in course", error)
    }
  }

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
        <div className={CourseStyle.course__general__info}>
          <div className={CourseStyle.course__quick__info}>
            <h3>{text}</h3>
            <div className={CourseStyle.course__rating}>
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
          <div className={CourseStyle.enrollment}>
            <Button
              title={"Enroll"}
              bg={"bg-[#ff9053]"}
              path={"/students/courses"}
              onClick={() => enrollCourse(id)}
            />
            <h2>&#8358;{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseKeyPoints;
