import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="w-full h-20 pl-[102px] py-[16] bg-[#172b3a] ">
      <section className="h-full w-full flex justify-between">
        <div className="h-full flex items-center">
          <img src={"/src/Logos/Logo.png"} alt="logo" />
          <div className="flex pl-36 gap-6">
            <p className="text-white cursor-pointer text-base font-normal font-['Open Sans'] leading-normal">
              Home
            </p>
            <p className="text-white cursor-pointer text-base font-normal font-['Open Sans'] leading-normal">
              About
            </p>
            <p className="text-white cursor-pointer text-base font-normal font-['Open Sans'] leading-normal">
              Courses
            </p>
            <p className="text-white cursor-pointer text-base font-normal font-['Open Sans'] leading-normal">
              Testimonial
            </p>
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
