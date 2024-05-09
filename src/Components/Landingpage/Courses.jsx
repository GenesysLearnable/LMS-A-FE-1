import Course from "./Course"

const Courses = () => {
  return (
    <section className="bg-[#041d31] relative z-10 flex justify-center pb-[100px]">
      <img className="absolute top-[273px] h-[596px]" src="/src/Images/LandingPage/Vector 14.png"/>
      <section className="w-[88%] z-10 flex flex-col pt-[93px]">
        <article className="mb-12 ">
          <p className="text-white text-[28.88px] font-semibold font-['Poppins'] leading-[49.10px]">
            Available Courses
          </p>

          <p className="text-[#bbbcbd] text-base font-normal font-['Poppins'] leading-7">
            SkillHub provides a comprehensive range of tech courses suitable for
            beginners and seasoned professionals alike.
          </p>
        </article>
        <div className="grid grid-cols-4 gap-6 justify-around">
          {details.map((detail, index) => (
            <Course
              key={index}
              img={detail.img}
              title={detail.title}
              text={detail.text}
              price={detail.price}
            />
          ))}
        </div>
      </section>
    </section>
  )
}

const details = [
  {
    img: "/src/Images/Landingpage/How Web 3_0 will Impact Businesses_ 2.png",
    title: "Product design",
    text: "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    price: "$4,400",
  },
  {
    img: "/src/Images/LandingPage/How Web 3_0 will Impact Businesses_ 1.png",
    title: "Web3",
    text: "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    price: "$4,400",
  },
  {
    img: "/src/Images/LandingPage/html-css-collage-concept-with-person 1.png",
    title: "Backend",
    text: "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    price: "$4,400",
  },
  {
    img: "/src/Images/LandingPage/How Web 3_0 will Impact Businesses_ 2 (1).png",
    title: "Frontend",
    text: "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    price: "$4,400",
  },
]

export default Courses
