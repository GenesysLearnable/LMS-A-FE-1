import LP_TextArticle from "./LP_TextArticle"
import LP_TwinCard from "./LP_TwinCard"

const Hero = () => {
  return (
    <section className="flex items-center relative overflow-hidden justify-center bg-[#041d31] ">
      <img
        className="absolute top-0 left-[41%] h-[531px]"
        src="/Images/LandingPage/Vector 10.png"
        alt="vector1"
      />
      <img
        className="absolute top-0 left-[73.2%] h-[531px]"
        src="/Images/LandingPage/Vector 11.png"
      />
      <LP_TwinCard>
        <article>
          <LP_TextArticle
            heading={details.heading}
            text={details.text}
            size={details.size}
            btn={details.btn}
            title={details.title}
            textStyle={details.textStyle}
            path={"/students/dashboard"}
          />
          <article className="flex mt-[70px] xl:mt-[160px] items-center justify-between">
            <Article text={"Expert tutors"} num={"500"} />
            <div className="h-7 xl:h-8 w-[1px] bg-[#303168]  flex items-center" />
            <Article text={"Online Students"} num={"1000"} />
            <div className="h-7 xl:h-8 w-[1px] bg-[#303168] flex items-center" />
            <Article text={"Expert courses"} num={"2000"} />
          </article>
        </article>
        <img
          className="w-[599px] h-[670px] xl:h-[620]"
          src={"/Images/LandingPage/businessman-working-laptop 1@2x.png"}
          alt="man-on-laptop"
        />
      </LP_TwinCard>
    </section>
  )
}

const Article = ({ text, num }) => {
  return (
    <article className={`flex flex-col`}>
      <h1 className="text-[#cc7342] py-[2px] flex justify-start text-4xl font-semibold font-['Roboto']">{`${num}+`}</h1>
      <p className="text-[#a2a7bb] text-sm font-medium font-['Roboto'] leading-7 ">
        {text}
      </p>
    </article>
  )
}

const details = {
  heading: " Empowering You with Essential Skills Exactly When You Need Them",
  text: "Welcome to SkillHub, your ultimate destination for unlocking your full potential! At SkillHub, we're dedicated to providing you with the essential skills precisely when you need them to succeed and excel in your journey of learning and skill development.",
  size: "30 lg:40",
  btn: "Get Started",
  title: "text-[30px] lg:text-[37px] xl:text-[45px] leading-[44px] lg:leading-[56px] pb-5 lg:pb-7 text-white",
  textStyle: "text-[#bbbcbd]",
}

export default Hero
