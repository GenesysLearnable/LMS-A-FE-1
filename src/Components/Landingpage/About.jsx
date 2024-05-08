import HTextArticle from "./HTextArticle"
import HTwinCard from "./HTwinCard"

const About = () => {
  const details = {
    heading: "About Skillhub",
    text: "SkillHub is an innovative online platform designed to empower individuals with essential skills precisely when they need them. Our mission at SkillHub is to provide a comprehensive and engaging learning experience that helps users unlock their full potential and achieve success in their personal and professional endeavors.",
    size: "40",
    btn: "Learn more",
    title: "text-[28px] text-black",
    textStyle: "text-black",
  }

  return (
    <section className="flex items-center justify-center relative  bg-white font-['Open Sans']">
      <img
        className="absolute top-[320px] left-0 h-[571px] w-[414px]"
        src={"/src/Images/Vector 11.1.png"}
        alt="vector"
      />
      <HTwinCard>
        <img
          className="w-[599px] h-[620px]"
          src={"/src/Images/businessman-working-laptop 1.png"}
          alt=""
        />
        <article>
          <HTextArticle
            heading={details.heading}
            text={details.text}
            size={details.size}
            btn={details.btn}
            title={details.title}
            textStyle={details.textStyle}
          />
        </article>
      </HTwinCard>
    </section>
  )
}

export default About
