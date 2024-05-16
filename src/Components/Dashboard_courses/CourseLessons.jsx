import Button from "../Landingpage/Button"

const CourseLessons = ({
  bg,
  img,
  text,
  tS = "text-[#515355]",
  duration,
  btnText,
  btnBg,
  btnW,
  btnTS,
  onClick,
}) => {
  return (
    <div
      className={` ${bg} rounded-xl flex items-center justify-between shadow-sm border border-gray-200 py-6 px-[18px] `}
    >
      <div className="flex gap-4 items-center">
        <img src={img} alt="module img" />
        <p className={`${tS} flex flex-col text-base font-medium`}>
          <span>{text}</span>
          <span>{duration}</span>
        </p>
      </div>
      <Button
        title={btnText}
        bg={btnBg}
        w={btnW}
        h="h-10"
        textStyle={`${btnTS} text-sm font-medium`}
        onClick={onClick}
      />
    </div>
  )
}

export default CourseLessons
