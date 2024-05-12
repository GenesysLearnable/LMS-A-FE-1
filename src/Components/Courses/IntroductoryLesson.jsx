import Style from './IntroductoryLesson.module.css';

const IntroductoryLesson = function ({ title, minutes, seconds }) {
  return (
    <section className={Style.intro}>
      <div className={Style.description}>
        <img src="/Images/Courses/Play-Icon.svg" alt="Play" />

        <h4>1.</h4>

        <h4>{title}</h4>
      </div>
      <h4>
        {minutes}:{seconds}
      </h4>
    </section>
  );
};

export default IntroductoryLesson;
