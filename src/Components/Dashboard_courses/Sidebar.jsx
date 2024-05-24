import { NavLink, useNavigate } from "react-router-dom";
import { UpdateLoginStatus } from "../../LoginContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logOut } = UpdateLoginStatus();
  const textStyles = ({ isActive }) =>
    isActive
      ? "pl-4 py-[11px] text-[#F9F9F9] outline-none w-[180px] flex place-items-center gap-2 font-medium text-[16px] rounded-xl bg-[#ff9053] pr-[4px] "
      : "pl-4 py-[11px] text-[#F9F9F9] outline-none w-[180px] hover:bg-[#ffa06c2a] flex place-items-center rounded-xl gap-2 pr-[4px] font-medium text-[16px]";

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <section className="bg-[#041D31] h-screen overflow-hidden pl-7 pr-8">
      <div className="flex items-center justify-center w-full gap-1 mt-9">
        <img
          onClick={() => navigate("/")}
          className="w-6 h-[22px] cursor-pointer "
          src="/Logos/Vector 9 (1).png"
          alt="logo"
        />
        <p
          onClick={() => navigate("/")}
          className="text-[#ff9053] text-xl place-items-center cursor-pointer font-bold font-['Roboto']"
        >
          SKILLHUB
        </p>
      </div>
      <section className="mt-[60px] h-64 flex flex-col gap-56">
        <div className="flex flex-col gap-4 ">
          <NavLink to={"/students/dashboard"} className={textStyles}>
            <img
              className="w-6 h-[22px]"
              src="/Icons/dashboard/element-2.png"
              alt="dashboard icon"
            />
            Dashboard
          </NavLink>
          <NavLink to={"/students/account"} className={textStyles}>
            <img
              className="w-6 h-[22px]"
              src="/Icons/dashboard/profile.png"
              alt="dashboard icon"
            />
            Account
          </NavLink>
          <NavLink to={"/students/courses"} className={textStyles}>
            <img
              className="w-6 h-[22px]"
              src="/Icons/dashboard/book-square.png"
              alt="dashboard icon"
            />
            Courses
          </NavLink>

          <NavLink to={"/students/certificate"} className={textStyles}>
            <img
              className="w-6 h-[22px]"
              src="/Icons/dashboard/Graduation Cap.png"
              alt="dashboard icon"
            />
            Certification
          </NavLink>
        </div>

        <div
          onClick={handleLogout}
          className="flex cursor-pointer text-[#F9F9F9] pl-4 place-items-center gap-2 font-medium text-[16px]"
        >
          <img
            className="w-6 h-[22px]"
            src="/Icons/dashboard/logout.png"
            alt="logout"
          />
          Log out
        </div>
      </section>
    </section>
  );
};

export default Sidebar;
