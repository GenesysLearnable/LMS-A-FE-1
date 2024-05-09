import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
  return (
    <section className="bg-[#041d31] relative pt-20 pb-[86.23px] pl-[5%]">
      <article>
        <p className="text-sm text-[#cc7342] font-semibold font-['Poppins'] leading-normal">
          Our users
        </p>

        <p className="text-[28.88px] text-white font-bold font-['Inter'] leading-[49.10px]">
          What our users have to say
        </p>
      </article>
      <div className="pt-6 flex overflow-auto gap-5">
        {details.map((detail, index) => (
          <TestimonialCard
            key={index}
            text={detail.text}
            name={detail.name}
            field={detail.field}
            img={detail.img}
          />
        ))}
      </div>
      <div className="pb-[133.56px]"></div>
    </section>
  )
}

const details = [
  {
    text: "SkillHub has been a game-changer for me as a software developer. The platform offers a wide range of tech courses that have helped me stay updated with the latest technologies and enhance my skills.",
    name: "David",
    field: "Jr software developer",
    img: "/src/Images/LandingPage/Frame 364.png",
  },
  {
    text: "SkillHub has helped me sharpen my web development skills and explore new areas like UX/UI design. The courses are well-structured, and the hands-on projects have boosted my confidence.",
    name: "Emily",
    field: "Web developer",
    img: "/src/Images/LandingPage/Frame 364 (3).png",
  },
  {
    text: "I'm a graphic designer, and SkillHub has been my go-to platform for honing my design skills.",
    name: "Micheal",
    field: "Graphic designer",
    img: "/src/Images/LandingPage/Frame 364 (2).png",
  },
  {
    text: "SkillHub's business courses have been incredibly beneficial for me as an entrepreneur. I've gained valuable digital skills, which have contributed to the success of my business.",
    name: "Mark",
    field: "Artist",
    img: "/src/Images/LandingPage/Frame 364 (1).png",
  },
]

export default Testimonials