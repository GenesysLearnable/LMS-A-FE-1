import { FaArrowLeftLong } from "react-icons/fa6"
import Button from "../../Components/Landingpage/Button"
import { NavLink } from "react-router-dom"

const StudentCourses = () => {
  const noScrollbar = {
    // Hide scrollbar for Chrome, Safari and Opera
    "::-webkit-scrollbar": {
      display: "none",
    },
    // Hide scrollbar for IE, Edge and Firefox
    "-ms-overflow-style": "none", // IE and Edge
    "scrollbar-width": "none", // Firefox
  }

  const listStyles = ({ isActive }) =>
    isActive
      ? "text-slate-100 h-14 items-center bg-[#041D31] px-4 py-[3px] text-sm font-medium flex justify-between"
      : "text-[#041D31] h-14 items-center px-4 py-[3px] text-sm font-medium flex justify-between"

  return (
    <section className="w-full flex flex-col ml-[48px] gap-7 mt-6">
      <p className="flex items-center gap-2 text-[#222427] text-base font-medium">
        <FaArrowLeftLong className="text-[#222427]" /> Module 1: Getting Started
        in product design
      </p>

      <section className={"flex gap-[52px] overflow-auto "}>
        <section className={`flex flex-col gap-6`}>
          <video
            className="h-[335px] w-[616px]"
            src="/stock video.mp4"
            controls
          />

          <div>
            <p className="text-zinc-800 text-xl py-2 font-semibold">
              Course Description
            </p>

            <p className="h-auto w-[616px] text-neutral-500 text-sm font-normal font-['Poppins'] leading-relaxed">
              Understand the Problem: Begin by clearly defining the problem you
              want to solve or the need you want to address with your product.
              Research your target audience to understand their pain points,
              preferences, and behaviors. Market Research: Analyze the market to
              identify existing solutions and competitors. Understand what works
              well and where there are gaps or opportunities for innovation.
              Conceptualization: Generate ideas and concepts for your product.
              Brainstorming, sketching, and prototyping are common techniques to
              explore different possibilities. Prototyping: Create prototypes to
              visualize and test your ideas. Prototypes can range from simple
              sketches to more detailed mock-ups or functional prototypes,
              depending on the stage of development. User Testing: Gather
              feedback from potential users through usability testing and
              surveys. This will help you understand how people interact with
              your product and identify areas for improvement. Iterate and
              Refine: Use the feedback from user testing to refine your design.
              Iterate on your prototypes, making adjustments and improvements
              based on what you learn.
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
            <div className="flex">
              <img src="" alt="" />
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
                  <span>1/5</span>
                </p>
                <p className="bg-[#D9D9D9] mt-3 w-full p-1 rounded-md">
                  <span className="bg-[#172B3A] w-1/6 h-2"></span>
                </p>
              </div>
            </div>
            <div className="pt-8 flex flex-col gap-1">
              <NavLink className={listStyles}>
                <p className="w-[215px] flex gap-2 items-center">
                  <img src="/Icons/dashboard/Ellipse 1020.png" alt="icon" />{" "}
                  Getting started in Product Design
                </p>
                <span>1:28</span>
              </NavLink>
              <NavLink to={"/students/dashboard"} className={listStyles}>
                <p className="w-[215px] flex gap-2 items-center">
                  <img src="/Icons/dashboard/play-circle.png" alt="icon" />
                  Introduction to User experience.
                </p>
                <span>8:24</span>
              </NavLink>
              <NavLink to={"/students/dashboard"} className={listStyles}>
                <p className="w-[215px] flex gap-2 items-center">
                  <img src="/Icons/dashboard/play-circle.png" alt="icon" />
                  Introduction to figma.
                </p>
                <span>4:09</span>
              </NavLink>
              <NavLink to={"/students/dashboard"} className={listStyles}>
                <p className="w-[215px] flex gap-2 items-center">
                  <img src="/Icons/dashboard/play-circle.png" alt="icon" />
                  Introduction to user interface design.
                </p>
                <span>2:54</span>
              </NavLink>
              <NavLink to={"/students/dashboard"} className={listStyles}>
                <p className="w-[215px] flex gap-2 items-center">
                  <img src="/Icons/dashboard/play-circle.png" alt="icon" />
                  Responsive design.
                </p>
                <span>7:23</span>
              </NavLink>
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

export default StudentCourses
