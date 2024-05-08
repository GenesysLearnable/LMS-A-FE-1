import { Link } from "react-router-dom"
import Button from "./Button"

const Navbar = () => {
  const textStyles =
    "text-white cursor-pointer hover:text-[#ffffffab] duration-200 text-base font-normal font-['Open Sans'] leading-normal"

  return (
    <nav className="w-full h-20 pl-[102px] py-[16] bg-[#172b3a] ">
      <section className="h-full w-full flex justify-between">
        <div className="h-full flex items-center">
          <Link to={"/"}>
          <img src={"/src/Logos/Logo.png"} alt="logo" />
          </Link>
          <div className="flex pl-36 gap-6">
            <Link to={"/other"}>
              <p className={textStyles}>Home</p>
            </Link>
            <Link to={"/other"}>
              <p className={textStyles}>About</p>
            </Link>
            <Link to={"/other"}>
              <p className={textStyles}>Courses</p>
            </Link>
            <Link to={"/other"}>
              <p className={textStyles}>Testimonial</p>
            </Link>
          </div>
        </div>
        <div className="h-full flex justify-center gap-4 mr-6 items-center">
          <Button title={"Signup"} bg={"bg-[#cc7342]"} />
          <Button title={"Login"} bg={"bg-transparent"} />
        </div>
      </section>
    </nav>
  )
}

export default Navbar
