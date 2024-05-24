import Id_Button from "../Components/Signup and Login/Id_Button";

const SignupPage = () => {
  return (
    <section className="w-screen overflow-hidden h-screen relative flex flex-col justify-center items-center bg-gradient-to-r from-[#5f7484] via-[#3a5265] to-[#163248]">
      <img
        className="absolute top-[-10px] left-[65px] h-fit w-fit"
        src="/src/Images/SignupPage/Vector 17.png"
        alt="vector"
      />
      <img
        className="absolute top-0  left-0 h-fit w-fit"
        src="/src/Images/SignupPage/Vector 18.png"
        alt="vector"
      />
      <section className="absolute top-[130px] left-[647px] ">
        <img
          className="w-[50px] md:text-[60px]"
          src="/src/Logos/Logo.png"
          alt=""
        />
      </section>
      <section className="justify-center z-10 flex flex-col  items-center">
        <p>
          <span className=" text-white text-[30px] pr-1 md:text-[42px] font-bold font-['Roboto']">
            Welcome to
          </span>{" "}
          <span className=" text-[#cc7342] text-[30px] md:text-[42px] font-bold font-['Roboto']">
            SkillHub
          </span>
        </p>

        <div className="pt-12">
          <p className="text-center text-white text-[35px] md:text-[40px] font-bold font-['Roboto']"></p>
          <p className=" text-white text-[20px] md:text-[25]  font-bold font-['Inter']">
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
  );
};

export default SignupPage;
