import Button from "./Button"


const LP_TextArticle = ({ heading, text, btn, title, textStyle, path }) => {
  return (
    <article className="mt-[61px] flex flex-col justify-center lg:justify-between items-center lg:items-start font-['Poppins']">
      <p className={`${title} w-[371px] text-center lg:text-start lg:w-[426px] xl:w-[526px] font-bold `}>{heading}</p>
      <p
        className={`w-[400px] lg:w-[446px] xl:w-[546px] text-center xl:text-start ${textStyle} text-base font-normal pb-6 font-['Poppins'] leading-normal`}
      >
        {text}
      </p>

      <Button title={btn} bg={"bg-[#ff9053]"} path={path} />
    </article>
  )
}

export default LP_TextArticle
