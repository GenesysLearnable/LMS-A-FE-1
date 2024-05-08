const Collaborations = () => {
  return (
    <section className="w-full bg-white flex flex-col justify-center items-center mt-16 mb-4">
      <p className="text-black text-[28.88px] font-semibold leading-[49.10px]">
        We collaborate with, 325+ leading universities and companies
      </p>

      <div className="flex gap-16 justify-center items-center mt-10">
        <img
          className="h-[49.60px] w-[124px]"
          src="/src/Logos/Group 30.png"
          alt="scribd logo"
        />
        <img src="/src/Logos/Group 31.png" alt="internet archive logo" />
        <img src="/src/Logos/ibm 1.png" alt="ibm logo" />
        <img src="/src/Logos/Group 32.png" alt="open library logo" />
      </div>
    </section>
  )
}

export default Collaborations
