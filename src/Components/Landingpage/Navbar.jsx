import { Link, NavLink } from "react-router-dom"
import Button from "./Button"

const Navbar = () => {
  const linkCLass = ({ isActive }) =>
    isActive
      ? "text-[#d87139] hover:text-[#cc7242b9] cursor-pointer duration-200 text-base font-semibold font-['Open Sans'] leading-normal"
      : "hover:text-[#cc7242b9] text-white cursor-pointer duration-200 text-base font-normal font-['Open Sans'] leading-normal"

  return (
    <nav className="w-full h-20 pl-[102px] py-[16] bg-[#041d31] ">
      <section className="h-full w-full flex justify-between">
        <div className="h-full flex items-center">
          <NavLink to={"/"}>
            <img src={"/src/Logos/Logo.png"} alt="logo" />
          </NavLink>
          <div className="flex pl-36 gap-6">
            <NavLink to={"/"} className={linkCLass}>
              Home
            </NavLink>
            <NavLink to={"/about"} className={linkCLass}>
              About
            </NavLink>
            <NavLink to={"/course"} className={linkCLass}>
              <p>Courses</p>
            </NavLink>
            <NavLink to={"/testimonials"} className={linkCLass}>
              <p>Testimonial</p>
            </NavLink>
          </div>
        </div>
        <div className="h-full flex justify-center gap-4 mr-6 items-center">
          <Button title={"Signup"} bg={"bg-[#cc7342]"} path={"/signup"} />
          <Button title={"Login"} bg={"bg-transparent"} path={"/other"} />
        </div>
      </section>
    </nav>
  )
}

export default Navbar
