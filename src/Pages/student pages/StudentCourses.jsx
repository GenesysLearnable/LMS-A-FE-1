import { NavLink } from "react-router-dom"

const StudentCourses = () => {
  return (
    <section className="w-full flex flex-col ml-[48px] gap-7 mt-6">
      <section>
        <p className=" text-neutral-800 text-[31px] font-medium ">
          Product Design
        </p>

        <div className="flex">
          <img
            src="/public/Images/LandingPage/How Web 3_0 will Impact Businesses_ 2.png"
            alt=""
          />
          <div>
            <div>Hey there</div>
            <div></div>
          </div>
        </div>
      </section>
      <section>
        <p></p>
        <NavLink></NavLink>
      </section>
    </section>
  )
}

export default StudentCourses
