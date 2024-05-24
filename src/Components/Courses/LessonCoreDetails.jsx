import Style from './LessonCoreDetails.module.css';

const CoreDetails = function ({ numberOfLessons, totalDuration }) {
  return (
    <div className="flex justify-between items-center mb-10">
      <h2 className="font-bold font-['Poppins'] text-2xl leading-9">
        Lessons in this class
      </h2>
      <h5 className="font-bold font-['Poppins'] text-base leading-6 self-end">
        {numberOfLessons} lessons &#10088;{totalDuration}&#10089;
      </h5>
    </div>
  );
};

export default CoreDetails;
