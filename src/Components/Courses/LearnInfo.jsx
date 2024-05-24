import CheckMarks from './PrimeFeatures';
import Style from './LearnInfo.module.css';

const LearnInfo = function () {
  return (
    <div className="mt-0.5 mb-[77px]">
      <h2 className="font-bold text-2xl leading-9 ml-px mb-[15px] font-['Poppins']">
        What you&apos;ll learn
      </h2>
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
