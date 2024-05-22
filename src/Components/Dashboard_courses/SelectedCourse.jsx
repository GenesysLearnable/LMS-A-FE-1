import { useNavigate, useParams } from "react-router-dom"
import CourseLessons from "./CourseLessons"
import { FaArrowLeftLong } from "react-icons/fa6"
import useCourseStore from "../../utlis/loader";
import { useEffect } from "react";


const SelectedCourse = () => {

  const { course, fetchCourse } = useCourseStore()

  useEffect(() => {
    fetchCourse()
  }, [fetchCourse])


  const { id } = useParams()
  const courseContent = course.find((course) => course.id === parseInt(id))

  const navigate = useNavigate()

  return (
    <section className="w-full flex overflow-auto flex-col ml-12 gap-3 mt-6">
      <div className="flex items-center gap-2">
        <FaArrowLeftLong
          onClick={() => navigate(`/students/courses`)}
          className="text-[#222427] size-6 cursor-pointer"
        />
        <p className=" text-neutral-800 text-[31px] font-medium ">
          {courseContent.title}
        </p>
      </div>
      <section className="flex flex-col ml-[28px] gap-5">
        <section>
          <div className="flex gap-8">
            <img
              className="w-[451px] shadow-md rounded-xl"
              src={courseContent.displayImage}
              alt="course image"
            />
            <div className="flex flex-col gap-[22px]">
              <div className="shadow-md rounded-lg px-6 py-7 bg-white">
                <div>
                  <p className="flex text-center justify-center text-slate-800 text-xl font-medium">
                    15% Complete
                  </p>
                  <p className="bg-[#BBBCBD] mt-4 w-[290px] p-1 rounded-md">
                    <span className="bg-[#172B3A] w-1/6 h-2"></span>
                  </p>
                </div>
              </div>
              <div className="px-16 py-8 rounded-lg shadow-md bg-white">
                <img
                  className="w-[208px]"
                  src="/Logos/Dashboard/download (1) 1.png"
                  alt="company logo"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white flex flex-col gap-2 px-7 py-11 w-[822px] rounded-lg">
          <p className="text-slate-800 text-xl font-medium">0/5 Complete</p>
          <div className="flex flex-col gap-3">
            {courseContent.modules.map((content, index) => (
              <CourseLessons
                key={index}
                hover={
                  content.status === "Continue"
                    ? "hover:bg-[#041D31] hover:text-white"
                    : "hover:bg-[#041d3136]"
                }
                img={"/Icons/dashboard/play-circle2.png"}
                text={content.name}
                duration={content.duration}
                btnText={content.status}
                btnBg={
                  content.status === "Continue"
                    ? "bg-[#ff9053]"
                    : "bg-slate-800/25"
                }
                btnW={"w-[88px]"}
                path={
                  content.status === "Continue"
                    ? `/students/courses/${id}/${content.moduleId}`
                    : null
                }
              />
            ))}
          </div>
        </section>
      </section>
    </section>
  )
}

export default SelectedCourse
