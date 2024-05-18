import { useNavigate } from "react-router-dom"
import CourseLessons from "../../Components/Dashboard_courses/CourseLessons"

const StudentCourses = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate("/students/courses/pd")
  }
  return (
    <section className="w-full flex overflow-auto flex-col ml-[48px] gap-7 mt-6">
      <section>
        <p className=" text-neutral-800 text-[31px] font-medium ">
          Product Design
        </p>

        <div className="flex gap-8">
          <img
            className="w-[451px] shadow-md rounded-md"
            src="/public/Images/studentdashboard/How Web 3_0 will Impact Businesses_ 1.png"
            alt=""
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
          <CourseLessons
            bg={"bg-[#041D31]"}
            img={"/Icons/dashboard/Ellipse 1020 copy.png"}
            text={"Getting Started in Product Design"}
            tS="text-white"
            duration={"1:28"}
            btnText={"Continue"}
            btnBg={"bg-[#ff9053]"}
            btnW={"w-[114px]"}
            onClick={onClick}
          />
          <CourseLessons
            img={"/Icons/dashboard/play-circle2.png"}
            text={"Introduction to User Experience"}
            duration={"8:24"}
            btnText={"Locked"}
            btnBg={"bg-slate-800/25"}
            btnW={"w-[88px]"}
          />
          <CourseLessons
            img={"/Icons/dashboard/play-circle2.png"}
            text={"Introduction to Figma"}
            duration={"4:08"}
            btnText={"Locked"}
            btnBg={"bg-slate-800/25"}
            btnW={"w-[88px]"}
          />
          <CourseLessons
            img={"/Icons/dashboard/play-circle2.png"}
            text={"Introduction to User Interface Design"}
            duration={"2:54"}
            btnText={"Locked"}
            btnBg={"bg-slate-800/25"}
            btnW={"w-[88px]"}
          />
          <CourseLessons
            img={"/Icons/dashboard/play-circle2.png"}
            text={"Responsive Design"}
            duration={"7:23"}
            btnText={"Locked"}
            btnBg={"bg-slate-800/25"}
            btnW={"w-[88px]"}
          />
        </div>
      </section>
    </section>
  )
}

export default StudentCourses
