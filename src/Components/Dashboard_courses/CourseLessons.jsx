import { Link } from "react-router-dom";
import Button from "../Landingpage/Button";

const CourseLessons = ({
  img,
  text,
  duration,
  btnText,
  btnBg,
  hover,
  btnTS,
  path,
}) => {
  return (
    <Link
      to={path}
      className={` ${hover} rounded-xl text-[#515355] flex items-center justify-between shadow-sm border border-gray-200 py-6 px-[18px] `}
    >
      <div className="flex gap-4 items-center">
        <img src={img} alt="module img" />
        <p className={` flex flex-col text-base font-medium`}>
          <span>{text}</span>
          <span>{duration}</span>
        </p>
      </div>
      <Button
        title={btnText}
        bg={btnBg}
        w={"w-[110px]"}
        h="h-10"
        textStyle={`${btnTS} text-sm font-medium`}
        path={path}
      />
    </Link>
  );
};

export default CourseLessons;
