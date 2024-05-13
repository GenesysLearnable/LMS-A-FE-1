const SubmitButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} type="button" className="px-4 h-12 outline-none border rounded-lg  w-[416px] bg-[#ff9053] text-white">
      <p className="text-center text-white text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
        {text}
      </p>
    </button>
  )
}

export default SubmitButton
