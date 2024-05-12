import { Link } from "react-router-dom"
import SubmitButton from "./SubmitButton"

const ButtonFeature = ({ text, buttonText, spanText, path }) => {
  return (
    <div className="pt-[20px] flex flex-col justify-center items-center gap-3">
      <SubmitButton text={buttonText} />

      <p className="opacity-60 text-neutral-400 text-base font-medium font-['Roboto']">
        {text}
        <Link to={path}>
          <span className="text-orange-400">{spanText}</span>
        </Link>
      </p>
    </div>
  )
}

export default ButtonFeature
