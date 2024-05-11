const Input = ({ type, placeholder, value, setValue }) => {
  return (
    <input
      className="px-4 h-12 border-[1px] border-[#79747e] rounded-md w-[416px] focus:outline-[#ff9053]"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default Input
