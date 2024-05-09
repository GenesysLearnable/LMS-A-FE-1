import Id_Button from "../Components/Signup and Login/Id_Button"

const SignupPage = () => {
  return (
    <section className="w-screen overflow-hidden h-screen relative flex justify-center items-center bg-gradient-to-r from-[#5f7484] via-[#3a5265] to-[#163248]">
      <img
        className="absolute top-[-10px] left-[65px] h-fit w-[450px]"
        src="/src/Images/SignupPage/Vector 17.png"
        alt="vector"
      />
      <img
        className="absolute top-0  left-0 h-fit w-[450px]"
        src="/src/Images/SignupPage/Vector 18.png"
        alt="vector"
      />
      <section className="justify-center z-10   items-center">
        <div className="flex justify-center items-center flex-col gap-[35px]">
          <div className="flex gap-6 justify-center items-center">
            <img className="w-[60px]" src="/src/Logos/Logo.png" alt="" />
            <p className=" text-[#cc7342] text-[80px] font-bold font-['Inter']">
              SkillHub
            </p>
          </div>

          <p className="h-24 text-center text-white text-[45px] font-bold font-['Inter']">
            Welcome
          </p>
        </div>
        <div className="pt-12">
          <p className="h-[42px] text-white text-[25px] font-bold font-['Inter']">
            Select your category
          </p>

          <div className="flex flex-col pt-4 gap-4 ">
            <Id_Button
              text={"I am a student"}
              subtext={"I am signing up to join an internship program."}
              path={"/signup/student"}
            />
            <Id_Button
              text={"I am an admin"}
              subtext={"My organization runs tech internship program."}
              path={"/other"}
            />
          </div>
        </div>
      </section>
    </section>
  )
}




export default SignupPage
