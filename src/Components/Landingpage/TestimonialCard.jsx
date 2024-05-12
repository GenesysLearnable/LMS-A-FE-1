const TestimonialCard = ({ text, name, field, img }) => {
  return (
    <article className="pt-[81.51px] h-[454px] w-[347.33px] bg-slate-100 z-10 flex flex-col rounded-[14.82px] shadow gap-[30px] pb-[86.14px] px-[25.93px]">
      <p className="w-[289.90px] h-[150px] text-neutral-600 text-[14.82px] font-normal font-['Poppins'] leading-[25.19px]">
        {text}
      </p>
      <div className="flex flex-col gap-2">
        <p className="text-[14.82px]  text-zinc-800 font-bold font-['Open Sans'] leading-none">
          {name}
        </p>
        <p className="text-[14.82px] text-neutral-400 font-normal font-['Open Sans'] leading-none">
          {field}
        </p>

        <img className="w-[59.27px] pt-1" src={img} alt="user picture" />
      </div>
    </article>
  )
}

export default TestimonialCard
