import { Link } from "react-router-dom";

const Id_Button = ({ text, subtext, path }) => {
  return (
    <Link to={path}>
      <button className="py-3 px-4 bg-white w-[405px] flex gap-3 justify-center items-center rounded-md border-[1.5px] border-black">
        <img
          className="w-11 h-11"
          src="/src/Icons/Signup/profile.png"
          alt="profile"
        />
        <span className="flex flex-col gap-1">
          <p className="text-zinc-800 text-start w-full text-[20px] font-medium font-['Roboto']">
            {text}
          </p>

          <p className="w-full text-start text-neutral-400 text-sm font-normal font-['Roboto']">
            {subtext}
          </p>
        </span>
        <input className="size-4 cursor-pointer" type="checkbox" />
      </button>
    </Link>
  );
};

export default Id_Button;
