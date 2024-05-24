import IntroductoryLesson from "./IntroductoryLesson";
import OtherLessons from "./OtherLessons";
import LessonCoreDetails from "./LessonCoreDetails";
import Style from "./ClassLessons.module.css";

const ClassLessons = function () {
  return (
    <div className={Style.lessons}>
      <LessonCoreDetails numberOfLessons={5} totalDuration="16min 14secs" />

      <div>
        <IntroductoryLesson
          title="Getting started in Product design"
          minutes={1}
          seconds={26}
        />
      </div>

      <OtherLessons
        number={2}
        title="Introduction to User experience"
        minutes={1}
        seconds="00"
      />

      <OtherLessons
        number={3}
        title="Introduction to Figma"
        minutes={4}
        seconds="09"
      />

      <OtherLessons
        number={4}
        title="Introduction to User interface design"
        minutes={2}
        seconds="54"
      />

      <OtherLessons
        number={5}
        title="Responsive designs"
        minutes={1}
        seconds="33"
      />
    </div>
  );
};

export default ClassLessons;
