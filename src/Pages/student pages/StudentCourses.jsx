import { FaArrowLeftLong } from "react-icons/fa6"
import Button from "../../Components/Landingpage/Button"

const StudentCourses = () => {
  return (
    <section className="w-full flex flex-col ml-[48px] gap-7 mt-6">
      <p className="flex items-center gap-2 text-[#222427] text-base font-medium">
        <FaArrowLeftLong className="text-[#222427]" /> Module 1: Getting Started
        in product design
      </p>

      <section className="flex gap-[52px] overflow-auto">
        <section className="flex flex-col gap-6">
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
        <section></section>
      </section>
    </section>
  )
}

export default StudentCourses
