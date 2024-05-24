import LP_TextArticle from "./LP_TextArticle";
import LP_TwinCard from "./LP_TwinCard";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center relative bg-slate-50 font-['Roboto']"
    >
      <img
        className="absolute top-[320px] left-0 h-[571px] w-[414px]"
        src={"/Images/LandingPage/Vector 11.1.png"}
        alt="vector"
      />
      <LP_TwinCard>
        <img
          className="w-[599px] h-[620px]"
          src={"/Images/LandingPage/businessman-working-laptop 1.png"}
          alt=""
        />
        <article>
          <LP_TextArticle
            heading={details.heading}
            text={details.text}
            size={details.size}
            btn={details.btn}
            title={details.title}
            textStyle={details.textStyle}
            path={"/other"}
          />
        </article>
      </LP_TwinCard>
    </section>
  );
};

const details = {
  heading: "About Skillhub",
  text: "SkillHub is an innovative online platform designed to empower individuals with essential skills precisely when they need them. Our mission at SkillHub is to provide a comprehensive and engaging learning experience that helps users unlock their full potential and achieve success in their personal and professional endeavors.",
  size: "40",
  btn: "Learn more",
  title: "text-[28px] pb-4 text-black",
  textStyle: "text-black",
};

export default About;
