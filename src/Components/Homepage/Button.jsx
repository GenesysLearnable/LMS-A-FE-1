const Button = ({ title, bg }) => {
  return (
    <button
      className={`${bg} h-12 w-[175px] px-3.5 py-2 rounded-3xl border-2 border-[#cc7342] flex justify-center items-center`}
    >
      <p className="text-white text-base font-semibold leading-tight">
        {title}
      </p>
    </button>
  )
}

export default Button
