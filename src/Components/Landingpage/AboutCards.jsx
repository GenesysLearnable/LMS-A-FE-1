const AboutCards = ({icon, title, text}) => {
  return (
    <article className="px-[18px]  pt-9 pb-8 xl:pb-[40.35px] w-[375px] border xl:w-[275px] flex flex-col gap-4 ">
      <figure>
        <img  src={icon} alt="producivity icon" />
      </figure>
      <div>
        <p className="text-[16.74px] font-bold">{title}</p>
        <p className="xl:w-[239px] w-[339px] text-neutral-500">
            {text}
        </p>
      </div>
    </article>
  )
}

export default AboutCards
