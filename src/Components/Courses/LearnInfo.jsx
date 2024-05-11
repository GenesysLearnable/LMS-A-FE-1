import CheckMarks from './PrimeFeatures';
import Style from './LearnInfo.module.css';

const LearnInfo = function () {
  return (
    <div className={Style.course__key__info}>
      <h2>What you&apos;ll learn</h2>
      <div>
        <CheckMarks coreIdeas="Learn the basics of UI/UX Design" />

        <CheckMarks coreIdeas="Understand the basic principles of Design" />

        <CheckMarks coreIdeas="Understand the basics of user experience Design" />

        <CheckMarks coreIdeas="Learn the basics of user interface Design" />
      </div>
    </div>
  );
};

export default LearnInfo;
