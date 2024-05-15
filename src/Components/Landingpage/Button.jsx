import { Link } from "react-router-dom"

const Button = ({ onClick = null, title, bg, path, w = "w-[175px]", h = "h-12", textStyle="text-base" }) => {
  return (
    <Link to={path}>
      <button onClick={onClick}
        className={`${bg} ${h} ${w} px-3.5 py-3 rounded-lg gap-1 text-white shadow hover:text-[#ffffffe3] duration-200 border-2 border-[#ff9053] flex justify-center items-center`}
      >
        <p className={`${textStyle} font-semibold font-['Inter'] leading-tight`}>{title}</p>
      </button>
    </Link>
  )
}

export default Button
