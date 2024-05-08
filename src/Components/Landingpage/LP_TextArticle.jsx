import Button from "./Button"

const LP_TextArticle = ({ heading, text, btn, title, textStyle }) => {
  return (
    <article className="mt-[61px] flex flex-col justify-between gap-7">
      <p className={`${title} w-[526px] font-bold leading-[46px]`}>{heading}</p>
      <p
        className={`w-[546px] ${textStyle} text-base font-normal leading-normal`}
      >
        {text}
      </p>

      <Button title={btn} bg={"bg-[#cc7342]"} />
    </article>
  )
}

export default LP_TextArticle
