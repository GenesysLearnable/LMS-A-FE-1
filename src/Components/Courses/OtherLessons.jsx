import Style from './OtherLessons.module.css';

const OtherLessons = function ({ number, title, minutes, seconds }) {
  return (
    <section className={Style.intro}>
      <div className={Style.description}>
        <img src="/src/Images/Courses/Locked-Icon.svg" alt="Locked" />

        <h4>{number}.</h4>

        <h4>{title}</h4>
      </div>
      <h4>
        {minutes}:{seconds}
      </h4>
    </section>
  );
};

export default OtherLessons;
