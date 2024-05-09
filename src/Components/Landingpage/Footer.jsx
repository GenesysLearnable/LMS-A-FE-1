const Footer = () => {
  const titleStyles =
    "text-white text-base pb-5 font-bold font-['Open Sans'] uppercase leading-snug tracking-wide"
  const subStyles =
    "h-7 text-gray-400 text-base hover:text-gray-300 duration-200 cursor-pointer font-normal font-['Open Sans'] leading-snug"
  return (
    <footer className="pt-[86px] relative px-[72px]  bg-[#041d31] ">
      <div className="flex justify-between">
        <div className="grid grid-cols-3 ">
          <div className="flex flex-col w-[250.67px]">
            <p className={titleStyles}>DISCOVER</p>

            <p className={subStyles}>Courses</p>
            <p className={subStyles}>Courses</p>
            <p className={subStyles}>Courses</p>
            <p className={subStyles}>Courses</p>
          </div>
          <div className="flex flex-col w-[250.67px]">
            <p className={titleStyles}>HELP</p>

            <p className={subStyles}>Report a problem</p>
            <p className={subStyles}>Help center</p>
          </div>
          <div className="flex flex-col w-[250.67px]">
            <p className={titleStyles}>INFO</p>

            <p className={subStyles}>About Us</p>
            <p className={subStyles}>Testimonials</p>
            <p className={subStyles}>Contact</p>
          </div>
        </div>

        <div>
          <div className="flex justify-end pb-16 border-b-[#ffffff40] border-b-[1px]">
            <img
              className="flex items-end w-11"
              src="/src/Logos/Logo.png"
              alt="logo"
            />
          </div>

          <div className="flex flex-col items-end pt-6">
            <p className="text-[#ffffffb7]">+234 0802-091-6565</p>
            <p className="text-[#ffffffb7]">skilhub@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-[70px] pb-7">
        <p className={subStyles}>
          @2024 -Copyright Group 1: Learnable Build Season
        </p>
        <img src="" alt="scroll to top" />
      </div>
    </footer>
  )
}

export default Footer
