import { Link } from "react-router-dom"

const Button = ({ title, bg, path }) => {
  return (
    <Link to={path}>
      <button
        className={`${bg} h-12 w-[175px] px-3.5 py-3 rounded-lg gap-1 text-white shadow hover:text-[#ffffffe3] duration-200 border-2 border-[#ff9053] flex justify-center items-center`}
      >
        <p className="text-base font-semibold font-['Inter'] leading-tight">{title}</p>
      </button>
    </Link>
  )
}

export default Button
