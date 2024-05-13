import Style from './LessonCoreDetails.module.css';

const CoreDetails = function ({ numberOfLessons, totalDuration }) {
  return (
    <div className={Style.core__details}>
      <h2>Lessons in this class</h2>
      <h5>
        {numberOfLessons} lessons &#10088;{totalDuration}&#10089;
      </h5>
    </div>
  );
};

export default CoreDetails;
