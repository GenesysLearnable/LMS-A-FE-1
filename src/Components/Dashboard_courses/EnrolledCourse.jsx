import { course } from "./courseDetails"

const EnrolledCourse = ({ title, img }) => {
  return (
    <section>
      <div className="flex gap-8 items-center bg-white w-fit py-4 shadow-md px-3 rounded-lg">
        <div className="flex flex-col items-center gap-[22px]">
          <div className="px-8 py-3 rounded-lg bg-white">
            <p className=" text-neutral-800 text-[31px] font-semibold ">
              {title}
            </p>
          </div>
          <div className=" flex rounded-lg px-6 py-3 bg-white">
            <div>
              <p className="flex text-center justify-center text-slate-800 text-lg font-medium">
                15% Complete
              </p>
              <p className="bg-[#BBBCBD] mt-4 w-[200px] p-1 rounded-md">
                <span className="bg-[#172B3A] w-1/6 h-2"></span>
              </p>
            </div>
          </div>
        </div>
        <img
          className="w-[350px] h-[190px] rounded-md"
          src={img}
          alt="course image"
        />
      </div>
    </section>
  )
}
export default EnrolledCourse
