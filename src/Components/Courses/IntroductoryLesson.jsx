import Style from './IntroductoryLesson.module.css';

const IntroductoryLesson = function ({ title, minutes, seconds }) {
  return (
    <section className="w-[837px] h-auto bg-[#041d31] flex justify-between items-center rounded-lg">
      <div className="h-auto flex items-center gap-1 pr-0 px-2.5 py-4">
        <img
          className="w-8 h-auto mr-1.5"
          src="/Images/Courses/Play-Icon.svg"
          alt="Play"
        />

        <h4 className="text-white font-normal text-base leading-6">1.</h4>

        <h4 className="text-white font-normal text-base leading-6">{title}</h4>
      </div>
      <h4 className="text-white font-normal text-base leading-6 mr-4">
        {minutes}:{seconds}
      </h4>
    </section>
  );
};

export default IntroductoryLesson;
