import Style from './OtherLessons.module.css';

const OtherLessons = function ({ number, title, minutes, seconds }) {
  return (
    <section className="w-[837px] h-auto bg-[#f5f6fa] flex justify-between items-center">
      <div className="w-max h-auto flex items-center gap-1 pr-0 p-4">
        <img
          className="w-[17.2px] h-[23.41px] mr-3"
          src="/Images/Courses/Locked-Icon.svg"
          alt="Locked"
        />

        <h4 className="w-max text-[#041d31] font-normal text-base leading-6 font-['Poppins']">
          {number}.
        </h4>

        <h4 className="w-max text-[#041d31] font-normal text-base leading-6 font-['Poppins']">
          {title}
        </h4>
      </div>
      <h4 className="w-max text-[#041d31] font-normal text-base leading-6 font-['Poppins'] pr-4">
        {minutes}:{seconds}
      </h4>
    </section>
  );
};

export default OtherLessons;
