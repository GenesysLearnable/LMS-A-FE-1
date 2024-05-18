import { course } from "../../Components/Dashboard_courses/courseDetails"
import Course from "../../Components/Landingpage/Course"

const StudentCourses = () => {
  return (
    <section className="w-full grid grid-cols-3 gap-6 justify-around overflow-auto flex-wrap ml-[18px] mt-6">
      {course.map((item, index) => (
        <div className="w-[300px]" key={index}>
          <Course
            img={item.displayImage}
            title={item.title}
            text={`${item.modules[0].content.slice(0, 150)}...`}
            path={`/students/courses/${item.id}`}
          />
        </div>
      ))}
    </section>
  )
}

export default StudentCourses
