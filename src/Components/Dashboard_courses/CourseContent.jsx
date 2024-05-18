import { NavLink, useNavigate, useParams } from "react-router-dom"
import Button from "../Landingpage/Button"
import { FaArrowLeftLong } from "react-icons/fa6"

import { course } from "./courseDetails"

const CourseContent = () => {
  const { id, moduleId } = useParams()

  const courseContent = course.find((course) => course.id === parseInt(id))
  const module = courseContent.modules.find(
    (mod) => mod.moduleId === parseInt(moduleId)
  )

  const listStyles = ({ isActive }) =>
    isActive
      ? "text-slate-100 h-14 rounded-lg border border-gray-100 items-center bg-[#041D31] px-4 py-[3px] text-sm font-medium flex justify-between"
      : "text-[#041D31] h-14 rounded-lg border border-gray-200 items-center px-4 py-[3px] text-sm font-medium flex justify-between hover:bg-[#041d31d7] hover:text-white"

  const navigate = useNavigate()
  return (
    <section className="w-full flex flex-col gap-7 mt-6">
      <p className="flex items-center gap-2 text-[#222427] text-base font-medium">
        <FaArrowLeftLong
          onClick={() => navigate(`/students/courses/${id}`)}
          className="text-[#222427] cursor-pointer"
        />
        Module: {module.name}
      </p>

      <section className={"flex gap-[52px] overflow-auto "}>
        <section className={`flex flex-col gap-6`}>
          <video className="h-[335px] w-[616px]" src={module.videos} controls />

          <div>
            <p className="text-zinc-800 text-xl py-2 font-semibold">
              Course Description
            </p>

            <p className="h-auto w-[616px] text-neutral-500 text-sm font-normal font-['Poppins'] leading-relaxed">
              {module.content}
            </p>
          </div>

          <div>
            <p className="text-black text-xl font-semibold">Video Credits</p>

            <p className="text-neutral-500 text-sm font-normal">
              Credits: Chimdi and Savi
            </p>
          </div>

          <form className="pb-8">
            <p className="text-black text-xl font-semibold pb-2">Coments(0)</p>
            <div className="flex items-center gap-2">
              <img src="/public/Icons/dashboard/circle.png" alt="user icon" />
              <textarea
                className="rounded-lg w-full border-2 px-4 py-3 outline-[#ff9053]"
                placeholder="Enter your comment here"
              />
            </div>
            <div className="w-full flex pt-8 justify-end">
              <Button
                onClick={""}
                title={"Add coment"}
                bg={"bg-[#ff9053]"}
                w="w-[155px]"
                textStyle="text-sm"
              />
            </div>
          </form>
        </section>
        <section className="flex flex-col w-[365px] gap-4 ">
          <div className="shadow-md py-6 flex flex-col gap-2 bg-white rounded-lg">
            <div className="px-4">
              <p className="text-slate-800 text-xl pb-6 font-semibold">
                Your Progress
              </p>
              <div>
                <p className="flex justify-between text-slate-800 text-sm font-medium">
                  <span>15% Complete</span>
                  <span>1/{courseContent.modules.length}</span>
                </p>
                <p className="bg-[#BBBCBD] mt-3 w-full p-1 rounded-md">
                  <span className="bg-[#172B3A] w-1/6 h-2"></span>
                </p>
              </div>
            </div>
            <div className="pt-8 flex px-2 flex-col gap-2">
              {courseContent.modules.map((items, index) => (
                <div key={index}>
                  {items.status === "Continue" ? (
                    <NavLink
                      to={`/students/courses/${id}/${items.moduleId}`}
                      className={listStyles}
                    >
                      <p className="w-[215px] flex gap-2 items-center">
                        <img
                          src="/Icons/dashboard/play-circle.png"
                          alt="icon"
                        />{" "}
                        {items.name}
                      </p>
                      <span>{items.duration}</span>
                    </NavLink>
                  ) : (
                    <div className="text-[#041D31] h-14 rounded-lg border hover:bg-[#041d3136] cursor-pointer border-gray-200 items-center px-4 py-[3px] text-sm font-medium flex justify-between">
                      <p className="w-[215px] flex gap-2 items-center">
                        <img
                          src="/Icons/dashboard/play-circle.png"
                          alt="icon"
                        />{" "}
                        {items.name}
                      </p>
                      <span>{items.duration}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 shadow-md py-6 flex flex-col gap-2 bg-white rounded-lg">
            <p className="text-slate-800 text-xl pb-3 font-semibold">
              Unlock Quiz
            </p>
            <div>
              <p className=" text-neutral-600 text-sm font-normal flex gap-2 items-center">
                <img
                  src="/Icons/dashboard/4698593_lock_padlock_protection_safety_security_icon 1.png"
                  alt="icon"
                />
                Complete 4 more lessons to unlock quiz.
              </p>
            </div>
          </div>

          <div className="px-4 font-['Roboto'] shadow-md py-6 flex flex-col gap-2 bg-white rounded-lg">
            <p className="text-slate-800 text-xl pb-2 font-semibold">
              Claim Reward
            </p>
            <div>
              <div className=" text-neutral-600 text-sm font-normal flex gap-2 items-center">
                <img
                  src="/Icons/dashboard/Gold_cups_and_awards_flat_vector_illustrations_set-removebg-preview 1.png"
                  alt="icon"
                />
                <div>
                  Complete quiz to claim reward.
                  <button
                    className={`bg-[#ff9053] font-medium h-9 w-[140px] mt-2 py-3 text-zinc-900 opacity-40 rounded-lg shadow hover:opacity-100 hover:text-white duration-200 flex justify-center items-center`}
                  >
                    Claim Reward
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default CourseContent
