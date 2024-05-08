import Button from "./Button"

const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-[#041d31] font-['Open Sans']">
        <img className="absolute top-20 left-[41%] h-[531px]" src="/src/Images/Vector 10.png" alt="vector1" />
        <img className="absolute top-20 left-[74.2%] h-[531px]" src="/src/Images/Vector 11.png"/>
      <section className="w-[88%] z-10 flex items-center gap-16 justify-between mt-[82px] mb-[57.8px] border-black">
        <article className="">
          <article className="mt-[61px] flex flex-col justify-between gap-7">
            <h1 className="text-[40px]  w-[526px] text-white font-bold leading-[46px]">
              Empowering You with Essential Skills Exactly When You Need Them
            </h1>
            <p className="w-[546px] text-stone-300 text-base font-normal leading-normal">
              Welcome to SkillHub, your ultimate destination for unlocking your
              full potential! At SkillHub, we're dedicated to providing you with
              the essential skills precisely when you need them to succeed and
              excel in your journey of learning and skill development.
            </p>

            <Button title={"Get Started"} bg={"bg-[#cc7342]"} />
          </article>
          <article className="flex mt-[160px] items-center justify-between">
            <Article text={"Expert tutors"} num={"500"}/>
            <div className="h-8 w-[1px] bg-[#303168]  flex items-center" />
            <Article text={"Online Students"} num={"1000"}/>
            <div className="h-8 w-[1px] bg-[#303168] flex items-center" />
            <Article text={"Expert courses"} num={"2000"}/>
          </article>
        </article>
        <img
          className="w-[599px] h-[620px]"
          src={"/src/Images/businessman-working-laptop 1@2x.png"}
          alt="man-on-laptop"
        />
      </section>
    </section>
  )
}

const Article = ({ text, num }) => {
  return (
    <article className={`flex flex-col`}>
      <h1 className="text-[#cc7342] py-[2px] flex justify-start text-4xl font-semibold font-['Open Sans']">{`${num}+`}</h1>
      <p className="text-[#a2a7bb] text-sm font-semibold font-['Open Sans'] leading-7 ">
        {text}
      </p>
    </article>
  )
}

export default Hero
