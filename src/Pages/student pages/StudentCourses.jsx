import Course from "../../Components/Landingpage/Course"
import useCourseStore from "../../utlis/loader"


const StudentCourses = () => {
  const { course } = useCourseStore()
  
  return (
    <section className="w-full overflow-auto ml-16 mt-6">
      
      {!course ? (
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
      )}
    </section>
  )
}

export default StudentCourses
