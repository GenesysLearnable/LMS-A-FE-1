import { Link } from "react-router-dom"

const Button = ({ title, bg }) => {
  return (
    <Link to={"/other"}>
      <button
        className={`${bg} h-12 w-[175px] px-11 py-3 rounded-lg gap-2 text-white shadow hover:text-[#ffffffe3] duration-200 border-2 border-[#cc7342] flex justify-center items-center`}
      >
        <p className="text-base font-semibold leading-tight">{title}</p>
      </button>
    </Link>
  )
}

export default Button
