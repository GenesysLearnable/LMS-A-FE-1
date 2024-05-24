const FormCard = ({ children, text, subtext="" }) => {
  return (
    <div className="flex flex-col gap">
      <p className="text-zinc-800 text-[28px] pb-1 font-medium font-['Roboto']">
        {text}
      </p>
      <p className="opacity-80 pb-7 text-zinc-800 text-md font-normal">
        {subtext}
      </p>
      <form>{children}</form>
    </div>
  );
};

export default FormCard;
