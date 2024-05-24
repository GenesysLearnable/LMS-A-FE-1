import { useEffect } from "react"
import Course from "../../Components/Landingpage/Course"
import useCourseStore from "../../utlis/loader"
import { UserEmail } from "../../LoginContext"
import axios from "axios"

const StudentCourses = () => {
  const { email } = UserEmail() // Assuming UserEmail returns the user's email
  // const { course, fetchCourse } = useCourseStore()

  // useEffect(() => {
  //   if (email) {
  //     fetchCourse(email) // Pass the user's email to fetchCourse
  //   }
  // }, [email, fetchCourse])

  // console.log(email)
  // console.log(course)

  const getData = async () => {
    try {
      const res = await fetch(
        "https://lms-a-be-1-1.onrender.com/api/v1/courses/frontend",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className="w-full overflow-auto ml-16 mt-6">
      <button onClick={getData}>Hello</button>
      {/* {!course ? (
        <div>No enrolled courses</div>
      ) : (
        <div className=" grid grid-cols-3 gap-6  justify-around flex-wrap">
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
        </div>
      )} */}
    </section>
  )
}

export default StudentCourses
