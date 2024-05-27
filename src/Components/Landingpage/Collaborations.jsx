const Collaborations = () => {
  return (
    <section className="w-full bg-slate-50 flex flex-col justify-center items-center mt-10 xl:mt-16 mb-4">
      <p className="text-black w-[80%] xl:w-full text-[22px] xl:text-[28.88px] text-center xl:text-start flex-wrap font-semibold font-['Poppins'] leading[30px] xl:leading-[49.10px]">
        We collaborate with, 325+ leading universities and companies
      </p>

      <div className="flex flex-wrap gap-12 px-2 xl:gap-16 justify-center items-center mt-8 xl:mt-10">
        <img
          className="xl:h-[49.60px] h-[36.60px] xl:w-[124px] w-[100px]"
          src="/Logos/Landingpage/Group 30.png"
          alt="scribd logo"
        />
        <img
          className="xl:h-[49.60px] h-[36.60px] xl:w-[124px] w-[100px] opacity-60 mix-blend-luminosity"
          src="/Logos/Landingpage/download (1) 1.png"
          alt="genesys logo"
        />

        <img  src="/Logos/Landingpage/Group 31.png" alt="internet archive logo" />
        <img className="xl:h-[49.60px] h-[36.60px] xl:w-[124px] w-[100px]" src="/Logos/Landingpage/ibm 1.png" alt="ibm logo" />
        <img className="xl:h-[49.60px] h-[36.60px] xl:w-[124px] w-[100px]" src="/Logos/Landingpage/Group 32.png" alt="open library logo" />
      </div>
    </section>
  )
}

export default Collaborations
