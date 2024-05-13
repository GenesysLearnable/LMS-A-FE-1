import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel"

const CASPageLayout = ({ children }) => {
  const slides = [
    "/Images/SignupPage/Frame 1000002307.png",
    "/Images/SignupPage/Frame 1000002165.png",
    "/Images/SignupPage/Frame 1000002309.png",
  ]

  const navigate = useNavigate()
  return (
    // Twin section
    <section className="grid grid-cols-2 overflow-hidden ">
      {/* Display section */}
      <section className="bg-white flex items-center justify-center">
        {/* content section  */}
        <section className="items-center flex flex-col h-screen">
          <div className="flex items-baseline w-full gap-1 mt-9">
            <img
              onClick={() => navigate("/")}
              className="w-6 h-[22px] cursor-pointer "
              src="/Logos/Vector 9 (1).png"
              alt="logo"
            />
            <p
              onClick={() => navigate("/")}
              className="text-[#ff9053] text-xl cursor-pointer font-bold font-['Roboto']"
            >
              SkillHub
            </p>
          </div>
          <section className="h-full flex justify-center items-center">
            {children}
          </section>
        </section>
      </section>
      <section className="h-screen mix-blend-overlay shadow-lg relative bg-[#041d31]">
        <div className="h-screen  w-full z-10 absolute bg-[#041d31d4]"></div>
        <Carousel autoSlide={true}>
          {slides.map((slide, index) => (
            <img key={index} className="" src={slide} alt="" />
          ))}
        </Carousel>
      </section>
    </section>
  )
}

export default CASPageLayout
