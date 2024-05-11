const FormCard = ({ children, text, action }) => {
  return (
    <div className="flex flex-col ">
      <p className="text-zinc-800  pb-8 text-[30px] font-medium font-['Roboto']">
        {text}
      </p>
      <form onSubmit={action} action="submit">
      {children}
      </form>
    </div>
  )
}

export default FormCard
